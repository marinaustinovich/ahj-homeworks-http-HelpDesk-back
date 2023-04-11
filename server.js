const cors = require('@koa/cors');
const serve = require('koa-static');
const Koa = require('koa');
const { koaBody  } = require('koa-body');
const { allTickets }= require('./tickets/allTickets');
const { allTicketsFull } = require('./tickets/allTicketsFull');
const createTicket = require('./tickets/createTicket');
const deleteTicket = require('./tickets/deleteTicket');
const updateStatus = require('./tickets/updateStatus');

const app = new Koa();

app.use(cors());
app.use(serve('./tickets'));
app.use(koaBody ({
  multipart: true,
  urlencoded: true
}));

app.use((ctx) => {
  const { method } = ctx.request.query;
  
  if (ctx.request.method === 'DELETE') {
    ctx.response.body = deleteTicket(ctx.request.query.id);
    return;
  } else if (ctx.request.method === 'PUT') {
      ctx.response.body = updateStatus(ctx.request.query.id, ctx.request.query.status);
      return;
  } else {
    
    switch (method) {
      case 'allTickets':
        ctx.response.body = allTickets;
        return;
      case 'ticketById':
        ctx.response.body = allTicketsFull.find(ticket => ticket.id === +ctx.request.query.id);
        return;
      case 'createTicket':
        ctx.response.body = createTicket(ctx.request.body);
        return;
      default:
        ctx.response.status = 404;
        return;
    }
  }
});

const port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Server running on http://localhost:3000')
});