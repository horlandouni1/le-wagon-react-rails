function occurrences(text, word) {
  const a = text.split(" ");
  let c = 0;
  a.forEach((element) => {
    if (element.toLowerCase() === word.toLowerCase()) {
      c += 1;
    }
  });
  return c;
}

module.exports = occurrences;
