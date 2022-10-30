const languages = ['HTML', 'JavaScript', 'CSS']
const workEnvironment = ['the comfort of your own home', 'the latest and greatest office space', 'the best of office and home working - Blended Working']
const workWith = ['by yourself', 'with a small team', 'for multinational companies']

let outputLang = languages[Math.floor(Math.random() * 3)];
let outputEnvironment = workEnvironment[Math.floor(Math.random() * 3)];
let outputWith = workWith[Math.floor(Math.random() * 3)];

/*console.log(outputLang);
console.log(outputEnvironment);
console.log(outputWith);*/

console.log(`By choosing a new career in I.T you will learn amazing skills with coding languages like ${outputLang}. This will help you to complete amazing projects ${outputWith} in different environments including ${outputEnvironment}!`)




