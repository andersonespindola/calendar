import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

import { CalendarService } from './calendar.service';
import { Event } from '../event/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{

  calendarService: CalendarService;
  list: Event[];
  url = 'http://localhost:8080';

  constructor(cs: CalendarService, private router: Router) {
    this.calendarService = cs;
  }

  calendarOptions: CalendarOptions = {
    locale: 'pt-br',
    initialView: 'dayGridMonth',
    eventBackgroundColor: '#40E0D0',
    headerToolbar: {
      left:   'prev,next',
      center: 'title',
      right: 'today'
    },
    editable: true,
    buttonText: {
      today: 'Mês atual'
    },
    timeZone: 'UTC',
    firstDay: 1,
    events: {url: this.url}
  };

  async ngOnInit() {
    const arrayEvent = await this.calendarService.listEvents().toPromise();
    this.list = arrayEvent;
  }
}
