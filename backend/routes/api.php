<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ProductController; 

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
 
Route::prefix('/products')->group(function () {
    Route::get('/',[ ProductController::class, 'get']);
    Route::post('/',[ ProductController::class, 'post']);
    Route::delete('/{id}',[ ProductController::class, 'delete']);
    Route::get('/{id}',[ ProductController::class, 'getById']);
    Route::put('/{id}',[ ProductController::class, 'update']);
});
