function InjectTimestamp<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    timestamp: Date;

    constructor(...args: any[]) {
      super(...args);
      this.timestamp = new Date(); 
    }
  };
}

@InjectTimestamp
class Reporta {
  title: string;
  timestamp: Date; 

  constructor(t: string) {
    this.title = t;
    this.timestamp = new Date(); 
  }
}

// Expected output (when creating a new instance):
const report = new Reporta("Quarterly Report");
console.log(report.title);      // "Quarterly Report"
console.log(report.timestamp);  // current date and time
