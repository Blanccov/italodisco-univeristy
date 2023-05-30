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

        Result::insert(
            [
                ['subject' => "matematyka", "balance" => 0.3, "recruitment_id" => 1],
                ['subject' => "fizyka", "balance" => 0.5, "recruitment_id" => 1],
                ['subject' => "chemia", "balance" => 0.2, "recruitment_id" => 1],
                ['subject' => "biologia", "balance" => 0.7, "recruitment_id" => 1],
                ['subject' => "historia", "balance" => 0.4, "recruitment_id" => 1],
                ['subject' => "język angielski", "balance" => 0.6, "recruitment_id" => 1],
                ['subject' => "matematyka", "balance" => 0.8, "recruitment_id" => 2],
                ['subject' => "fizyka", "balance" => 0.4, "recruitment_id" => 2],
                ['subject' => "chemia", "balance" => 0.6, "recruitment_id" => 2],
                ['subject' => "biologia", "balance" => 0.9, "recruitment_id" => 2],
                ['subject' => "historia", "balance" => 0.3, "recruitment_id" => 2],
                ['subject' => "język angielski", "balance" => 0.7, "recruitment_id" => 2],
                ['subject' => "matematyka", "balance" => 0.5, "recruitment_id" => 3],
                ['subject' => "fizyka", "balance" => 0.2, "recruitment_id" => 3],
                ['subject' => "chemia", "balance" => 0.7, "recruitment_id" => 3],
                ['subject' => "biologia", "balance" => 0.4, "recruitment_id" => 3],
                ['subject' => "historia", "balance" => 0.6, "recruitment_id" => 3],
                ['subject' => "język angielski", "balance" => 0.8, "recruitment_id" => 3],
                ['subject' => "matematyka", "balance" => 0.2, "recruitment_id" => 4],
                ['subject' => "fizyka", "balance" => 0.6, "recruitment_id" => 4],
                ['subject' => "chemia", "balance" => 0.3, "recruitment_id" => 4],
                ['subject' => "biologia", "balance" => 0.8, "recruitment_id" => 4],
                ['subject' => "historia", "balance" => 0.7, "recruitment_id" => 4],
                ['subject' => "język angielski", "balance" => 0.5, "recruitment_id" => 4],
                ['subject' => "matematyka", "balance" => 0.6, "recruitment_id" => 5],
                ['subject' => "fizyka", "balance" => 0.9, "recruitment_id" => 5],
                ['subject' => "chemia", "balance" => 0.4, "recruitment_id" => 5],
                ['subject' => "biologia", "balance" => 0.2, "recruitment_id" => 5],
                ['subject' => "historia", "balance" => 0.8, "recruitment_id" => 5],
                ['subject' => "język angielski", "balance" => 0.3, "recruitment_id" => 5],
                ['subject' => "matematyka", "balance" => 0.7, "recruitment_id" => 6],
                ['subject' => "fizyka", "balance" => 0.3, "recruitment_id" => 6],
                ['subject' => "chemia", "balance" => 0.5, "recruitment_id" => 6],
                ['subject' => "biologia", "balance" => 0.6, "recruitment_id" => 6],
                ['subject' => "historia", "balance" => 0.2, "recruitment_id" => 6],
                ['subject' => "język angielski", "balance" => 0.4, "recruitment_id" => 6],
                ['subject' => "matematyka", "balance" => 0.4, "recruitment_id" => 7],
                ['subject' => "fizyka", "balance" => 0.7, "recruitment_id" => 7],
                ['subject' => "chemia", "balance" => 0.8, "recruitment_id" => 7],
                ['subject' => "biologia", "balance" => 0.3, "recruitment_id" => 7],
                ['subject' => "historia", "balance" => 0.5, "recruitment_id" => 7],
                ['subject' => "język angielski", "balance" => 0.6, "recruitment_id" => 7],
                ['subject' => "matematyka", "balance" => 0.9, "recruitment_id" => 8],
                ['subject' => "fizyka", "balance" => 0.5, "recruitment_id" => 8],
                ['subject' => "chemia", "balance" => 0.2, "recruitment_id" => 8],
                ['subject' => "biologia", "balance" => 0.6, "recruitment_id" => 8],
                ['subject' => "historia", "balance" => 0.7, "recruitment_id" => 8],
                ['subject' => "język angielski", "balance" => 0.4, "recruitment_id" => 8],
                ['subject' => "matematyka", "balance" => 0.3, "recruitment_id" => 9],
                ['subject' => "fizyka", "balance" => 0.6, "recruitment_id" => 9],
                ['subject' => "chemia", "balance" => 0.9, "recruitment_id" => 9],
                ['subject' => "biologia", "balance" => 0.5, "recruitment_id" => 9],
                ['subject' => "historia", "balance" => 0.4, "recruitment_id" => 9],
                ['subject' => "język angielski", "balance" => 0.7, "recruitment_id" => 9],
                ['subject' => "matematyka", "balance" => 0.5, "recruitment_id" => 10],
                ['subject' => "fizyka", "balance" => 0.8, "recruitment_id" => 10],
                ['subject' => "chemia", "balance" => 0.4, "recruitment_id" => 10],
                ['subject' => "biologia", "balance" => 0.7, "recruitment_id" => 10],
                ['subject' => "historia", "balance" => 0.3, "recruitment_id" => 10],
                ['subject' => "język angielski", "balance" => 0.6, "recruitment_id" => 10],

            ]
        );

    }
}
