// Write a generator function that returns a generator object which yields the fibonacci sequence.
// The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.
// The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

var fibGenerator = function*() {
  for (let a = 0, b = 1; true; b += a, a = b - a) yield a;
};
