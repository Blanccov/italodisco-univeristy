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
            return response()->json(['error' => 'No recruitments found for the specified department.'], 404);
        }

        return response()->json(['recruitments' => $recruitments]);
    }


    public function getRecruitmentsByDepartmentWithDate(Request $request)
    {
        $departament = $request->input('departament');
        $currentDate = now()->toDateString();
        $userId = auth()->user()->id;

        $userApplications = Application::where('user_id', $userId)->pluck('recruitment_id')->toArray();

        $recruitments = Recruitment::where('departament', $departament)
            ->where('start_date', '<=', $currentDate)
            ->where('end_date', '>', $currentDate)
            ->whereNotIn('id', $userApplications)
            ->get();

        if ($recruitments->isEmpty()) {
            return response()->json(['error' => 'No available recruitments found for the specified department.'], 404);
        }

        return response()->json(['recruitments' => $recruitments]);
    }


public function checkAndReopenRecruitment()
{
    $recruitments = Recruitment::whereDate('end_date', '<', now()->subMonth())
        ->get();

    foreach ($recruitments as $recruitment) {
        $acceptedCount = Application::where('recruitment_id', $recruitment->id)
            ->whereIn('status_id', [3, 4])
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

    return response()->json(['message' => 'Recruitments checked and reopened successfully.']);
}


public function getDepartments()
{
    $departments = Recruitment::select('departament')->distinct()->get('department');
    return $departments;
}




}
