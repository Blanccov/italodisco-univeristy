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
                'name' => ['required'],
                'departament' => ['required'],
                'description' => ['required'],
                'places' => ['required', 'numeric'],
                'amount' => ['required', 'integer'],
                'start_date' => ['required', 'date'],
                'end_date' => ['required', 'date']
            ];
        }else{
            return [
                'name' => ['sometimes', 'required'],
                'departament' => ['sometimes', 'required'],
                'description' => ['sometimes', 'required'],
                'places' => ['sometimes', 'required', 'numeric'],
                'amount' => ['sometimes', 'required', 'integer'],
                'start_date' => ['sometimes', 'required', 'date'],
                'end_date' => ['sometimes', 'required', 'date']
            ];
        }
    }

}
