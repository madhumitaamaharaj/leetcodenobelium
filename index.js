var lengthOfLastWord = function (s) {
  const newwords = s.trim().split(" ");
  return newwords.length > 0 ? newwords[newwords.length - 1].length : 0;
};