function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  if (!arr1 || !arr2) {
    return "ERROR!";
  }
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  let i = 0;
  let j = 0;
  let next_1 = arr1[i];
  let next_2 = arr2[j];
  while (next_1 || next_2) {
    if (!next_2 || next_1 < next_2) {
      merged.push(next_1);
      next_1 = arr1[++i];
    } else {
      merged.push(next_2);
      next_2 = arr2[++j];
    }
  }
  return merged;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]));
