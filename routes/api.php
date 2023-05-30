<?php

use App\Http\Controllers\Api\V1\ApplicationController;
use App\Http\Controllers\Api\V1\ResultController;
use App\Http\Controllers\Api\V1\RoleController;
use App\Http\Controllers\Api\V1\StatusController;
use App\Http\Controllers\Api\V1\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\RecruitmentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('user', [AuthController::class, 'user']);
    Route::get('logout', [AuthController::class, 'logout']);

    Route::post('applications/applyForRecruitment', [ApplicationController::class, 'applyForRecruitment']);
    Route::post('applications/processRecruitmentResults', [ApplicationController::class, 'processRecruitmentResults']);
    Route::post('applications/makePaymentForRecruitment', [ApplicationController::class, 'makePaymentForRecruitment']);
    Route::get('applications/showApplications', [ApplicationController::class, 'showApplications']);
    Route::post('applications/rejectApplication', [ApplicationController::class, 'rejectApplication']);

    Route::post('users/searchUsers', [UserController::class, 'searchUsers']);
    Route::post('users/getAcceptedStudents', [UserController::class, 'getAcceptedStudents']);

    Route::apiResource('results', ResultController::class);
    Route::apiResource('users', UserController::class);
    Route::apiResource('roles', RoleController::class);
    Route::apiResource('applications', ApplicationController::class);
    Route::apiResource('statuses', StatusController::class);
    Route::apiResource('recruitments', RecruitmentController::class);
});
