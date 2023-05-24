<?php

namespace App\Models;

use Abbasudo\Purity\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory;
    use Filterable;

    protected $fillable = [
        'recruitment_id',
        'user_id',
        'status_id',
        'submission_id',
    ];

    public $timestamps = false;
}
