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
        'recruitment_id',
        'balance'
    ];

    public function scores(){
        return $this->belongsToMany(User::class, 'scores');
    }

    public function recruitments()
    {
        return $this->belongsTo(Recruitment::class, 'result_id');
    }

    public $timestamps = false;
}
