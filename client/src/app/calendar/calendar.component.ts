import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  calendarOptions: CalendarOptions = {
    locale: 'pt-br',
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    events: [
      { title: 'event 1', start: '2020-07-28' },
      { title: 'event 2', start: '2020-07-29' }
    ],
    eventBackgroundColor: '#40E0D0',
    headerToolbar: {
      left:   'prev,next',
      center: 'title',
      right: 'today'
    }
  };

  handleDateClick(arg) {
  alert('date click! ' + arg.dateStr);
  }

/*let str = formatDate(new Date(), {
  month: 'long',
  year: 'numeric',
  day: 'numeric'
});

console.log(str);*/

}
