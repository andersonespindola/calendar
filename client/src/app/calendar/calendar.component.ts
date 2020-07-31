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
export class CalendarComponent implements OnInit {

  calendarService: CalendarService;
  list: Event[];
  url = 'http://localhost:8080';

  constructor(cs: CalendarService, private router: Router) {
    this.calendarService = cs;
  }

  calendarOptions: CalendarOptions = {
    locale: 'pt-br',
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'today'
    },
    buttonText: {
      today: 'Mês atual'
    },
    timeZone: 'GMT',
    firstDay: 1,
    events: { url: this.url },
    timeZoneParam: 'GMT',
    eventColor: '#40E0D0',
    eventClick(info) {
      location.href = "http://localhost:4200/edit/" + info.event.id;
    }
  };

  async ngOnInit() {
    const arrayEvent = await this.calendarService.listEvents().toPromise();
    this.list = arrayEvent;
  }
}
