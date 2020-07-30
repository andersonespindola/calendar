import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Event } from '../event/event';
import { CalendarService } from '../calendar/calendar.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    let event: Event = new Event();
    this.createForm(event);
  }

  ngOnInit() {
    this.returnData();
  }

  async returnData() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.event = await this.calendarService.listDetails(this.id).toPromise();
    if (!this.event){
    }
    this.formEvent.patchValue({
      id: this.event.id,
      description: this.event.description,
      date: this.event.date
    });
  }

  createForm(event: Event){
    this.formEvent = this.formBuilder.group({
      description: [event.description, Validators.required],
      date: [event.date, Validators.required]
    });
  }

  onSubmit() {
    this.calendarService.editEvent(this.id, this.formEvent.value);
    this.router.navigate(['/allEvents']);
  }

}
