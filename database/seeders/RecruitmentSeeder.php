<?php

namespace Database\Seeders;

use App\Models\Recruitment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RecruitmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Recruitment::factory()
        //     ->count(20)
        //     ->create();

        Recruitment::insert(
            [
                [
                    'name' => "Computer Science", "departament" => "College of Natural Sciences", "description" => "(Some description in English)", "places" => "2", "amount" => "120", "start_date" => "2023-04-07", "end_date" => "2023-05-07"
                ],
                [
                    'name' => "Physics", "departament" => "College of Natural Sciences", "description" => "(Some description in English)", "places" => "2", "amount" => "80", "start_date" => "2023-04-07", "end_date" => "2023-05-07"
                ],
                [
                    'name' => "Chemistry", "departament" => "College of Natural Sciences", "description" => "(Some description in English)", "places" => "2", "amount" => "60", "start_date" => "2023-04-07", "end_date" => "2023-05-07"
                ],
                [
                    'name' => "Mathematics", "departament" => "College of Natural Sciences", "description" => "(Some description in English)", "places" => "90", "amount" => "90", "start_date" => "2023-04-07", "end_date" => "2023-05-07"
                ],
                [
                    'name' => "Biology", "departament" => "College of Natural Sciences", "description" => "(Some description in English)", "places" => "70", "amount" => "70", "start_date" => "2023-04-07", "end_date" => "2023-05-07"
                ],
                [
                    'name' => "History", "departament" => "College of Humanities", "description" => "(Some description in English)", "places" => "80", "amount" => "70", "start_date" => "2023-04-07", "end_date" => "2023-05-07"
                ],
                [
                    'name' => "Literature", "departament" => "College of Humanities", "description" => "(Some description in English)", "places" => "60", "amount" => "50", "start_date" => "2023-05-07", "end_date" => "2023-06-07"
                ],
                [
                    'name' => "Philosophy", "departament" => "College of Humanities", "description" => "(Some description in English)", "places" => "70", "amount" => "60", "start_date" => "2023-05-07", "end_date" => "2023-06-07"
                ],
                [
                    'name' => "Medicine", "departament" => "College of Medical Sciences", "description" => "(Some description in English)", "places" => "120", "amount" => "100", "start_date" => "2023-05-07", "end_date" => "2023-06-07"
                ],
                [
                    'name' => "Nursing", "departament" => "College of Medical Sciences", "description" => "(Some description in English)", "places" => "80", "amount" => "70", "start_date" => "2023-05-07", "end_date" => "2023-06-07"
                ],
                [
                    'name' => "Psychology", "departament" => "College of Social Sciences", "description" => "(Some description in English)", "places" => "100", "amount" => "90", "start_date" => "2023-05-07", "end_date" => "2023-06-07"
                ],
                [
                    'name' => "Sociology", "departament" => "College of Social Sciences", "description" => "(Some description in English)", "places" => "90", "amount" => "80", "start_date" => "2023-05-07", "end_date" => "2023-06-07"
                ],
                [
                    'name' => "Political Science", "departament" => "College of Social Sciences", "description" => "(Some description in English)", "places" => "70", "amount" => "60", "start_date" => "2023-05-07", "end_date" => "2023-06-07"
                ],
                [
                    'name' => "Economics", "departament" => "College of Social Sciences", "description" => "(Some description in English)", "places" => "80", "amount" => "70", "start_date" => "2023-05-07", "end_date" => "2023-06-07"
                ],
                [
                    'name' => "Environmental Science", "departament" => "College of Natural Sciences", "description" => "(Some description in English)", "places" => "60", "amount" => "50", "start_date" => "2023-05-07", "end_date" => "2023-06-07"
                ],
                [
                    'name' => "Geography", "departament" => "College of Natural Sciences", "description" => "(Some description in English)", "places" => "50", "amount" => "40", "start_date" => "2023-05-07", "end_date" => "2023-06-07"
                ],
                [
                    'name' => "Engineering", "departament" => "College of Natural Sciences", "description" => "(Some description in English)", "places" => "100", "amount" => "90", "start_date" => "2023-05-07", "end_date" => "2023-06-07"
                ],
                [
                    'name' => "Journalism", "departament" => "College of Humanities", "description" => "(Some description in English)", "places" => "80", "amount" => "70", "start_date" => "2023-05-07", "end_date" => "2023-06-07"
                ],
                [
                    'name' => "Communication Studies", "departament" => "College of Humanities", "description" => "(Some description in English)", "places" => "70", "amount" => "60", "start_date" => "2023-05-07", "end_date" => "2023-06-07"
                ],
                [
                    'name' => "Dentistry", "departament" => "College of Medical Sciences", "description" => "(Some description in English)", "places" => "100", "amount" => "90", "start_date" => "2023-05-07", "end_date" => "2023-06-07"
                ],
                [
                    'name' => "Business Administration", "departament" => "College of Social Sciences", "description" => "(Some description in English)", "places" => "120", "amount" => "100", "start_date" => "2023-05-07", "end_date" => "2023-06-07"
                ],
                [
                    'name' => "Law", "departament" => "College of Social Sciences", "description" => "(Some description in English)", "places" => "80", "amount" => "70", "start_date" => "2023-05-07", "end_date" => "2023-06-07"
                ],
                [
                    'name' => "Architecture", "departament" => "College of Natural Sciences", "description" => "(Some description in English)", "places" => "70", "amount" => "60", "start_date" => "2023-05-07", "end_date" => "2023-06-07"
                ],
                [
                    'name' => "Fine Arts", "departament" => "College of Humanities", "description" => "(Some description in English)", "places" => "50", "amount" => "40", "start_date" => "2023-05-07", "end_date" => "2023-06-07"
                ],
                [
                    'name' => "Music", "departament" => "College of Humanities", "description" => "(Some description in English)", "places" => "60", "amount" => "50", "start_date" => "2023-05-07", "end_date" => "2023-06-07"
                ],
                [
                    'name' => "Veterinary Science", "departament" => "College of Medical Sciences", "description" => "(Some description in English)", "places" => "80", "amount" => "70", "start_date" => "2023-05-07", "end_date" => "2023-06-07"
                ],
                [
                    'name' => "Social Work", "departament" => "College of Social Sciences", "description" => "(Some description in English)", "places" => "70", "amount" => "60", "start_date" => "2023-05-07", "end_date" => "2023-06-07"
                ]
            ]
        );

    }
}
