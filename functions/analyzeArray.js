export default function analyzeArray(array) {
  const sum = array.reduce((acc, current) => acc + current, 0);
  const average = sum / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  return { average, min, max, length: array.length };
}
