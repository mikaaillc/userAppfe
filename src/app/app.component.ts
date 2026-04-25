import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChildrenOutletContexts, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header';
import { trigger, transition, style, query, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  imports: [RouterModule, HeaderComponent],
  template: `
    <app-header></app-header>
    <main [@routeAnimations]="getRouteAnimationData()">
      <router-outlet></router-outlet>
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(
          ':enter, :leave',
          [
            style({
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
            }),
          ],
          { optional: true },
        ),
        query(':enter', [style({ opacity: 0 })], { optional: true }),
        query(':leave', [animate('300ms ease-out', style({ opacity: 0 }))], { optional: true }),
        query(':enter', [animate('300ms ease-in', style({ opacity: 1 }))], { optional: true }),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'angular-test';

  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
