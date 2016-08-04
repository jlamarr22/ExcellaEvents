import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'src/events/event-detail.component.html'
})
export class EventDetailComponent {
    pageTitle: string = 'Event Detail';
    constructor(private _route: ActivatedRoute,
                private _router: Router) {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
    }

    onBack(): void {
        this._router.navigate(['/events']);
    }
}
