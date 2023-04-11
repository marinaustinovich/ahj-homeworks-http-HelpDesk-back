const { allTickets } = require("./allTickets");
const { allTicketsFull } = require("./allTicketsFull");

const deleteTicket = function (id) {
    const indexTicket = allTickets.findIndex(ticket => ticket.id === +id);
    const indexTicketFull = allTicketsFull.findIndex(ticket => ticket.id === +id);

    allTickets.splice(indexTicket, 1);
    allTicketsFull.splice(indexTicketFull, 1);
    console.log('all', allTickets);
    console.log('allFull', allTicketsFull);
    return 'Successful'
}
module.exports = deleteTicket;