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
