<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
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
            'name' => ['required', 'max:50'],
            'surname' => ['required', 'max:50'],
            'email' => ['required', 'email'],
            'password' => ['required', 'min:8'],
            'pesel' => ['required', 'size:11'],
            'phone' => ['required'],
            'address' => ['required'],
            'roleId' => ['required', 'numeric']
        ];
    }
}
