<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreApplicationRequest extends FormRequest
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
            'recrutimentId' => ['required', 'numeric'],
            'userId' => ['required', 'numeric'],
            'statusId' => ['required', 'numeric'],
            'submissionDate' => ['required', 'date']

        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'recruitment_id' => $this->recrutimentId,
            'user_id' => $this->userId,
            'status_id' => $this->statusId,
            'submission_date' => $this->submissionDate
        ]);
    }
}
