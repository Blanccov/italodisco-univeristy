<?php

namespace App\Services;

use Illuminate\Http\Request;
use App\Models\Result;
use App\Models\Score;
use Illuminate\Support\Facades\Auth;
use App\Models\Recruitment;

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

}
