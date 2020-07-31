package br.com.Calendar.controller;

import br.com.Calendar.controller.form.EventEditForm;
import br.com.Calendar.domain.Event;
import br.com.Calendar.dto.EventDto;
import br.com.Calendar.service.EventService;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.TimeZone;

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

    @SneakyThrows
    @PostMapping("/add")
    public ResponseEntity<Event> saveEvent(@RequestBody EventDto eventDto) {
        Event event1 = new Event();
        SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy hh:mm");
        formato.setTimeZone(TimeZone.getTimeZone("BRT"));

        String remocao = eventDto.getDate().replace("T", " ");
        eventDto.setDate(remocao);


        Date dataFormatada = new Date();
        dataFormatada = formato.parse(eventDto.getDate());

        event1.setDate(dataFormatada);
        event1.setDescription(eventDto.getDescription());
        eventService.save(event1);
        return ResponseEntity.ok(event1);
    }

    @Transactional
    @PutMapping("/edit/{id}")
    public ResponseEntity<Event> edit (@PathVariable Long id, @RequestBody EventEditForm event) throws ParseException {
        Optional<Event> optionalEvent = eventService.findEvent(id);
        if (optionalEvent.isPresent()){
            Event newEvent = event.edit(id, eventService);
            return ResponseEntity.ok(newEvent);
        }
        return ResponseEntity.notFound().build();
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
