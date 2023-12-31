<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CurrentUserController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

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

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::get('/user', [CurrentUserController::class, 'index'])->middleware('auth:sanctum');

Route::post('/register', [UserController::class, 'store']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/pages', [PageController::class, 'index']);
Route::put('/pages/{id}', [PageController::class, 'update']);

Route::get('/images', [ImageController::class, 'index']);
