<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Result>
 */
class ResultFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $subject = $this->faker->randomElement(['matematyka', 'angielski', 'polski', 'niemiecki', 'informatyka']);

        return [
            'subject' => $subject,
            'score' => $this->faker->numberBetween(0,100),
            'balance' => $this->faker->randomElement([0.25, 0.5, 0.75, 1]),
            'user_id' => $this->faker->numberBetween(1,25)
        ];
    }
}
