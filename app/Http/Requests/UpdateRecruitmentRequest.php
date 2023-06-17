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
                'name' => ['required', 'max:50'],
                'departament' => ['required', 'max:50'],
                'description' => ['required', 'max:255'],
                'places' => ['required', 'numeric'],
                'amount' => ['required', 'numeric'],
                'start_date' => ['required', 'date'],
                'end_date' => ['required', 'date'],
                'is_active' => ['required', 'boolean']
            ];
        }else{
            return [
                'name' => ['sometimes', 'required', 'max:50'],
                'departament' => ['sometimes', 'required', 'max:50'],
                'description' => ['sometimes', 'required', 'max:255'],
                'places' => ['sometimes', 'required', 'numeric'],
                'amount' => ['sometimes', 'required', 'integer'],
                'start_date' => ['sometimes', 'required', 'date'],
                'end_date' => ['sometimes', 'required', 'date'],
                'is_active' => ['sometimes', 'required', 'boolean']
            ];
        }
    }

}
