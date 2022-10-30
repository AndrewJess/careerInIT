const languages = ['HTML', 'JavaScript', 'CSS']
const workEnvironment = ['Home', 'Office', 'Blended Working']
const workWith = ['yourself', 'small team', 'multinational companies']

let outputLang = languages[Math.floor(Math.random() * 3)];
let outputEnvironment = workEnvironment[Math.floor(Math.random() * 3)];
let outputWith = workWith[Math.floor(Math.random() * 3)];

console.log(outputLang);
console.log(outputEnvironment);
console.log(outputWith);




