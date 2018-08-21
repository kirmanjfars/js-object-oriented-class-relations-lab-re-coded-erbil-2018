let store = { drivers: [], passengers: [], trips: [] };

let userId=0;

class Driver{
  constructor(name){
  this.name = name;
  store.drivers.push(this);
  }
  
}

