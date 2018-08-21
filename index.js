let store = { drivers: [], passengers: [], trips: [] };

class Driver{
  constructor(name){
  this.name = name;
  store.drivers.push(this);
  }
  
}

