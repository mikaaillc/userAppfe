import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list';
import { UserFormComponent } from './user-form/user-form';

export const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent, data: { animation: 'UserListPage' } },
  { path: 'user/new', component: UserFormComponent, data: { animation: 'UserFormPage' } },
  { path: 'user/:id/edit', component: UserFormComponent, data: { animation: 'UserFormPage' } },
];
