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
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'recruitment_id' => $this->recruitment_id,
            'user_id' => $this->user_id,
            'status_id' => $this->status_id,
            'submission_date' => $this->submission_date,
            'pdf' => $this->pdf, // Include the PDF field in the resource output
        ];
    }
}
