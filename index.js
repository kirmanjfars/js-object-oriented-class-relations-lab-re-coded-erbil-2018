let store = { drivers: [], passengers: [], trips: [] };

let id=0;

class Driver{
  constructor(name){
  this.name = name;
  store.drivers.push(this);
this.id++;
  }
  
}



class Passenger{
  constructor(name){
  this.name = name;
  store.passengers.push(this);
  this.id++;
  }
  
}




class Trips{
  constructor(driver, passenger){
  this.driver = driver;
  store.passengers.push(this);
  this.id++;
  }
  
}






