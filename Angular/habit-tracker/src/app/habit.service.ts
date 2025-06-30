// HabitService is responsible for all habit-related data operations in the app.
//
// - This service manages the list of habits, including loading from and saving to localStorage.
// - It exposes methods to add, update, delete, and fetch habits.
// - The service uses RxJS BehaviorSubject to keep the habit list reactive, so components automatically update when the data changes.
// - Marked with @Injectable({ providedIn: 'root' }) so it is a singleton and available app-wide.
//
// Key Angular Concepts:
// - @Injectable: Marks this class as available for dependency injection
// - Service: Used for business logic and data management
// - Observable: Used to provide data asynchronously
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Habit } from './habit';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  private storageKey = 'habits';
  private habitsSubject = new BehaviorSubject<Habit[]>([]);

  constructor() {
    this.loadHabits();
  }

  // Load habits from localStorage or use defaults
  private loadHabits() {
    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      this.habitsSubject.next(JSON.parse(stored));
    } else {
      this.habitsSubject.next([]);
    }
  }

  // Save habits to localStorage
  private saveHabits() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.habitsSubject.value));
  }

  // Returns the list of habits as an Observable
  getHabits(): Observable<Habit[]> {
    return this.habitsSubject.asObservable();
  }

  // Adds a new habit to the list
  addHabit(habitData: Habit) {
    const habits = [...this.habitsSubject.value];
    const newHabit = {
      ...habitData,
      id: habits.length > 0 ? Math.max(...habits.map(h => h.id)) + 1 : 1,
    };
    habits.push(newHabit);
    this.habitsSubject.next(habits);
    this.saveHabits();
  }

  // Updates an existing habit
  updateHabit(updatedHabit: Habit) {
    const habits = this.habitsSubject.value.map(h => h.id === updatedHabit.id ? { ...updatedHabit } : h);
    this.habitsSubject.next(habits);
    this.saveHabits();
  }

  // Deletes a habit by id
  deleteHabit(id: number) {
    const habits = this.habitsSubject.value.filter(h => h.id !== id);
    this.habitsSubject.next(habits);
    this.saveHabits();
  }

  // Returns a habit by id (synchronously)
  getHabitById(id: number): Habit | undefined {
    return this.habitsSubject.value.find(h => h.id === id);
  }
}
