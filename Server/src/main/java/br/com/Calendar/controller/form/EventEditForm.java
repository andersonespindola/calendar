package br.com.Calendar.controller.form;

import br.com.Calendar.domain.Event;
import br.com.Calendar.service.EventService;
import lombok.Setter;

import java.util.Date;

@Setter
public class EventEditForm {

    private String description;
    private Date date;

    public Event edit(Long id, EventService eventService){
        Event event = eventService.getOne(id);

        event.setId(id);
        event.setDescription(this.description);
        event.setDate(this.date);
        return event;
    }
}
