import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IEvent } from './event';

@Injectable()
export class EventService {
    private _eventUrl = 'api/events/events.json';
    getEvents(): Observable<IEvent[]> {
        return this._http.get(this._eventUrl)
            .map((response: Response) => <IEvent[]>response.json());
    }

    constructor(private _http: Http) {

    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
