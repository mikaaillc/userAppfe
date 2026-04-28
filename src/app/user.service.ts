import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { finalize, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private snackBar = inject(MatSnackBar);
  private usersState = signal<User[]>([]);
  private loadingState = signal<boolean>(false);
  private apiUrl = '/api/users';

  public users = this.usersState.asReadonly();
  public loading = this.loadingState.asReadonly();

  private handleError(operation: string) {
    return (error: HttpErrorResponse) => {
      let errorMessage = 'An unknown error occurred!';
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred.
        errorMessage = `An error occurred: ${error.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        errorMessage = `Server returned code ${error.status}, message is: ${error.message}`;
      }
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
      this.snackBar.open(`Failed to ${operation}. ${errorMessage}`, 'Close', {
        duration: 5000,
      });
      return of();
    };
  }

  loadUsers() {
    this.loadingState.set(true);
    return this.http.get<User[]>(this.apiUrl).pipe(
      tap((users) => this.usersState.set(users)),
      catchError(this.handleError('load users')),
      finalize(() => this.loadingState.set(false)),
    );
  }

  addUser(user: Omit<User, 'id'>) {
    this.loadingState.set(true);
    return this.http.post<User>(this.apiUrl, user).pipe(
      tap((newUser) => this.usersState.update((users) => [...users, newUser])),
      catchError(this.handleError('add user')),
      finalize(() => this.loadingState.set(false)),
    );
  }

  updateUser(updatedUser: User) {
    this.loadingState.set(true);
    return this.http.put<User>(`${this.apiUrl}/${updatedUser.id}`, updatedUser).pipe(
      tap(() =>
        this.usersState.update((users) =>
          users.map((user) => (user.id === updatedUser.id ? updatedUser : user)),
        ),
      ),
      catchError(this.handleError('update user')),
      finalize(() => this.loadingState.set(false)),
    );
  }

  deleteUser(id: number) {
    this.loadingState.set(true);
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.usersState.update((users) => users.filter((user) => user.id !== id))),
      catchError(this.handleError('delete user')),
      finalize(() => this.loadingState.set(false)),
    );
  }

  getUser(id: number) {
    this.loadingState.set(true);
    return this.http.get<User>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError('get user')),
      finalize(() => this.loadingState.set(false)),
    );
  }
}
