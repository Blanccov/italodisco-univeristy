<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateApplicationRequest extends FormRequest
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
        $method = $this->method();

        if($method == 'PUT'){
            return [
                'recruitment_id' => ['required', 'numeric'],
                'user_id' => ['required', 'numeric'],
                'status_id' => ['required', 'numeric'],
                'submission_date' => ['required', 'date'],
                'pdf' => ['file', 'mimes:pdf'],

            ];
        }else{
            return [
                'recruitment_id' => ['sometimes','required', 'numeric'],
                'user_id' => ['sometimes','required', 'numeric'],
                'status_id' => ['sometimes','required', 'numeric'],
                'submission_date' => ['sometimes','required', 'date'],
                'pdf' => ['sometimes', 'file', 'mimes:pdf']

            ];
        }
    }
    protected function prepareForValidation()
    {
        if($this->recruitmentId){
            $this->merge([
                'recrutiment_id' => $this->recrutimentId
            ]);
        }
        if($this->userId){
            $this->merge([
                'user_id' => $this->userId
            ]);
        }
        if($this->statusId){
            $this->merge([
                'status_id' => $this->statusId
            ]);
        }
        if($this->submissionDate){
            $this->merge([
                'submission_date' => $this->submissionDate
            ]);
        }
    }
}
