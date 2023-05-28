<?php

namespace App\Models;

use Abbasudo\Purity\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;
    use Filterable;

    protected $fillable = [
        'name',
    ];


    public function users(){
        return $this->hasMany(User::class);
    }

    public $timestamps = false;
}
