<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Cookie;
use App\Http\Controllers\Controller;
use App\Models\Role;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
{
    $basicRoles = [1, 2];  // 1 - guest, 2 - user

    $user = User::where('email', $request->input('email'))
                ->orWhere('pesel', $request->input('pesel'))
                ->first();

    if ($user) {
        return response([
            'error' => 'An account with the same email or PESEL already exists'
        ], Response::HTTP_BAD_REQUEST); // 400
    }

    $user = new User();

    $user->name = $request->input('name');
    $user->surname = $request->input('surname');
    $user->phone = $request->input('phone');
    $user->pesel = $request->input('pesel');
    $user->address = $request->input('address');
    $user->role_id = $request->input('role_id');
    $user->email = $request->input('email');
    $user->password = Hash::make($request->input('password'));

    if (strlen($user->pesel) !== 11) {
        return response([
            'error' => 'Invalid PESEL length (must be 11 characters)'
        ], Response::HTTP_BAD_REQUEST); // 400
    }

    if (strlen($request->input('password')) <= 8) {
        return response([
            'error' => 'Password must be longer than 8 characters'
        ], Response::HTTP_BAD_REQUEST); // 400
    }

    $user->save();

    $user->roles($basicRoles);

    return $user;
}



    public function login(LoginRequest $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response([
                'error' => 'Invalid Credentials'
            ], Response::HTTP_UNAUTHORIZED);  // 401
        }

        $user = Auth::user();
        $userRole = $user->role_id;

        if ($userRole === 3) {
            $token = $user->createToken('jwt', [
                'create', 'read', 'update', 'delete'
            ]);
        } elseif ($userRole === 2) {
            $token = $user->createToken('jwt', [
                'create', 'read', 'update', 'delete'
            ]);
        } else {
            return response([
                'message' => 'Invalid role!'
            ]);
        }

        $token = $token->plainTextToken;

        $cookie = cookie('token-cookie', $token, 60 * 24); // valid for 1 day

        return response([
            'message' => 'Successfully logged in!',
            'token' => $token,
            'user' => $user
        ])
        ->withCookie($cookie);
    }


    public function logout()
    {
        $cookie = Cookie::forget('token-cookie');

        return response([
            'message' => 'Successfully logout!'
        ])->withCookie($cookie);

        // $user = $request->user();
        //     $user->currentAccessToken()->delete();
        //     return response('', 204);
    }

    public function user()
    {
        $user = Auth::user();
        return $user; // authenticated user
        // return Auth::user();
    }
}
