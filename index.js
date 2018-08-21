let store = { drivers: [], passengers: [], trips: [] };

let id=0;
let driverId=0; 
let passengerId=0;
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
  constructor(driverId, passengerId){
   this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = tripId++;
    store.trips.push(this);
   }
}






