import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

import { CalendarService } from './calendar.service';
import { Event } from '../event/event';

import * as $ from 'jquery';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{

  calendarService: CalendarService;
  list: Event[];

  constructor(cs: CalendarService) {
    this.calendarService = cs;
  }

  calendarOptions: CalendarOptions = {
    locale: 'pt-br',
    initialView: 'dayGridMonth',
   // dateClick: this.handleDateClick.bind(this),
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
    events: [
      
    ]
  };

  async ngOnInit() {
    const arrayEvent = await this.calendarService.listarEventos().toPromise();
    this.list = arrayEvent;
    console.log(this.list);
  }

 /* handleDateClick(arg) {
  alert('date click! ' + arg.dateStr);
  }*/

/*let str = formatDate(new Date(), {
  month: 'long',
  year: 'numeric',
  day: 'numeric'
});

console.log(str);*/

}
