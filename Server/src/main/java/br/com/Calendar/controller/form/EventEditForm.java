package br.com.Calendar.controller.form;

import br.com.Calendar.domain.Event;
import br.com.Calendar.service.EventService;
import lombok.Setter;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

@Setter
public class EventEditForm {

    private String title;
    private String date;

    public Event edit(Long id, EventService eventService) throws ParseException {
        SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy hh:mm");
        formato.setTimeZone(TimeZone.getTimeZone("BRT"));
        Date dataFormatada = new Date();
        dataFormatada = formato.parse(this.date);
        Event event = eventService.getOne(id);
        event.setId(id);
        event.setTitle(this.title);
        event.setDate(dataFormatada);
        return event;
    }
}
