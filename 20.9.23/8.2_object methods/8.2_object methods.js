const mycountry = {
  country: "Israel",
  capital: 'Jerusalem',
  language: 'Hebrew',
  population: '9.5 Millions',
  neighbours: ['Jorden', 'Eygpt', 'Lebanon', 'Syria'],
  describe: function () {
    console.log(`${this.country} has ${this.population} people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
  },
  checkIsland: function () {
    this.isisland = this.neighbours.length === 0 ? true : false;
  }
}


mycountry.describe();
mycountry.checkIsland();
console.log(mycountry.isisland);