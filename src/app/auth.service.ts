import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedUser = false;

  login(email: string, password_token: string): boolean {
    // Replace with real authentication logic
    if (email && password_token) {
      this.isAuthenticatedUser = true;
      return true;
    }
    return false;
  }

  signup(email: string, password_token: string): void {
    // Replace with real signup logic
    console.log(`User signed up with email: ${email}`);
  }

  logout(): void {
    this.isAuthenticatedUser = false;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedUser;
  }
}
