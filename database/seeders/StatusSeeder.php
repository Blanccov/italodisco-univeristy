<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Status::insert(
            [
                [
                    'status' => "In progress...",
                ],
                [
                    'status' => "waiting",
                ],
                [
                    'status' => "accepted",
                ],
                [
                    'status' => "unaccepted",
                ],
                [
                    'status' => "rejected",
                ],
            ]
        );
    }
}
