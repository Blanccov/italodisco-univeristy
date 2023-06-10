<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateScoreRequest extends FormRequest
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
                    'result_id' => ['required', 'numeric'],
                    'user_id' => ['required', 'numeric'],
                    'score' =>['numeric', 'required', 'max:3'],
                ];
            }else{
                return [
                    'result_id' => ['sometimes','required', 'numeric'],
                     'user_id' => ['sometimes','required', 'numeric'],
                     'score' =>['numeric', 'required', 'max:3'],

                ];
            }
    }
}
