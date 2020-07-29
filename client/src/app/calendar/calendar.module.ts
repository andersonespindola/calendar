import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from './calendar.component';
import { HttpClientModule } from '@angular/common/http';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    FullCalendarModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
