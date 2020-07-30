package br.com.Calendar.service;

import br.com.Calendar.domain.Event;
import br.com.Calendar.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    private final EventRepository eventRepository;

    @Autowired
    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public List<Event> listEvents() {
        List<Event> events = eventRepository.findAll();
        return events;
    }

    public void save(Event event) {
        eventRepository.save(event);
    }

    public void delete(Long id) {
        eventRepository.deleteById(id);
    }

    public Optional<Event> findEvent(Long id) {
        return eventRepository.findById(id);
    }

    public Event getOne(Long id) {
        return eventRepository.getOne(id);
    }
}
