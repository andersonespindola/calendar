import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Event } from '../event/event';


@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  listEvents() {
    return this.http.get<Event[]>(this.URL);
  }

  addEvent(event: Event) {
    return this.http.post<Event>(this.URL + '/add', event).subscribe();
  }

  excludeEvent(id: number) {
    return this.http.delete(this.URL + '/' + id).subscribe();
  }

  editEvent(id: number, event: Event) {
    return this.http.put<Event>(this.URL + '/edit/' + id, event).subscribe();
  }

  listDetails(id: number) {
    return this.http.get<Event>(this.URL + '/' + id);
  }
}
