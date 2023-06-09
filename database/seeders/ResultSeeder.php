<?php

namespace Database\Seeders;

use App\Models\Recruitment;
use App\Models\Result;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ResultSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $recruitmentIds = range(1, 20);
        $subjects = [
            'mathematics', 'physics', 'chemistry', 'biology', 'history', 'english language'
        ];
        $balances = [0.25, 0.5, 0.75, 1];

        $results = [];

        foreach ($recruitmentIds as $recruitmentId) {
            $subjectIndex = 0;

            foreach ($subjects as $subject) {
                $balanceIndex = $subjectIndex % count($balances);

                $results[] = [
                    'subject' => $subject,
                    'balance' => $balances[$balanceIndex],
                    'recruitment_id' => $recruitmentId,
                ];

                $subjectIndex++;
            }
        }

        Result::insert($results);
    }
}
