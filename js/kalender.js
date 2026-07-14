document.addEventListener('DOMContentLoaded', function () {

    const calendarEl = document.getElementById('calendar');

    const calendar = new FullCalendar.Calendar(calendarEl, {

        initialView: 'dayGridMonth',

        headerToolbar: {

            left: 'prev',

            center: 'title',

            right: 'next'

        },

        events: [

            {
                title: 'Booked',
                start: '2026-07-12',
                color: '#d9534f'
            },

            {
                title: 'Booked',
                start: '2026-07-20',
                color: '#d9534f'
            },

            {
                title: 'Booked',
                start: '2026-07-28',
                color: '#d9534f'
            }

        ],

        dateClick: function(info){

            const events = calendar.getEvents();

            let booked = false;

            events.forEach(function(event){

                if(event.startStr === info.dateStr){

                    booked = true;

                }

            });

            document.getElementById("tanggalBooking").innerHTML =
            info.dateStr;

            if(booked){

                document.getElementById("statusBooking").innerHTML =

                "🔴 <b>Tanggal ini sudah terbooking.</b>";

            }

            else{

                document.getElementById("statusBooking").innerHTML =

                "🟢 <b>Tanggal ini masih tersedia.</b>";

            }

            new bootstrap.Modal(

                document.getElementById("bookingModal")

            ).show();

        }

    });

    calendar.render();

});