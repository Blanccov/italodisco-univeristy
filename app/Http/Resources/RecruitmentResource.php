<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RecruitmentResource extends JsonResource
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
            'name' => $this->name,
            'departament' => $this->departament,
            'description' => $this->description,
            'places' => $this->places,
            'amount' => $this->amount,
            'ispaid' => $this->ispaid,
            'start_date' => $this->start_date,
            'end_date' => $this->end_date
        ];
    }
}
