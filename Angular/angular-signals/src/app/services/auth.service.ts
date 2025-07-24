import {computed, inject, Injectable, signal} from "@angular/core";
import {User} from "../models/user.model";
import {Router} from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment.development';
import { firstValueFrom } from "rxjs";

const USER_STORAGE_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient);
  router  = inject(Router);

  #userSignal = signal<User | null>(null);

  user = this.#userSignal.asReadonly();

  isLoggedIn = computed(() => !!this.#userSignal());

  constructor() {
    this.loadUserFromStorage();
  }

  private loadUserFromStorage(): void {
    const userJson = localStorage.getItem(USER_STORAGE_KEY);
    if (userJson) {
      try {
        const user = JSON.parse(userJson) as User;
        this.#userSignal.set(user);
      } catch (error) {
        console.error('Failed to parse user from localStorage:', error);
        localStorage.removeItem(USER_STORAGE_KEY);
      }
    }
  }


  async login(email: string, password: string): Promise<User | null> {
    try {
      const login$ = this.http.post<User>(`${environment.apiRoot}/login`, {email, password});
      const user = await firstValueFrom(login$);
      this.#userSignal.set(user);
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
      return user;
    } catch (error) {
      console.error('Login failed:', error);
      this.#userSignal.set(null);
      localStorage.removeItem(USER_STORAGE_KEY);
      return null;
    }
  }


  async logout(): Promise<void> {
    this.#userSignal.set(null);
    localStorage.removeItem(USER_STORAGE_KEY);
    this.router.navigate(['/login']);
  }

}
