<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
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
                'surname' => ['required', 'max:50'],
                'email' => ['required', 'email'],
                'password' => ['required', 'min:8'],
                'pesel' => ['required', 'size:11'],
                'phone' => ['required'],
                'address' => ['required'],
                'roleId' => ['required', 'numeric']
            ];
        }else{
            return [
                'name' => ['sometimes', 'required', 'max:50'],
                'surname' => ['sometimes', 'required', 'max:50'],
                'email' => ['sometimes', 'required', 'email'],
                'password' => ['sometimes', 'required', 'min:8'],
                'pesel' => ['sometimes', 'required', 'size:11'],
                'phone' => ['sometimes', 'required'],
                'address' => ['sometimes', 'required'],
                'roleId' => ['sometimes', 'required', 'numeric']
            ];
        }
    }

    protected function prepareForValidation()
    {
        if($this->roleId){
            $this->merge([
                'role_id' => $this->roleId
            ]);
        }
    }
}
