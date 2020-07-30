package br.com.Calendar.controller;

import br.com.Calendar.controller.form.EventEditForm;
import br.com.Calendar.domain.Event;
import br.com.Calendar.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.transaction.Transactional;
import java.net.URI;
import java.util.List;
import java.util.Optional;

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

    @PostMapping("/add")
    public ResponseEntity<Event> saveEvent(@RequestBody Event event) {
        Event event1 = new Event();
        event1.setDate(event.getDate());
        event1.setDescription(event.getDescription());
        eventService.save(event1);
        return ResponseEntity.ok(event1);
    }

    @Transactional
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> exclude (@PathVariable Long id){
        Optional<Event> event = eventService.findEvent(id);
        if (event.isPresent()) {
            eventService.delete(id);
            return ResponseEntity.ok().build();
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @Transactional
    @PutMapping("/edit/{id}")
    public ResponseEntity<Event> edit (@PathVariable Long id, @RequestBody EventEditForm event){
        Optional<Event> optionalEvent = eventService.findEvent(id);
        if (optionalEvent.isPresent()){
            Event newEvent = event.edit(id, eventService);
            return ResponseEntity.ok(newEvent);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Event> eventDetails(@PathVariable Long id){
        Optional<Event> event = eventService.findEvent(id);
        if (event.isPresent()){
            return ResponseEntity.ok(event.get());
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }


}
