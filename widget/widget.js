$.require([
    "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js",
    "//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"
  ], function() {

  $("head").append("<link rel='stylesheet' type='text/css' href='http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800'>");
  $("head").append("<link rel='stylesheet' type='text/css' href='//cdnjs.cloudflare.com/ajax/libs/fullcalendar/1.6.1/fullcalendar.css'>");
  $("head").append("<link rel='stylesheet' type='text/css' href='//cdnjs.cloudflare.com/ajax/libs/fullcalendar/1.6.1/fullcalendar.print.css' media='print'>");
  $.getScript("//cdnjs.cloudflare.com/ajax/libs/fullcalendar/1.6.1/fullcalendar.min.js", function() {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    var calendar = $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'agendaWeek,agendaDay'
      },
      theme: false,
      availableViews: 'agendaWeek,agendaDay',
      defaultView: 'agendaWeek',
      firstDay: 1,
      weekends: true,
      defaultEventMinutes: 60,
      allDaySlot: false,
      minTime: 6,
      maxTime: 23,
      firstHour: 8,
      slotMinutes: 30,
      selectable: true,
      selectHelper: true,
      select: function(start, end, allDay) {
        var title = 'Your Appointment';
        calendar.fullCalendar('renderEvent',
          {
            title: title,
            start: start,
            end: end,
            allDay: allDay,
            editable: true
          },
          true // make the event "stick"
        );
        calendar.fullCalendar('unselect');
      },
      editable: false
      /*
      ,events: [
        {
          title: 'All Day Event',
          start: new Date(y, m, 1)
        },
        {
          title: 'Long Event',
          start: new Date(y, m, d-5),
          end: new Date(y, m, d-2)
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: new Date(y, m, d-3, 16, 0),
          allDay: false
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: new Date(y, m, d+4, 16, 0),
          allDay: false
        },
        {
          title: 'Meeting',
          start: new Date(y, m, d, 10, 30),
          allDay: false
        },
        {
          title: 'Lunch',
          start: new Date(y, m, d, 12, 0),
          end: new Date(y, m, d, 14, 0),
          allDay: false
        },
        {
          title: 'Birthday Party',
          start: new Date(y, m, d+1, 19, 0),
          end: new Date(y, m, d+1, 22, 30),
          allDay: false
        },
        {
          title: 'Click for Google',
          start: new Date(y, m, 28),
          end: new Date(y, m, 29),
          url: 'http://google.com/'
        }
      ]
      */
    });

  });

});

