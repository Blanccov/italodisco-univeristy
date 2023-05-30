<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRecruitmentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required'],
            'departament' => ['required'],
            'description' => ['required'],
            'places' => ['required', 'numeric'],
            'amount' => ['required', 'integer'],
            'startDate' => ['required', 'date'],
            'endDate' => ['required', 'date']
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'start_date'=>$this->startDate,
            'end_date'=>$this->endDate,
        ]);
    }
}
