<?php

namespace App\Services;

use Illuminate\Http\Request;
use App\Models\Application;
use Carbon\Carbon;
use App\Models\Recruitment;

class ApplicationService
{
    public function apply(Request $request)
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

        // Sprawdź, czy użytkownik już złożył wniosek na ten kierunek
        $existingApplication = Application::where('user_id', $user->id)
            ->where('recruitment_id', $recruitmentId)
            ->first();

        if ($existingApplication) {
            return response()->json(['error' => 'Już złożyłeś wniosek na ten kierunek.'], 400);
        }

        // Jeśli użytkownik spełnia wszystkie warunki, zapisz wniosek do bazy danych
        $application = new Application();
        $application->recruitment_id = $recruitmentId;
        $application->user_id = $user->id;
        $application->submission_date = $currentDate;
        $application->status_id = 1;
        $application->save();

        return response()->json(['message' => 'Wniosek został pomyślnie złożony.']);
    }
}
