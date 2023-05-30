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
                    'subject' => ['required'],
                    'balance' => ['required', 'numeric'],
                    'recruitmentId' =>['numeric', 'required'],
                ];
            }else{
                return [
                    'subject' => ['sometimes','required'],
                    'balance' => ['sometimes', 'required', 'numeric'],
                    'recruitmentId' =>['sometimes','numeric', 'required'],

                ];
            }
    }

    protected function prepareForValidation()
    {
        if($this->userId){
            $this->merge([
                'user_id' => $this->userId
            ]);
        }
    }
}
