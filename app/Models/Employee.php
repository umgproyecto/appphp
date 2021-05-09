<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    //
    public function person(){
        return $this->belongsTo('App\Models\Person');
    }
}
