const languages = ['HTML', 'JavaScript', 'CSS']
const workEnvironment = ['Home', 'Office', 'Blended Working']
const workWith = ['yourself', 'small team', 'multination companies']

let outputLang = Math.floor((Math.random() * 3) + 1);
let outputEnvironment = Math.floor((Math.random() * 3) + 1);
let outputWith = Math.floor((Math.random() * 3) + 1);

console.log(outputLang);
console.log(outputEnvironment);
console.log(outputWith);