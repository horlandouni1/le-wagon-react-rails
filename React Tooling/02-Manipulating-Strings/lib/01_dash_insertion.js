function insertDash(word) {
  // TODO: implement the method and return word with dashes
  // identificar vocales y consonates
  // separar en letras
  // identificar cuales son vocales y letras,agregar guion donde se repita dos consonantes
  const a = word.split("");
  // const expresion = /[a - z && [^ aeiou]]/
  const arreglo = ["a", "e", "i", "o", "u", " "];
  for (let i = 0; i < a.length; i += 1) {
    if (
      i + 1 < a.length
      && !arreglo.includes(a[i].toLowerCase())
      && !arreglo.includes(a[i + 1].toLowerCase())
    ) {
      a[i] += "-";
    }
  }
  const palabra = a.join("");
  return palabra;
}

module.exports = insertDash;
