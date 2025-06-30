// This file contains the main data model for habits in the app.
//
// - The Habit interface describes the structure of a habit object, including its id, name, frequency, and description.
// - The HabitFrequency enum lists all possible frequency options a habit can have (Daily, Weekly, Monthly, Yearly).
// These types are used throughout the app to ensure consistency and type safety.

export interface Habit {
    id: number;
    name: string;
    frequency: HabitFrequency;
    description: string;
}

export enum HabitFrequency {
    DAILY = 'Daily',
    WEEKLY = 'Weekly',
    MONTHLY = 'Monthly',
    YEARLY = 'Yearly'
  }
