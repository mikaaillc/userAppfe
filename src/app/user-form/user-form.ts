import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './user-form.html',
  styleUrls: ['./user-form.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private userService = inject(UserService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  userForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  userId?: number;

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.userId = +idParam;
      this.userService.getUser(this.userId).subscribe((user) => {
        if (user) {
          this.userForm.patchValue(user);
        }
      });
    }
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    const formValue = this.userForm.getRawValue();
    const userData = {
      name: formValue.name ?? '',
      email: formValue.email ?? '',
    };

    if (this.userId) {
      this.userService.updateUser({ ...userData, id: this.userId }).subscribe(() => {
        this.router.navigate(['/users']);
      });
    } else {
      this.userService.addUser(userData).subscribe(() => {
        this.router.navigate(['/users']);
      });
    }
  }
}
