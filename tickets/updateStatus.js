const { allTickets } = require("./allTickets");
const { allTicketsFull } = require("./allTicketsFull");

const updateStatus = function (id, status) {
    const ticket = allTickets.find(ticket => ticket.id === +id);
    const ticketFull = allTicketsFull.find(ticket => ticket.id === +id);

    ticket.status = status;
    ticketFull.status = status;
    console.log('all', allTickets);
    console.log('allFull', allTicketsFull);
    return 'Successful';
}
module.exports = updateStatus;