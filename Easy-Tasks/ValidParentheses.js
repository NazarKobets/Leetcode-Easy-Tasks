// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// 3. Every close bracket has a corresponding open bracket of the same type.

var isValid = function(s) {
  let map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  let stck = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stck.push(s[i]);
    } else if (stck[stck.length -1] === map[s[i]]) {
      stck.pop();
    } else return false;
  }

  return stck.length ? false : true;
};