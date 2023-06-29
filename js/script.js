function Human (name, gender){
    this.name = name;
    this.gender = gender;
}

function flat() {
    this.residents = [];
}

flat.prototype.addResident = function(Human) {
    this.residents.push(Human);
}

function House(maxFlats) {
    this.flats = [];
    this.maxFlats = maxFlats;
}

House.prototype.addFlat = function(flat) {
    if (this.flats.length < this.maxFlats) {
        this.flats.push(flat);
    } else {
        console.log('максимально квартир');
    }
}

let human1 = new Human('Kolia', 'male');
let human2 = new Human('Olia', 'female');
let human3 = new Human('Vova', 'male');

let flat1 = new flat();
let flat2 = new flat();

flat1.addResident(human1);
flat1.addResident(human2);
flat2.addResident(human3);

let house = new House(5);

house.addFlat(flat1);
house.addFlat(flat2);

console.log(house);