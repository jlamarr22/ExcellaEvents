import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { IEvent } from './event';
import { EventFilterPipe } from './event-filter.pipe';
import { StarComponent } from '../shared/star.component';
import { EventService } from './event.service';

@Component({
    templateUrl: 'src/events/event-list.component.html',
    styleUrls: ['src/events/event-list.component.css'],
    pipes: [EventFilterPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES]
})

export class EventListComponent implements OnInit {
    pageTitle: string = 'Event List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'Excella';
    errorMessage: string;
    events: IEvent[];
    constructor(private _eventService: EventService) {
    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        this._eventService.getEvents()
            .subscribe(events => this.events = events,
                error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Event List: ' + message;
    }
}
