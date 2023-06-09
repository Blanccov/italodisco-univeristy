<?php

use App\Http\Controllers\Api\V1\ApplicationController;
use App\Http\Controllers\Api\V1\ResultController;
use App\Http\Controllers\Api\V1\RoleController;
use App\Http\Controllers\Api\V1\StatusController;
use App\Http\Controllers\Api\V1\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\PdfController;
use App\Http\Controllers\Api\V1\RecruitmentController;
use App\Http\Controllers\Api\V1\ScoreController;
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
Route::get('recruitments/getDepartments', [RecruitmentController::class, 'getDepartments']);
Route::post('recruitments/getRecruitmentsByDepartment', [RecruitmentController::class, 'getRecruitmentsByDepartment']);



Route::middleware('auth:sanctum')->group(function () {

    Route::get('user', [AuthController::class, 'user']);
    Route::get('logout', [AuthController::class, 'logout']);

    Route::get('/generate-pdf', [PdfController::class, 'generatePdf']);

    Route::post('applications/applyForRecruitment', [ApplicationController::class, 'applyForRecruitment']);
    Route::get('applications/processRecruitmentResults', [ApplicationController::class, 'processRecruitmentResults']);
    Route::post('applications/makePaymentForRecruitment', [ApplicationController::class, 'makePaymentForRecruitment']);
    Route::get('applications/showApplications', [ApplicationController::class, 'showApplications']);

    Route::post('users/searchUsers', [UserController::class, 'searchUsers']);
    Route::post('users/getAcceptedStudents', [UserController::class, 'getAcceptedStudents']);
    Route::get('users/getAcceptedStudentsList', [UserController::class, 'getAcceptedStudentsList']);
    Route::patch('users/updateUserProfile', [UserController::class, 'updateUserProfile']);
    Route::post('users/downloadApplicationPdf', [UserController::class, 'downloadApplicationPdf']);
    Route::post('users/uploadPdf', [UserController::class, 'uploadPdf']);

    Route::post('scores/addScore', [ScoreController::class, 'addScore']);
    Route::post('scores/uniqueSubjects', [ScoreController::class, 'uniqueSubjects']);

    Route::post('recruitments/getRecruitmentsByDepartmentWithDate', [RecruitmentController::class, 'getRecruitmentsByDepartmentWithDate']);
    Route::get('recruitments/checkAndReopenRecruitment', [RecruitmentController::class, 'checkAndReopenRecruitment']);


    Route::apiResource('results', ResultController::class);
    Route::apiResource('users', UserController::class);
    Route::apiResource('roles', RoleController::class);
    Route::apiResource('applications', ApplicationController::class);
    Route::apiResource('statuses', StatusController::class);
    Route::apiResource('recruitments', RecruitmentController::class);
    Route::apiResource('scores', ScoreController::class);

});
