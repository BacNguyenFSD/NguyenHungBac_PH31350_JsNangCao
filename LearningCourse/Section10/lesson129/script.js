'use strict';

const bookings = [];

const createBooking = function (flightNum, numberPassengers = 1, price = 199 * numberPassengers) {
    // ES5
    // numberPassengers = numberPassengers || 1;
    // price = price || 199;
    const booking = {
        flightNum,
        numberPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 5);