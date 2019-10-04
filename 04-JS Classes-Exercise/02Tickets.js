function sortedTickets(arrayOfStrings, sortCriteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
                this.price = +price;
                this.status = status;
        }
    }

    let ticketsAsArray = arrayOfStrings.map(s => s.split('|'));
    let ticketsAsObject = ticketsAsArray.map(([destination, price, status]) => new Ticket(destination, price, status));
    switch (sortCriteria) {
        case 'destination':
            return ticketsAsObject.sort((a, b) => a.destination.localeCompare(b.destination));
        case 'price':
            return ticketsAsObject.sort((a, b) => a.price - b.price);
        case 'status':
            return ticketsAsObject.sort((a, b) => a.status.localeCompare(b.status));
    }

}
// sortedTickets(['Philadelphia|94.20|available',

//         'New York City|95.99|sold',
//         'New York City|95.99|available',


//         'Boston|126.20|departed'
//     ],

//     'status');
console.log( sortedTickets(['Philadelphia|94.20|available', 

'New York City|95.99|available', 

'New York City|95.99|sold', 

'Boston|126.20|departed'], 

'status' ));
   