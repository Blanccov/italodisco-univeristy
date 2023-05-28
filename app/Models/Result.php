<?php

namespace App\Models;

use Abbasudo\Purity\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    use HasFactory;
    use Filterable;

    protected $fillable = [
        'subject',
        'score',
        'user_id'
    ];

    public function users(){
        return $this->belongsTo(User::class);
    }

    public $timestamps = false;
}
