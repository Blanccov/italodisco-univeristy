<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateResultRequest extends FormRequest
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
                    'subject' => ['required', 'max:255'],
                    'balance' => ['required', 'numeric', 'max:10'],
                    'recruitment_id' =>['numeric', 'required'],
                ];
            }else{
                return [
                    'subject' => ['sometimes','required', 'max:255'],
                    'balance' => ['sometimes', 'required', 'numeric', 'max:10'],
                    'recruitment_id' =>['sometimes','numeric', 'required'],

                ];
            }
    }
}
