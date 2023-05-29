<?php

namespace Database\Factories;

use App\Models\Recruitment;
use App\Models\Status;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Application>
 */
class ApplicationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'recruitment_id' => $this->faker->randomElement([1,2,3,4]),
            'user_id' => User::factory(),
            'status_id' => $this->faker->randomElement([2]),
            'submission_date' => $this->faker->date()
        ];
    }
}
