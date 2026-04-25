import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { UserService } from '../user.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-user-list',
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UserListComponent implements OnInit {
  private userService = inject(UserService);
  users = this.userService.users;
  loading = this.userService.loading;
  displayedColumns: string[] = ['name', 'email', 'actions'];

  ngOnInit() {
    this.userService.loadUsers().subscribe();
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe();
  }
}
