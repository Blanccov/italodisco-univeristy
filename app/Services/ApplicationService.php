<?php

namespace App\Services;

use Illuminate\Http\Request;
use App\Models\Application;
use Carbon\Carbon;
use App\Models\Recruitment;
use Illuminate\Support\Facades\DB;
use App\Models\Result;
use App\Models\User;
use App\Models\Status;
use App\Models\Score;
use Illuminate\Support\Facades\Auth;

class ApplicationService
{
    public function applyForRecruitment(Request $request)
{
    $user = Auth::user();

    $recruitmentId = $request->input('recruitment_id');

    $recruitment = Recruitment::find($recruitmentId);

    if (!$recruitment) {
        return response()->json(['error' => 'Kierunek rekrutacyjny nie istnieje.'], 404);
    }

    $currentDate = Carbon::now();

    if ($currentDate->isBefore($recruitment->start_date) || $currentDate->isAfter($recruitment->end_date)) {
        return response()->json(['error' => 'Nie możesz aplikować na ten kierunek.'], 400);
    }

    $existingApplication = Application::where('user_id', $user->id)
        ->where('recruitment_id', $recruitmentId)
        ->first();

    if ($existingApplication) {
        return response()->json(['error' => 'Już złożyłeś wniosek na ten kierunek.'], 400);
    }

    $application = new Application();
    $application->recruitment_id = $recruitmentId;
    $application->user_id = $user->id;
    $application->status_id = 1;
    $application->submission_date = $currentDate;
    $application->save();

    return response()->json(['message' => 'Wniosek został pomyślnie złożony.']);
}


public function processRecruitmentResults()
{
    $currentDate = Carbon::now();

    $finishedRecruitments = Recruitment::where('end_date', '<', $currentDate)->get();

    foreach ($finishedRecruitments as $recruitment) {
        $applications = Application::where('recruitment_id', $recruitment->id)->get();

        $usersScores = [];
        foreach ($applications as $application) {
            $userId = $application->user_id;
            $statusId = $application->status_id;

            if ($statusId == 1 || $statusId == 2) {
                $results = Result::where('recruitment_id', $recruitment->id)->get();
                $totalScore = 0;

                foreach ($results as $result) {
                    $scoreRecord = Score::where('result_id', $result->id)
                        ->where('user_id', $userId)
                        ->first();

                    if ($scoreRecord) {
                        $score = $scoreRecord->score;
                        $balanceMultiplier = $result->balance;
                        $totalScore += $score * $balanceMultiplier;
                    }
                }

                $usersScores[$userId] = $totalScore;
            }
        }

        arsort($usersScores);

        $places = $recruitment->places;
        $acceptedUsers = array_slice(array_keys($usersScores), 0, $places);

        foreach ($applications as $application) {
            $userId = $application->user_id;
            $statusId = $application->status_id;

            if ($statusId == 1) {
                $application->status_id = 4;
            } elseif ($statusId == 2) {
                if (in_array($userId, $acceptedUsers)) {
                    $application->status_id = 3;
                } else {
                    $application->status_id = 4;
                }
            }

            $application->save();
        }
    }

    return response()->json(['message' => 'Processed applications for finished recruitments.']);
}


public function makePaymentForRecruitment(Request $request)
{
    $recruitmentId = $request->input('recruitment_id');
    $amount = $request->input('amount');

    $recruitment = Recruitment::find($recruitmentId);

    if (!$recruitment) {
        return response()->json(['error' => 'Kierunek rekrutacyjny nie istnieje.'], 404);
    }

    $currentDate = Carbon::now();

    if ($currentDate->isAfter($recruitment->end_date)) {
        return response()->json(['error' => 'Nie możesz dokonać wpłaty po zakończeniu rekrutacji.'], 400);
    }

    $application = Application::where('recruitment_id', $recruitmentId)
        ->where('status_id', 1)
        ->first();

    if (!$application) {
        return response()->json(['error' => 'Brak złożonych wniosków dla danego kierunku.'], 400);
    }

    if ($amount !== $recruitment->amount) {
        echo $amount;
        return response()->json(['error' => 'Nieprawidłowa kwota wpłaty.'], 400);
    }

    $application->status_id = 2;
    $application->save();

    return response()->json(['message' => 'Płatność została pomyślnie zrealizowana.']);
}

public function showApplications()
{
    $user = Auth::user();
    $applications = Application::where('user_id', $user->id)->get();

    $data = [];

    foreach ($applications as $application) {
        $recruitment = Recruitment::find($application->recruitment_id);
        $status = Status::find($application->status_id);

        $score = 0;

        if ($status->id == 3 || $status->id == 4) {
            $results = Result::where('recruitment_id', $recruitment->id)->get();

            foreach ($results as $result) {
                $scoreRecord = Score::where('result_id', $result->id)
                    ->where('user_id', $user->id)
                    ->first();

                if ($scoreRecord) {
                    $score += $scoreRecord->score * $result->balance;
                }
            }
        }

        $data[] = [
            'application_id' => $application->id,
            'recruitment_id' => $recruitment->id,
            'recruitment_name' => $recruitment->name,
            'status_id' => $status->id,
            'status_name' => $status->status,
            'score' => $score,
        ];
    }

    return response()->json(['applications' => $data]);
}

public function rejectApplication(Request $request)
{
    $user = Auth::user();
    $applicationId = $request->input('application_id');

    $application = Application::where('id', $applicationId)
        ->where('user_id', $user->id)
        ->where('status_id', '!=', 4)
        ->first();

    if (!$application) {
        return response()->json(['error' => 'Nie znaleziono aplikacji do odrzucenia lub aplikacja ma już status 4 (odrzucona).'], 404);
    }

    $application->status_id = 5;
    $application->save();

    return response()->json(['message' => 'Aplikacja została odrzucona.']);
}

}
