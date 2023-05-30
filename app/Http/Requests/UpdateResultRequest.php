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
                    'score' => ['required', 'integer'],
                    'balance' => ['required', 'numeric'],
                    'userId' => ['numeric', 'required'],
                    'recruitmentId' =>['numeric', 'required'],
                ];
            }else{
                return [
                    'subject' => ['sometimes','required'],
                    'score' => ['sometimes','required', 'integer'],
                    'balance' => ['sometimes', 'required', 'numeric'],
                    'userId' => ['sometimes','numeric', 'required'],
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
        if($this->recruitmentId){
            $this->merge([
                'recruitment_id' => $this->recruitmentId
            ]);
        }
    }
}
