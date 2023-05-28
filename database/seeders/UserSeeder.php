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

        User::insert(
            [
                [
                    'name' => 'admin', 'surname'=>'admin', 'email' => 'admin@admin.com', 'password' => Hash::make('admin'),
                    'pesel' => "000000000", 'phone' => '997997997', 'address' => 'fakeaddress', 'role_id' => 3
                ],
                [
                    'name' => 'user', 'surname'=>'user', 'email' => 'user@user.com', 'password' => Hash::make('user'),
                    'pesel' => "000000001", 'phone' => '997997998', 'address' => 'fakeaddress', 'role_id' => 2
                ],


            ]
        );
    }
}
