<?php

use App\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Route as RoutingRoute;
use Illuminate\Routing\RouteGroup;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ProdutoController;
use App\Http\Controllers\API\PedidoController;
use App\Http\Controllers\API\ItensPedidoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return Auth::user();
});

Route::get('users', function(){
    return User::all();
});

Route::group(['namespace'=>'Api\Auth'], function(){
    Route::post('/login', 'AuthenticationController@login');
    Route::post('/logout', 'AuthenticationController@logout')->middleware('auth:api');
    Route::post('/register', 'RegisterController@register');
    Route::post('/forgot', 'ForgotPasswordController@forgot');
    Route::post('/reset', 'ForgotPasswordController@reset');
});

Route::prefix('produto')->group(function () {
    Route::get('/',[ ProdutoController::class, 'getAll']);
    Route::post('/',[ ProdutoController::class, 'create']);
    Route::delete('/{id}',[ ProdutoController::class, 'delete']);
    Route::get('/{id}',[ ProdutoController::class, 'get']);
    Route::get('/{nome}',[ ProdutoController::class, 'findByName']);
    Route::put('/{id}',[ ProdutoController::class, 'update']);
    Route::get('/search/{request}', [ProdutoController::class, 'search']);
});

Route::prefix('pedidos')->group(function () {
    Route::get('/',[ PedidoController::class, 'getAll']);
    Route::post('/',[ PedidoController::class, 'create']);
});