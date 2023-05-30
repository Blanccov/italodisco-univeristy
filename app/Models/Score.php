<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Abbasudo\Purity\Traits\Filterable;

class Score extends Model
{
    use HasFactory;
    use Filterable;

    protected $fillable = [
        'result_id',
        'user_id',
        'score',
    ];

    public $timestamps = false;
}
