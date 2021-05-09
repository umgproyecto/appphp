<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    protected $guarded = [];
    public function user()
    {
        return $this->belongsTo('App\User', 'users_id')->withTrashed();
    }

    public function status()
    {
        return $this->belongsTo('App\Status', 'status_id');
    }
}
