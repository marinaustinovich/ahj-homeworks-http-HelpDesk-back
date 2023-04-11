const Ticket = require("./Ticket");
const TicketFull = require("./TicketFull");
const { allTickets } = require("./allTickets");
const { allTicketsFull } = require("./allTicketsFull");

const createTicket = function (data) {
    let ticket;
    if (data.id === 'null') {
        ticket = new Ticket(data);
        const ticketFull = new TicketFull(ticket.getData(), data.description);

        allTickets.push(ticket);
        allTicketsFull.push(ticketFull);
    } else {
        const ticketUpdateName = allTicketsFull.find(ticket => ticket.id === +data.id);
        ticketUpdateName.description = data.description;
        ticketUpdateName.name = data.name;

        ticket = allTickets.find(ticket => ticket.id === +data.id);
        ticket.name = data.name;
    }

    return ticket; 
}
module.exports = createTicket;