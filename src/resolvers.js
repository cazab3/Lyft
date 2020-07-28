module.exports = {
  stringCutted: stringToCut => {
    const stringToCutted = stringToCut.split("").map((letter, index) => {
      if ((index + 1) % 3 === 0) {
        return letter;
      }
    });

    return stringToCutted.join().replace(/\,/g, "");
  }
};
