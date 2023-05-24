<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRecruitmentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        $method = $this->method();

        if($method == 'PUT'){
            return [
                'name' => ['required'],
                'departament' => ['required'],
                'description' => ['required'],
                'places' => ['required', 'numeric'],
                'startDate' => ['required', 'date'],
                'endDate' => ['required', 'date']
            ];
        }else{
            return [
                'name' => ['sometimes', 'required'],
                'departament' => ['sometimes', 'required'],
                'description' => ['sometimes', 'required'],
                'places' => ['sometimes', 'required', 'numeric'],
                'startDate' => ['sometimes', 'required', 'date'],
                'endDate' => ['sometimes', 'required', 'date']
            ];
        }
    }
    protected function prepareForValidation()
    {
        if($this->startDate){
            $this->merge([
                'start_date' => $this->startDate
            ]);
        }

        if($this->endDate){
            $this->merge([
                'end_date' => $this->endDate
            ]);
        }
}}
