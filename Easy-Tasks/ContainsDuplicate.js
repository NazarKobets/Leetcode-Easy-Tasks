// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const duplicates = nums.filter((e, index, arr) => arr.indexOf(e) !== index);

  if (duplicates.length === 0) {
    return false;
  } else {
    return true;
}