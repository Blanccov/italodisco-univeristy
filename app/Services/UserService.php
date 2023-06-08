<?php

namespace App\Services;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

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


    public function updateUserProfile(Request $request)
{
    $user = Auth::user();

    $request->validate([
        'name' => 'required|string|max:255',
        'surname' => 'required|string|max:255',
        'email' => 'required|email|unique:users,email,'.$user->id,
        'new_password' => 'nullable|string|min:8',
        'current_password' => 'required_with:new_password|string',
        'confirm_password' => 'required_with:new_password|same:new_password',
    ], [
        'new_password.min' => 'The new password must be at least 8 characters long.',
        'confirm_password.same' => 'The confirmation of the new password does not match.',
    ]);

    if (!Hash::check($request->input('current_password'), $user->password)) {
        return response()->json(['errors' => 'The current password is incorrect.'], 422);
    }

    $user->name = $request->input('name');
    $user->surname = $request->input('surname');
    $user->email = $request->input('email');

    if ($request->has('new_password')) {
        $newPassword = $request->input('new_password');

        if (strlen($newPassword) < 8) {
            return response()->json(['errors' => 'The new password must be at least 8 characters long.'], 422);
        }

        $user->password = Hash::make($newPassword);
    }

    $user->save();

    return response()->json(['message' => 'The user profile has been updated.']);
}







}
