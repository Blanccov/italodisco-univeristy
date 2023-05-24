<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ApplicationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'recrutiment_id' => $this->recrutiment_id,
            'user_id' => $this->user_id,
            'status_id' => $this->status_id,
            'submission_date' => $this->submission_date
        ];
    }
}
