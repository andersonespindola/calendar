package br.com.Calendar.controller;

import br.com.Calendar.domain.Event;
import br.com.Calendar.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
public class EventController {

    private EventService eventService;

    @Autowired
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping
    public List<Event> listar() {
        return eventService.listEvents();
    }

    @PostMapping
    public ResponseEntity<Event> saveEvent(@RequestBody Event event) {
        Event event1 = new Event();
        event1.setDate(event.getDate());
        event1.setDescription(event.getDescription());
        eventService.save(event1);
        return ResponseEntity.ok(event1);
    }




}
