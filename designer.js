class Telephone {
  constructor() {
    this.phoneNumbers = [];
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(phoneNumber) {
    this.observers.forEach((observer) => {
      observer.update(phoneNumber);
    });
  }

  addPhoneNumber(phoneNumber) {
    this.phoneNumbers.push(phoneNumber);
  }

  removePhoneNumber(phoneNumber) {
    const index = this.phoneNumbers.indexOf(phoneNumber);
    if (index !== -1) {
      this.phoneNumbers.splice(index, 1);
    }
  }

  dialPhoneNumber(phoneNumber) {
    if (this.phoneNumbers.includes(phoneNumber)) {
      this.notifyObservers(phoneNumber);
      console.log("Dialing", phoneNumber);
    } else {
      console.log("Phone number not found.");
    }
  }
}

class Observer {
  update(phoneNumber) {}
}

class PrintPhoneNumberObserver extends Observer {
  update(phoneNumber) {
    console.log("Dialed:", phoneNumber);
  }
}

class CustomObserver extends Observer {
  update(phoneNumber) {
    console.log("Now Dialing", phoneNumber);
  }
}

const telephone = new Telephone();

telephone.addObserver(new PrintPhoneNumberObserver());
telephone.addObserver(new CustomObserver());

telephone.addPhoneNumber("1234567890");
telephone.addPhoneNumber("2345678901");

telephone.dialPhoneNumber("1234567890");
telephone.dialPhoneNumber("2347023232");
