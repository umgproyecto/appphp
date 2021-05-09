<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    //
    protected $guarded = [];

    public function clients(){
        return $this->hasMany('App\Models\Client');
    }

    public function employees(){
        return $this->hasMany('App\Models\employee');
    }

    public function providers(){
        return $this->hasMany('App\Models\Provider');
    }
}
