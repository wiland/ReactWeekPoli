class RealState {
  constructor(rooms, area) {
    this.rooms = rooms;
    this.area = area;
  }

  toString() {
    return `This house has ${this.rooms} rooms and an area of ${this.area}m2`;
  }
}

const apartment = new RealState(3, 60);
console.log(apartment.toString());