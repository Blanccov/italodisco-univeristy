<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    use HasFactory;

    public function users(){
        return $this->belongsToMany(User::class, 'applications', 'status', 'recruitments', 'users');
    }

    public $timestamps = false;
}
