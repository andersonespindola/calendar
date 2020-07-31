import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CalendarService } from '../calendar/calendar.service';
import { Router } from '@angular/router';
import { Event } from '../event/event';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  formEvent: FormGroup;

  constructor(private formBuilder: FormBuilder, private calendarService: CalendarService,
              private router: Router) { }

  ngOnInit() {
    const event: Event = new Event();
    event.date = new Date();
    this.createForm(event);
  }

  createForm(event: Event) {
    this.formEvent = this.formBuilder.group({
      title: [event.title, Validators.required],
      date: [formatDate(event.date, 'dd/MM/yyyy HH:mm', 'pt-BR', 'UTC'), Validators.required]
    });
  }

  onSubmit() {
    this.calendarService.addEvent(this.formEvent.value);
    this.voltar();
  }

  voltar() {
    this.router.navigate(['/allEvents']).then(rel =>
    location.reload());
  }
}
