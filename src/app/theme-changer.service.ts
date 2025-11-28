import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeChangerService {
  private darkModeSubject = new BehaviorSubject<boolean>(false); // false = light mode
  darkMode$ = this.darkModeSubject.asObservable();

  constructor() { }

  // Toggle dark/light mode
  toggleTheme(): void {
    this.darkModeSubject.next(!this.darkModeSubject.value);
  }

  // Get current value (optional)
  isDarkMode(): boolean {
    return this.darkModeSubject.value;
  }

  // Set mode manually
  setDarkMode(value: boolean): void {
    this.darkModeSubject.next(value);
  }
}
