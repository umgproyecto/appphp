<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $guarded = [];
    public function person(){
        return $this->belongsTo('App\Models\Person');
    }

}
