<?php

namespace App\Models;

use Abbasudo\Purity\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    use HasFactory;
    use Filterable;

    protected $fillable = [
        'status',
    ];

    public function users(){
        return $this->belongsToMany(User::class, 'applications', 'statuses', 'recruitments', 'users');
    }

    public $timestamps = false;
}
