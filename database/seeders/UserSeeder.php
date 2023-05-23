<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        User::factory()
            ->count(25)
            ->create();

        // User::insert(
        //     [
        //         [
        //             'name' => 'Jan', 'email' => 'jan@email.com', 'password' => Hash::make('1234'),
        //             'student_id' => 1, 'role_id' => 1,
        //         ],


        //     ]
        // );
    }
}
