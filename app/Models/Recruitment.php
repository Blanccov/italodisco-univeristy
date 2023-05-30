<?php

namespace App\Models;

use Abbasudo\Purity\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recruitment extends Model
{
    use HasFactory;
    use Filterable;

    protected $fillable = [
        'name',
        'departament',
        'description',
        'places',
        'start_date',
        'end_date'
    ];

    // public function users(){
    //     return $this->belongsToMany(User::class, 'applications', 'statuses', 'recruitments', 'users');
    // }
    public function statuses(){
        return $this->belongsToMany(Status::class, 'applications', 'statuses', 'recruitments', 'users');
    }

    public function roles(){
        return $this->belongsTo(Role::class);
    }

    public $timestamps = false;
}
