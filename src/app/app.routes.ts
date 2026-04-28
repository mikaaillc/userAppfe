import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list';
import { UserFormComponent } from './user-form/user-form';
import { LoginComponent } from './login/login';
import { SignupComponent } from './signup/signup';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'users', component: UserListComponent, canActivate: [authGuard], data: { animation: 'UserListPage' } },
  { path: 'user/new', component: UserFormComponent, canActivate: [authGuard], data: { animation: 'UserFormPage' } },
  { path: 'user/:id/edit', component: UserFormComponent, canActivate: [authGuard], data: { animation: 'UserFormPage' } },
];
