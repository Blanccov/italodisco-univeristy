<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\User;
use Symfony\Component\HttpFoundation\Response;
use App\Services\UserService;

class UserController extends Controller
{
    public function index()
    {
        return new UserCollection(User::filter()->all());
    }

    public function store(StoreUserRequest $request)
    {
        return new UserResource(User::create($request->all()));
    }

    public function show(User $user)
    {
        return new UserResource($user);
    }

    public function update(UpdateUserRequest $request, User $user)
    {
        $user->update($request->all());
    }

    public function destroy(User $user)
    {
        $user->delete();

        return response('', Response::HTTP_NO_CONTENT);
    }
    public function searchUsers(Request $request){
        return (new UserService())->searchUsers($request);
    }
    public function getAcceptedStudents(Request $request){
        return (new UserService())->getAcceptedStudents($request);
    }
    public function getAcceptedStudentsList(){
        return (new UserService())->getAcceptedStudentsList();
    }
    public function updateUserProfile(Request $request){
        return (new UserService())->updateUserProfile($request);
    }

}
