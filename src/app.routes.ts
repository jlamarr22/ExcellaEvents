import { RouterConfig } from '@angular/router';
import { Home } from './home';
import { Login } from './login';
import { Signup } from './signup';
import { EventListComponent } from './events/event-list.component';
import { EventDetailComponent } from './events/event-detail.component';
import { AuthGuard } from './common/auth.guard';

export const routes: RouterConfig = [
  { path: '',       component: Login },
  { path: 'login',  component: Login },
  { path: 'signup', component: Signup },
  { path: 'home',   component: Home, canActivate: [AuthGuard] },
  { path: 'events', component: EventListComponent, canActivate: [AuthGuard] },
  { path: 'event/:id', component: EventDetailComponent, canActivate: [AuthGuard] },
  { path: '**',     component: Login },
];
