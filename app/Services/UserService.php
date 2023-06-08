<?php

namespace App\Services;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Application;
use App\Models\Status;
use App\Models\Recruitment;
use Illuminate\Support\Facades\DB;


class UserService
{
    public function searchUsers(Request $request)
    {
        $searchTerm = $request->input('search');

        $users = User::where('name', 'LIKE', '%' . $searchTerm . '%')
            ->orWhere('surname', 'LIKE', '%' . $searchTerm . '%')
            ->orWhere('pesel', 'LIKE', '%' . $searchTerm . '%')
            ->orWhere('email', 'LIKE', '%' . $searchTerm . '%')
            ->orWhere('phone', 'LIKE', '%' . $searchTerm . '%')
            ->get();

        return response()->json(['users' => $users]);
    }

    public function getAcceptedStudents(Request $request)
    {
        $recruitmentId = $request->input('recruitment_id');

        $acceptedStudents = Application::join('users', 'applications.user_id', '=', 'users.id')
            ->join('recruitments', 'applications.recruitment_id', '=', 'recruitments.id')
            ->where('applications.recruitment_id', $recruitmentId)
            ->where('applications.status_id', 3)
            ->select('users.id', 'users.name', 'users.surname', 'users.email', 'users.pesel', 'users.phone', 'users.address', 'recruitments.name as recruitment_name')
            ->get();

        return response()->json(['accepted_students' => $acceptedStudents]);
    }

    public function getAcceptedStudentsList()
    {
        $users = User::select('users.id', 'users.name', 'users.surname', 'users.email', 'users.phone', 'users.pesel', 'users.address')
                ->join('Applications', 'Users.id', '=', 'Applications.user_id')
                ->where('Applications.status_id', 3)
                ->distinct()
                ->get();

        return response()->json(['accepted_students' => $users]);
    }




}
