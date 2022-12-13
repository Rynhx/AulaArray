let país = 'Brasil';

console.log(país);

// transformando para maiúscula
console.log(país.toUpperCase ());

// transformando para minúsculo
console.log(país.toLocaleLowerCase ());

let frase = ' um país continental';

console.log(país + frase );
// concatenando string utilizando o template string, forma atualizada de concatenação.
// console.log(`O ${país} um país continental`)

let fraseCompleta = `${país} um país continental`;
console.log(fraseCompleta.replace('continental', 'tropical'));

console.log(fraseCompleta.length);