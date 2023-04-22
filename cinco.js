// Definindo a string a ser invertida
const str = "Hello, world!";

// Convertendo a string em um array de caracteres
const chars = str.split("");

// Invertendo a ordem do array
const reversedChars = [];
for (let i = chars.length - 1; i >= 0; i--) {
  reversedChars.push(chars[i]);
}

// Convertendo o array de volta para string
const reversedStr = reversedChars.join("");

console.log(reversedStr); // Output: !dlrow ,olleH