import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Event } from '../event/event';


@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  listarEventos() {
    return this.http.get<Event[]>(this.URL);
  }
}
