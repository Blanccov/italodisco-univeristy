<?php

namespace Database\Seeders;

use App\Models\Score;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ScoreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $scoreData = [];

        for ($userId = 1; $userId <= 57; $userId++) { //tu podać ilość użytkowników
            for ($i = 0; $i < 3; $i++) {
                $resultId = mt_rand(1, 20);
                $score = mt_rand(30, 100);

                $scoreData[] = [
                    'user_id' => $userId,
                    'result_id' => $resultId,
                    'score' => $score,
                ];
            }
        }

        Score::insert($scoreData);
    }
}
