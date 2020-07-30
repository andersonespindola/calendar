import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { NewEventComponent } from './new-event/new-event.component';
import { EventComponent } from './event/event.component';
import { EditEventComponent } from './edit-event/edit-event.component';

const routes: Routes = [
  {
    path: '',
    component: CalendarComponent
  },
  {
    path: 'newEvent',
    component: NewEventComponent
  },
  {
    path: 'allEvents',
    component: EventComponent
  },
  {
    path: 'edit/:id',
    component: EditEventComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
