<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Recruitment>
 */
class RecruitmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $departament = $this->faker->randomElement(['Kolegium Nauk Humanistycznych', 'Kolegium Nauk Medycznych', 'Kolegium Nauk Przyrodniczych', 'Kolegium Nauk Społecznych']);

        return [
            'name' => $this->faker->text(10),
            'departament' => $departament,
            'description' => $this->faker->text(),
            'places' => $this->faker->numberBetween(50,150),
            'amount' => $this->faker->numberBetween(100,200),
            'start_date' => $this->faker->date(),
            'end_date'=> $this->faker->date(),
        ];
    }
}
