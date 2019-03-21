function Scooter (year, color, model) {
    this.year = year
    this.color = color
    this.model = model
}

function Driver (name, age, experience) {
    Object.assign(this, {name, age, experience})
}

function PickupLocation (address, city) {
    Object.assign(this, {address, city})
}