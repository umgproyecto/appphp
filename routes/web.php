<?php

Route::get('/{any}', function () {
    return view('home.homepage');
})->where('any', '.*');

