import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Event } from '../event/event';
import { CalendarService } from '../calendar/calendar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  formEvent: FormGroup;
  id: number;
  event: Event;

  constructor(private formBuilder: FormBuilder, private calendarService: CalendarService,
              private activatedRoute: ActivatedRoute, private router: Router) {
    const event: Event = new Event();
    this.createForm(event);
  }

  ngOnInit() {
    this.returnData();
  }

  async returnData() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.event = await this.calendarService.listDetails(this.id).toPromise();
    if (!this.event) {
    }
    this.formEvent.patchValue({
      id: this.event.id,
      title: this.event.title,
      date: formatDate(this.event.date, 'dd/MM/yyyy HH:mm', 'pt-br', 'UTC')
    });
  }

  createForm(event: Event) {
    this.formEvent = this.formBuilder.group({
      title: [event.title, Validators.required],
      date: [event.date, Validators.required]
    });
  }

  onSubmit() {
    this.calendarService.editEvent(this.id, this.formEvent.value);
    this.router.navigate(['/allEvents']).then(rel =>
      location.reload()).then(() => {
        window.location.reload();
      });
  }

}
