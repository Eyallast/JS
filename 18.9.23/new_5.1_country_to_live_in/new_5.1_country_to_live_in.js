const promptLanguage = prompt('Please enter your language:');
const promptIsland = prompt('Please enter if you are looking for an island:');
const promptPopulation = prompt('Please enter the desired population:');
const promptCountry = prompt('Please enter the country name:');
if (promptLanguage == "finnish" && promptIsland==true && promptPopulation > 1000000 && promptCountry == "Finland")
{console.log('You should live in Finland')}
else console.log('Finland does not meet your criteria');