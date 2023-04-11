const getCreated= require('./getCreated'); 

class Ticket {
    constructor(data) {
      this.id = Date.now();
      this.name = data.name;
      this.status = data.status,
      this.created = getCreated();
    }

    getData() {
      return {
        id: this.id,
        name: this.name,
        status: this.status,
        created: this.created,
      }
    }
}

module.exports = Ticket;