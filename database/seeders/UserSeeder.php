<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

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
                [
                    'name' => 'John', 'surname' => 'Doe', 'email' => 'johndoe@example.com', 'password' => Hash::make('password'),
                    'pesel' => "12345678909", 'phone' => '123456788', 'address' => 'Main Street 123, 12345 City', 'role_id' => 2
                ],
                [
                    'name' => 'Jane', 'surname' => 'Smith', 'email' => 'janesmith@example.com', 'password' => Hash::make('password'),
                    'pesel' => "23456789011", 'phone' => '234567890', 'address' => 'Oak Avenue 456, 67890 Town', 'role_id' => 2
                ],
                [
                    'name' => 'Robert', 'surname' => 'Johnson', 'email' => 'robertjohnson@example.com', 'password' => Hash::make('password'),
                    'pesel' => "34567890122", 'phone' => '345678901', 'address' => 'Maple Road 789, 45678 Village', 'role_id' => 2
                ],
                [
                    'name' => 'Emily', 'surname' => 'Wilson', 'email' => 'emilywilson@example.com', 'password' => Hash::make('password'),
                    'pesel' => "45678901234", 'phone' => '456789011', 'address' => 'Cedar Lane 321, 78901 Hamlet', 'role_id' => 2
                ],
                [
                    'name' => 'Michael', 'surname' => 'Brown', 'email' => 'michaelbrown@example.com', 'password' => Hash::make('password'),
                    'pesel' => "56789012341", 'phone' => '567890113', 'address' => 'Elm Street 567, 23456 Village', 'role_id' => 2
                ],
                [
                    'name' => 'Sarah', 'surname' => 'Johnson', 'email' => 'sarahjohnson@example.com', 'password' => Hash::make('password'),
                    'pesel' => "67890123451", 'phone' => '678901234', 'address' => 'Willow Avenue 789, 34567 Town', 'role_id' => 2
                ],
                [
                    'name' => 'David', 'surname' => 'Lee', 'email' => 'davidlee@example.com', 'password' => Hash::make('password'),
                    'pesel' => "78901234567", 'phone' => '789012345', 'address' => 'Pine Street 890, 45678 City', 'role_id' => 2
                ],
                [
                    'name' => 'Olivia', 'surname' => 'Miller', 'email' => 'oliviamiller@example.com', 'password' => Hash::make('password'),
                    'pesel' => "89012345678", 'phone' => '890123456', 'address' => 'Birch Lane 901, 56789 Village', 'role_id' => 2
                ],
                [
                    'name' => 'Daniel', 'surname' => 'Wilson', 'email' => 'danielwilson@example.com', 'password' => Hash::make('password'),
                    'pesel' => "90123456789", 'phone' => '901234567', 'address' => 'Chestnut Road 012, 67890 Hamlet', 'role_id' => 2
                ],
                [
                    'name' => 'Sophia', 'surname' => 'Taylor', 'email' => 'sophiataylor@example.com', 'password' => Hash::make('password'),
                    'pesel' => "01234567890", 'phone' => '012345671', 'address' => 'Hickory Avenue 123, 78901 Town', 'role_id' => 2
                ],
                [
                    'name' => 'Christopher', 'surname' => 'Thomas', 'email' => 'christopherthomas@example.com', 'password' => Hash::make('password'),
                    'pesel' => "12345678901", 'phone' => '123456782', 'address' => 'Cypress Lane 234, 89012 City', 'role_id' => 2
                ],
                [
                    'name' => 'Ava', 'surname' => 'Anderson', 'email' => 'avaanderson@example.com', 'password' => Hash::make('password'),
                    'pesel' => "23456789012", 'phone' => '2345678916', 'address' => 'Sycamore Street 345, 12345 Town', 'role_id' => 2
                ],
                [
                    'name' => 'Matthew', 'surname' => 'Clark', 'email' => 'matthewclark@example.com', 'password' => Hash::make('password'),
                    'pesel' => "34567890123", 'phone' => '345678904', 'address' => 'Poplar Avenue 456, 23456 Village', 'role_id' => 2
                ],
                [
                    'name' => 'Isabella', 'surname' => 'Harris', 'email' => 'isabellaharris@example.com', 'password' => Hash::make('password'),
                    'pesel' => "45678901232", 'phone' => '456789012', 'address' => 'Redwood Road 567, 34567 Hamlet', 'role_id' => 2
                ],
                [
                    'name' => 'James', 'surname' => 'Walker', 'email' => 'jameswalker@example.com', 'password' => Hash::make('password'),
                    'pesel' => "56789012344", 'phone' => '567890126', 'address' => 'Spruce Lane 678, 45678 City', 'role_id' => 2
                ],
                [
                    'name' => 'Mia', 'surname' => 'Gonzalez', 'email' => 'miagonzalez@example.com', 'password' => Hash::make('password'),
                    'pesel' => "67890123456", 'phone' => '678901230', 'address' => 'Juniper Street 789, 56789 Town', 'role_id' => 2
                ],
                [
                    'name' => 'Benjamin', 'surname' => 'Perez', 'email' => 'benjaminperez@example.com', 'password' => Hash::make('password'),
                    'pesel' => "78901234557", 'phone' => '789012340', 'address' => 'Palm Avenue 890, 67890 Village', 'role_id' => 2
                ],
                [
                    'name' => 'Emma', 'surname' => 'Robinson', 'email' => 'emmarobinson@example.com', 'password' => Hash::make('password'),
                    'pesel' => "89012345671", 'phone' => '890123450', 'address' => 'Fir Lane 901, 78901 Hamlet', 'role_id' => 2
                ],
                [
                    'name' => 'Alexander', 'surname' => 'Hall', 'email' => 'alexanderhall@example.com', 'password' => Hash::make('password'),
                    'pesel' => "90123456782", 'phone' => '901234560', 'address' => 'Beech Road 012, 89012 City', 'role_id' => 2
                ],
                [
                    'name' => 'Charlotte', 'surname' => 'Young', 'email' => 'charlotteyoung@example.com', 'password' => Hash::make('password'),
                    'pesel' => "01234567897", 'phone' => '012345678', 'address' => 'Pine Lane 123, 90123 Town', 'role_id' => 2
                ],
                [
                    'name' => 'Liam',
                    'surname' => 'Wilson',
                    'email' => 'liamwilson@example.com',
                    'password' => Hash::make('password'),
                    'pesel' => '12345678912',
                    'phone' => '123456780',
                    'address' => 'Chestnut Avenue 234, 56789 Hamlet',
                    'role_id' => 2
                ],
                [
                    'name' => 'Victoria',
                    'surname' => 'Thompson',
                    'email' => 'victoriathompson@example.com',
                    'password' => Hash::make('password'),
                    'pesel' => '23456789023',
                    'phone' => '234567895',
                    'address' => 'Willow Road 345, 67890 City',
                    'role_id' => 2
                ],
                [
                    'name' => 'Henry',
                    'surname' => 'Garcia',
                    'email' => 'henrygarcia@example.com',
                    'password' => Hash::make('password'),
                    'pesel' => '34567890132',
                    'phone' => '345678900',
                    'address' => 'Birch Lane 456, 78901 Town',
                    'role_id' => 2
                ],
                [
                    'name' => 'Sofia',
                    'surname' => 'Martinez',
                    'email' => 'sofiamartinez@example.com',
                    'password' => Hash::make('password'),
                    'pesel' => '45678901243',
                    'phone' => '456789010',
                    'address' => 'Elm Avenue 567, 89012 Village',
                    'role_id' => 2
                ],
                [
                    'name' => 'Lucas',
                    'surname' => 'Robinson',
                    'email' => 'lucasrobinson@example.com',
                    'password' => Hash::make('password'),
                    'pesel' => '56789012354',
                    'phone' => '567890120',
                    'address' => 'Maple Road 678, 90123 Hamlet',
                    'role_id' => 2
                ]
            ]
        );
        //pętla do dodatkwocyh userów

        for ($i = 0; $i < 30; $i++) {
            $name = Str::random(5);
            $surname = Str::random(5);
            $email = Str::lower($name) . '@example.com';
            $pesel = str_pad($i, 11, '0', STR_PAD_LEFT);

            User::insert([
                'name' => $name,
                'surname' => $surname,
                'email' => $email,
                'password' => Hash::make('password'),
                'pesel' => $pesel,
                'phone' => '123456789',
                'address' => 'Fake Address',
                'role_id' => 2
            ]);
        }

    }
}
