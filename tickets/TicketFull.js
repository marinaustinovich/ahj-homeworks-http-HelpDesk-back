class TicketFull{
  constructor(data, description) {
    this.id = data.id;
    this.name = data.name;
    this.status = data.status,
    this.created = data.created;
    this.description = description;
  }
}

module.exports = TicketFull;