<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
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
            'email' => ['required', 'email', 'unique:users,email'].$this->user()->id,
            'password' => ['required', 'min:8'],
            'pesel' => ['required', 'size:11', 'unique:users,pesel'].$this->user()->id,
            'phone' => ['required', 'unique:users,phone'],
            'address' => ['required'],
            'roleId' => ['required', 'numeric']
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'role_id' => $this->roleId
        ]);
    }
}
