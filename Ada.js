class Human {
    constructor(opt) {
        this.nick = opt.nick;
        this.token = opt.token || false;
    }

    check() {
      
        if(this.token) {
            console.log(`${this.nick} - im a token.`);
        } else {
            console.log(`${this.nick} - im not a token`);
        }
      
    }
  
}

const Seyfo = new Human({
  nick: "Seyfooksck",
  token: false
})

Seyfo.check();
