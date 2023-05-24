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
                'recrutimentId' => ['required', 'numeric'],
                'userId' => ['required', 'numeric'],
                'statusId' => ['required', 'numeric'],
                'submissionDate' => ['required', 'date']

            ];
        }else{
            return [
                'recrutimentId' => ['sometimes', 'required', 'numeric'],
                'userId' => ['sometimes', 'required', 'numeric'],
                'statusId' => ['sometimes', 'required', 'numeric'],
                'submissionDate' => ['sometimes', 'required', 'date']

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
