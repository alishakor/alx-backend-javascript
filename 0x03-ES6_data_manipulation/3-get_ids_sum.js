export default function getStudentIdsSum(studentArray) {
  const sumOfStudentIds = studentArray.reduce(
    (accumulator, currentStudent) => accumulator.id || accumulator
     + currentStudent.id, 0,
  );
  return sumOfStudentIds;
}
