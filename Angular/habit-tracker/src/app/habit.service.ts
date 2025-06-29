import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Habit, HabitFrequency } from './habit';

@Injectable({
  providedIn: 'root'
})
export class HabitService {

  habits: Habit[] = [
    {
      id: 1,
      name: 'Financial Review',
      frequency: HabitFrequency.MONTHLY,
      description: 'Review and adjust personal budget and expenses',
    },
    {
      id: 2,
      name: 'Reading',
      frequency: HabitFrequency.DAILY,
      description: 'Read at least 20 pages of a book',
    },
    {
      id: 3,
    

      name: 'Learning a New Skill',
      frequency: HabitFrequency.WEEKLY,
      description: 'Spend time learning a new skill or hobby',
    },
    {
      id: 4,
      name: 'Hydration',
      frequency: HabitFrequency.DAILY,
      description: 'Drink at least 2 liters of water',
    },
    {
      id: 5,
      name: 'Sleep',
      frequency: HabitFrequency.DAILY,
      description: 'Get at least 7 hours of sleep',
    },
    {
      id: 6,
      name: 'Journaling',
      frequency: HabitFrequency.DAILY,
      description: 'Write down thoughts and reflections for the day',
    },
    {
      id: 7,
      name: 'Healthy Eating',
      frequency: HabitFrequency.DAILY,
      description: 'Eat at least 5 servings of fruits and vegetables',
    },
    {
      id: 8,
      name: 'Meditation',
      frequency: HabitFrequency.DAILY,
      description: '10 minutes of mindfulness meditation',
    },
    {
      id: 9,
      name: 'Networking',
      frequency: HabitFrequency.MONTHLY,
      description: 'Connect with at least one new person in your field',
    },
    {
      id: 10,
      name: 'Exercise',
      frequency: HabitFrequency.DAILY,
      description: '30 minutes of physical activity',
    }
  ];
  constructor() { }
  getHabits() : Observable<Habit[]>  {
    return of(this.habits)
  }

  addHabit(habitData: Habit) {
    const newHabit = {
      ...habitData,
      id: this.habits.length + 1,
    };
    this.habits.push(newHabit);
  }
}
