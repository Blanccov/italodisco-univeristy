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
        Result::factory()
            ->count(25)
            ->create();

        Result::factory()
            ->count(5)
            ->create();

        Result::insert(
            [
                [
                    "subject" => "angielski", "score" => null, "balance" => 0.5, "user_id" => null, "recruitment_id" => 1
                ],
            ]
            );

    }
}
