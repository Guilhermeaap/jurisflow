<?php

use App\Http\Controllers\ClientesController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function(){
    if(Auth::check()){
        return redirect()->route('dashboard');
    }
    return redirect()->route('login');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'Dashboard')->name('dashboard');

    Route::prefix('clientes')->group(function () {
        Route::get('/', [ClientesController::class, 'index'])->name('clientes.index');

    });
});

require __DIR__.'/settings.php';
