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

        // Result::insert(
        //     [
        //         ["subject" => "angielski", "score" => null, "balance" => 0.5, "user_id" => null, "recruitment_id" => 1],
        //         ["subject" => "matematyka", "score" => null, "balance" => 0.3, "user_id" => null, "recruitment_id" => 1],
        //         ["subject" => "historia", "score" => null, "balance" => 0.9, "user_id" => null, "recruitment_id" => 1],
        //         ["subject" => "fizyka", "score" => null, "balance" => 0.6, "user_id" => null, "recruitment_id" => 1],
        //         ["subject" => "biologia", "score" => null, "balance" => 0.8, "user_id" => null, "recruitment_id" => 1],
        //         ["subject" => "chemia", "score" => null, "balance" => 0.4, "user_id" => null, "recruitment_id" => 1],
        //         ["subject" => "angielski", "score" => null, "balance" => 0.7, "user_id" => null, "recruitment_id" => 2],
        //         ["subject" => "matematyka", "score" => null, "balance" => 0.2, "user_id" => null, "recruitment_id" => 2],
        //         ["subject" => "historia", "score" => null, "balance" => 0.4, "user_id" => null, "recruitment_id" => 2],
        //         ["subject" => "fizyka", "score" => null, "balance" => 0.9, "user_id" => null, "recruitment_id" => 2],
        //         ["subject" => "biologia", "score" => null, "balance" => 0.6, "user_id" => null, "recruitment_id" => 2],
        //         ["subject" => "chemia", "score" => null, "balance" => 0.3, "user_id" => null, "recruitment_id" => 2],
        //         ["subject" => "angielski", "score" => null, "balance" => 0.9, "user_id" => null, "recruitment_id" => 3],
        //         ["subject" => "matematyka", "score" => null, "balance" => 0.6, "user_id" => null, "recruitment_id" => 3],
        //         ["subject" => "historia", "score" => null, "balance" => 0.8, "user_id" => null, "recruitment_id" => 3],
        //         ["subject" => "fizyka", "score" => null, "balance" => 0.4, "user_id" => null, "recruitment_id" => 3],
        //         ["subject" => "biologia", "score" => null, "balance" => 0.7, "user_id" => null, "recruitment_id" => 3]
        //     ]
        //     );

    }
}
