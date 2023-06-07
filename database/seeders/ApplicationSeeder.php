<?php

namespace Database\Seeders;

use App\Models\Application;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ApplicationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Application::insert([
            ['recruitment_id' => 1, 'user_id' => 1, 'status_id' => 2, 'submission_date' => '2023-05-01'],
            ['recruitment_id' => 1, 'user_id' => 2, 'status_id' => 2, 'submission_date' => '2023-05-02'],
            ['recruitment_id' => 1, 'user_id' => 3, 'status_id' => 2, 'submission_date' => '2023-05-03'],
            ['recruitment_id' => 2, 'user_id' => 4, 'status_id' => 2, 'submission_date' => '2023-05-04'],
            ['recruitment_id' => 2, 'user_id' => 5, 'status_id' => 2, 'submission_date' => '2023-05-05'],
            ['recruitment_id' => 2, 'user_id' => 6, 'status_id' => 2, 'submission_date' => '2023-05-06'],
            ['recruitment_id' => 3, 'user_id' => 7, 'status_id' => 2, 'submission_date' => '2023-05-07'],
            ['recruitment_id' => 3, 'user_id' => 8, 'status_id' => 2, 'submission_date' => '2023-05-08'],
            ['recruitment_id' => 3, 'user_id' => 9, 'status_id' => 2, 'submission_date' => '2023-05-09'],
            ['recruitment_id' => 4, 'user_id' => 10, 'status_id' => 2, 'submission_date' => '2023-05-10'],
            ['recruitment_id' => 4, 'user_id' => 11, 'status_id' => 2, 'submission_date' => '2023-05-11'],
            ['recruitment_id' => 4, 'user_id' => 12, 'status_id' => 2, 'submission_date' => '2023-05-12'],
            ['recruitment_id' => 5, 'user_id' => 13, 'status_id' => 2, 'submission_date' => '2023-05-13'],
            ['recruitment_id' => 5, 'user_id' => 14, 'status_id' => 2, 'submission_date' => '2023-05-14'],
            ['recruitment_id' => 5, 'user_id' => 15, 'status_id' => 2, 'submission_date' => '2023-05-15'],
            ['recruitment_id' => 6, 'user_id' => 16, 'status_id' => 2, 'submission_date' => '2023-05-16'],
            ['recruitment_id' => 6, 'user_id' => 17, 'status_id' => 2, 'submission_date' => '2023-05-17'],
            ['recruitment_id' => 6, 'user_id' => 18, 'status_id' => 2, 'submission_date' => '2023-05-18'],
            ['recruitment_id' => 7, 'user_id' => 19, 'status_id' => 2, 'submission_date' => '2023-05-19'],
            ['recruitment_id' => 7, 'user_id' => 20, 'status_id' => 2, 'submission_date' => '2023-05-20'],
            ['recruitment_id' => 7, 'user_id' => 21, 'status_id' => 2, 'submission_date' => '2023-05-21'],
            ['recruitment_id' => 8, 'user_id' => 22, 'status_id' => 2, 'submission_date' => '2023-05-22'],
            ['recruitment_id' => 8, 'user_id' => 23, 'status_id' => 2, 'submission_date' => '2023-05-23'],
            ['recruitment_id' => 8, 'user_id' => 24, 'status_id' => 2, 'submission_date' => '2023-05-24'],
            ['recruitment_id' => 9, 'user_id' => 25, 'status_id' => 2, 'submission_date' => '2023-05-25'],
            ['recruitment_id' => 9, 'user_id' => 26, 'status_id' => 2, 'submission_date' => '2023-05-26'],
            ['recruitment_id' => 9, 'user_id' => 27, 'status_id' => 2, 'submission_date' => '2023-05-27'],
            ['recruitment_id' => 10, 'user_id' => 1, 'status_id' => 2, 'submission_date' => '2023-05-28'],
            ['recruitment_id' => 10, 'user_id' => 2, 'status_id' => 2, 'submission_date' => '2023-05-29'],
            ['recruitment_id' => 10, 'user_id' => 3, 'status_id' => 2, 'submission_date' => '2023-05-30'],
            ['recruitment_id' => 11, 'user_id' => 4, 'status_id' => 2, 'submission_date' => '2023-05-31'],
            ['recruitment_id' => 11, 'user_id' => 5, 'status_id' => 2, 'submission_date' => '2023-05-01'],
            ['recruitment_id' => 11, 'user_id' => 6, 'status_id' => 2, 'submission_date' => '2023-05-02'],
            ['recruitment_id' => 12, 'user_id' => 7, 'status_id' => 2, 'submission_date' => '2023-05-03'],
            ['recruitment_id' => 12, 'user_id' => 8, 'status_id' => 2, 'submission_date' => '2023-05-04'],
            ['recruitment_id' => 12, 'user_id' => 9, 'status_id' => 2, 'submission_date' => '2023-05-05'],
            ['recruitment_id' => 13, 'user_id' => 10, 'status_id' => 2, 'submission_date' => '2023-05-06'],
            ['recruitment_id' => 13, 'user_id' => 11, 'status_id' => 2, 'submission_date' => '2023-05-07'],
            ['recruitment_id' => 13, 'user_id' => 12, 'status_id' => 2, 'submission_date' => '2023-05-08'],
            ['recruitment_id' => 14, 'user_id' => 13, 'status_id' => 2, 'submission_date' => '2023-05-09'],
            ['recruitment_id' => 14, 'user_id' => 14, 'status_id' => 2, 'submission_date' => '2023-05-10'],
            ['recruitment_id' => 14, 'user_id' => 15, 'status_id' => 2, 'submission_date' => '2023-05-11'],
            ['recruitment_id' => 15, 'user_id' => 16, 'status_id' => 2, 'submission_date' => '2023-05-12'],
            ['recruitment_id' => 15, 'user_id' => 17, 'status_id' => 2, 'submission_date' => '2023-05-13'],
            ['recruitment_id' => 15, 'user_id' => 18, 'status_id' => 2, 'submission_date' => '2023-05-14'],
            ['recruitment_id' => 16, 'user_id' => 19, 'status_id' => 2, 'submission_date' => '2023-05-15'],
            ['recruitment_id' => 16, 'user_id' => 20, 'status_id' => 2, 'submission_date' => '2023-05-16'],
            ['recruitment_id' => 16, 'user_id' => 21, 'status_id' => 2, 'submission_date' => '2023-05-17'],
            ['recruitment_id' => 17, 'user_id' => 22, 'status_id' => 2, 'submission_date' => '2023-05-18'],
            ['recruitment_id' => 17, 'user_id' => 23, 'status_id' => 2, 'submission_date' => '2023-05-19'],
            ['recruitment_id' => 17, 'user_id' => 24, 'status_id' => 2, 'submission_date' => '2023-05-20'],
            ['recruitment_id' => 18, 'user_id' => 25, 'status_id' => 2, 'submission_date' => '2023-05-21'],
            ['recruitment_id' => 18, 'user_id' => 26, 'status_id' => 2, 'submission_date' => '2023-05-22'],
            ['recruitment_id' => 18, 'user_id' => 27, 'status_id' => 2, 'submission_date' => '2023-05-23'],
            ['recruitment_id' => 19, 'user_id' => 1, 'status_id' => 2, 'submission_date' => '2023-05-24'],
            ['recruitment_id' => 19, 'user_id' => 2, 'status_id' => 2, 'submission_date' => '2023-05-25'],
            ['recruitment_id' => 19, 'user_id' => 3, 'status_id' => 2, 'submission_date' => '2023-05-26'],
            ['recruitment_id' => 20, 'user_id' => 4, 'status_id' => 2, 'submission_date' => '2023-05-27'],
            ['recruitment_id' => 20, 'user_id' => 5, 'status_id' => 2, 'submission_date' => '2023-05-28'],
            ['recruitment_id' => 20, 'user_id' => 6, 'status_id' => 2, 'submission_date' => '2023-05-29'],
        ]);
    }
}
