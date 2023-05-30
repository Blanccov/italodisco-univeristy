<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Score>
 */
class ScoreFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'result_id' => $this->faker->randomElement([1,2,3,4]),
            'user_id' => $this->faker->numberBetween(1,20),
            'score' => $this->faker->numberBetween(0,100)
        ];
    }
}
