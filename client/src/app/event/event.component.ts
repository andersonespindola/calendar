import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../calendar/calendar.service';
import { Event } from './event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  calendarService: CalendarService;
  lista: Event[];

  constructor(cs: CalendarService, private router: Router) {
    this.calendarService = cs;
  }

  async ngOnInit() {
    const arrayEvent = await this.calendarService.listEvents().toPromise();
    this.lista = arrayEvent;
  }

  excludeEvent(id: number) {
    this.calendarService.excludeEvent(id.valueOf());
    this.reload();
  }

  editEvent(id: number) {
    this.router.navigate(['/edit/' + id]);
  }

  newEvent() {
    this.router.navigate(['/newEvent']);
  }

  reload() {
    location.reload();
  }
}
