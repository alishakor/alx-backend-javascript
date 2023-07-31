export default function appendToEachArrayValue(array, appendString) {
  const newArray = []
    for (const idxValue of array) {
      newArray.push(appendString + idxValue);
    }
  return newArray;
}
