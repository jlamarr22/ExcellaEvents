import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { EventService } from './events/event.service';

const template = require('./app.html');

@Component({
  selector: 'auth-app',
  template: template,
  directives: [ ROUTER_DIRECTIVES ],
  providers: [EventService]
})

export class App {
  constructor(public router: Router) {}
}
