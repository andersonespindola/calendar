import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EventComponent } from './event/event.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NewEventComponent } from './new-event/new-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarService } from './calendar/calendar.service';
import { CustomDatePipe } from './pipe/custom.datepipe';
import { NgxMaskModule } from 'ngx-mask';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    CalendarComponent,
    NewEventComponent,
    EditEventComponent,
    CustomDatePipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule
  ],
  providers: [CalendarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
