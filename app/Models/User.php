<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Abbasudo\Purity\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    use Filterable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'surname',
        'email',
        'password',
        'pesel',
        'phone',
        'address',
        'role_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        // 'password',
        // 'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        // 'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function recruitments(){
        return $this->belongsToMany(Recruitment::class, 'applications', 'statuses', 'recruitments', 'users');
    }
    public function statuses(){
        return $this->belongsToMany(Status::class, 'applications', 'statuses', 'recruitments', 'users');
    }

    public function scores(){
        return $this->hasMany(Score::class, 'scores');
    }

    public function roles(){
        return $this->belongsTo(Role::class);
    }


    public $timestamps = false;
}
