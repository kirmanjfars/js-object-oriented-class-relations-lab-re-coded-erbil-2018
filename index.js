let store = { drivers: [], passengers: [], trips: [] };

let id=0;

class Driver{
  constructor(name){
  this.name = name;
  store.drivers.push(this);
this.id++;
  }
  
}

