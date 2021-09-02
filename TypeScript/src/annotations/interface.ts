interface Reportable {
  summary(): void;
}

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const privateVehicle = (vehicle: Vehicle): void => {
  console.log(`Nane: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

const privateReport = (vehicle: Reportable): void => {
  console.log(`summary: ${vehicle.summary()}`);
};

privateVehicle(oldCivic);
