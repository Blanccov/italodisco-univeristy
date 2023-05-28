<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Models\User;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::view('{path?}', 'welcome');

Route::get('/setup', function(){
    $credientials = [
        'email' => 'admin@admin.com',
        'password' => 'password'
    ];

    if(!Auth::attempt($credientials)){
        $user = new \App\Models\User();

        $user->name = 'Admin';
        $user->email = $credientials['email'];
        $user->password = $credientials['password'];
        $user->pesel = '';
        $user->address = '';
        $user->surname = '';
        $user->phone = '';
        $user->role_id = 2;

        $user->save();

        if(Auth::attempt($credientials)) {

            $user = Auth::user();

            $adminToken = $user->createToken('admin-token', ['create', 'update', 'delete']);
            $updateToken = $user->createToken('update-token', ['create', 'update']);
            $bacisToken = $user->createToken('basic-token');

            return[
                'admin' => $adminToken->plainTextToken,
                'update' => $adminToken->plainTextToken,
                'basic' => $adminToken->plainTextToken,
            ];
        }
    }
});



