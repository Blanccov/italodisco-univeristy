<?php

namespace App\Services;

use Illuminate\Http\Request;
use App\Models\Result;
use App\Models\Score;
use Illuminate\Support\Facades\Auth;
use App\Models\Recruitment;

class ScoreService
{

    public function addScore(Request $request)
    {
        $user = Auth::user();
        $recruitmentId = $request->input('recruitment_id');
        $subject = $request->input('subject');
        $scoreValue = $request->input('score');

        $recruitment = Recruitment::find($recruitmentId);

        if (!$recruitment) {
            return response()->json(['error' => 'Kierunek rekrutacyjny nie istnieje.'], 404);
        }

        $result = Result::where('recruitment_id', $recruitmentId)
            ->where('subject', $subject)
            ->first();

        if (!$result) {
            return response()->json(['error' => 'Wynik o podanym przedmiocie nie istnieje.'], 404);
        }

        $score = Score::where('result_id', $result->id)
            ->where('user_id', $user->id)
            ->first();

        if ($score) {
            $score->score = $scoreValue;
            $score->save();
        } else {
            $newScore = new Score();
            $newScore->result_id = $result->id;
            $newScore->user_id = $user->id;
            $newScore->score = $scoreValue;
            $newScore->save();
        }

        $balance = $result->balance * $scoreValue; // Aktualizacja pola balance

        return response()->json(['data' =>[
            'message' => 'Wynik został dodany lub zaktualizowany.',
            'result_id' => $result->id,
            'result' => $balance]
        ]);

    }

    public function uniqueSubjects(Request $request)
    {
        $recruitmentId = $request->input('recruitment_id');

        $results = Result::select('subject')
                        ->where('recruitment_id', $recruitmentId)
                        ->distinct()
                        ->get();

        return $results;
    }




}
