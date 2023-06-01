<?php

namespace App\Services;

use Illuminate\Http\Request;
use App\Models\Recruitment;
use App\Models\Application;

class RecruitmentService
{
    public function getRecruitmentsByDepartment(Request $request)
    {
        $departament = $request->input('departament');

        $recruitments = Recruitment::where('departament', $departament)->get();

        if ($recruitments->isEmpty()) {
            return response()->json(['error' => 'Brak rekruatacji dla podanego departamentu.'], 404);
        }

        return response()->json(['recruitments' => $recruitments]);
    }


    public function getRecruitmentsByDepartmentWithDate(Request $request)
{
    $departament = $request->input('departament');
    $currentDate = now()->toDateString();

    $recruitments = Recruitment::where('departament', $departament)
        ->where('start_date', '<=', $currentDate)
        ->where('end_date', '>=', $currentDate)
        ->get();

    if ($recruitments->isEmpty()) {
        return response()->json(['error' => 'Brak rekrutacji dla podanego departamentu.'], 404);
    }

    return response()->json(['recruitments' => $recruitments]);
}

public function checkAndReopenRecruitment()
{
    $recruitments = Recruitment::whereDate('end_date', '<', now()->subMonth())
        ->get();

    foreach ($recruitments as $recruitment) {
        $acceptedCount = Application::where('recruitment_id', $recruitment->id)
            ->where('status_id', 3)
            ->count();

        $availableSpots = $recruitment->places - $acceptedCount;

        if ($availableSpots >= 10) {
            $recruitment->update([
                'places' => $availableSpots,
                'start_date' => now()->toDateString(),
                'end_date' => now()->addMonth()->toDateString(),
            ]);
        }
    }

    return response()->json(['message' => 'Sprawdzono i otwarto ponownie rekrutacje.']);
}

}
