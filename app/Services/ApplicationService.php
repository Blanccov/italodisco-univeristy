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
use Illuminate\Support\Facades\Auth;

class ApplicationService
{
    public function applyForRecruitment(Request $request)
{
    $user = $request->user();

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

            // Przetwarzaj tylko użytkowników z status 2 (oczekujący)
            if ($statusId == 2) {
                $results = Result::where('user_id', $userId)->get();

                $totalScore = 0;
                foreach ($results as $result) {
                    $score = $result->score;
                    $balance = $result->balance;
                    $totalScore += $score * $balance;
                }

                $usersScores[$userId] = $totalScore;
            }
        }
        arsort($usersScores);

        $places = $recruitment->places;
        $acceptedUsers = array_slice(array_keys($usersScores), 0, $places);

        foreach ($applications as $application) {
            $userId = $application->user_id;

            if (in_array($userId, $acceptedUsers)) {
                $application->status_id = 3;
            } else {
                $application->status_id = 4;
            }

            $application->save();
        }

        $rejectedUsers = array_slice(array_keys($usersScores), $places);

        foreach ($rejectedUsers as $userId) {
            $application = Application::where('recruitment_id', $recruitment->id)
                ->where('user_id', $userId)
                ->first();

            if ($application) {
                $application->status_id = 4;
                $application->save();
            }
        }
    }

    return response()->json(['message' => 'Przetworzono wnioski po zakończonych rekrutacjach.']);
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
        ->where('status_id', 1) // Tylko dla aplikacji ze statusem 1 (złożone)
        ->first();

    if (!$application) {
        return response()->json(['error' => 'Brak złożonych wniosków dla danego kierunku.'], 400);
    }

    // Porównaj wartość 'amount' z wartością przechowywaną w rekrutacji
    if ($amount !== $recruitment->amount) {
        return response()->json(['error' => 'Nieprawidłowa kwota wpłaty.'], 400);
    }

    // Dokonaj płatności

    // Jeśli płatność jest poprawna, zmień status na 2 (opłacone)
    $application->status_id = 2;
    $application->save();

    return response()->json(['message' => 'Płatność została pomyślnie zrealizowana.']);
}


}
