<?php

namespace Database\Seeders;

use App\Models\Application;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class ApplicationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

$recruitmentId = 1;
$userId = 1;
$statusId = 2;
$startDate = Carbon::now()->startOfMonth();

for ($i = 0; $i < 60; $i++) { //tu zmienić ilość aplikacji
    $submissionDate = $startDate->addDay($i)->toDateString();


    Application::create([
        'recruitment_id' => $recruitmentId,
        'user_id' => $userId,
        'status_id' => $statusId,
        'submission_date' => $submissionDate,
    ]);


    $recruitmentId++;
    $userId++;


    if ($recruitmentId > 20) {
        $recruitmentId = 1;
    }
    if ($userId > 27) { //tu ma być ilość userów
        $userId = 1;
    }
}
    }
}
