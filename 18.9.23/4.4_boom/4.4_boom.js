let scoreMaryTeam;
scoreMaryTeam  = (97+134+105)/3;
let scoreMikeTeam;
scoreMikeTeam  = (89+120+103)/3;
let scoreJohnTeam;
scoreJohnTeam  = (116+94+123)/3;
if ((scoreMikeTeam>scoreJohnTeam) && (scoreMikeTeam>scoreMaryTeam)) {
console.log('Mikes Team average score is better: ' + scoreMikeTeam);}
else if (scoreMikeTeam<scoreJohnTeam && scoreMaryTeam<scoreJohnTeam){
console.log('Johns Team average score is better: ' + scoreJohnTeam);}
else if (scoreMaryTeam>scoreJohnTeam && scoreMaryTeam>scoreMikeTeam){
console.log('Marys Team average score is better: ' + scoreMaryTeam);}
else 'its a draw';

