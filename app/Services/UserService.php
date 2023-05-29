<?php

namespace App\Services;

use Illuminate\Http\Request;
use App\Models\User;


class UserService
{
    public function searchUsers(Request $request)
    {
        $searchTerm = $request->input('search');

        $users = User::where('name', 'LIKE', '%' . $searchTerm . '%')
            ->orWhere('surname', 'LIKE', '%' . $searchTerm . '%')
            ->orWhere('pesel', 'LIKE', '%' . $searchTerm . '%')
            ->orWhere('email', 'LIKE', '%' . $searchTerm . '%')
            ->orWhere('phone_number', 'LIKE', '%' . $searchTerm . '%')
            ->get();

        return response()->json(['users' => $users]);
    }

}
