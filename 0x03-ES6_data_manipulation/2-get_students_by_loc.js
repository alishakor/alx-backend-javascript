export default function getStudentsByLocation(studentArray, city) {
  const studentLocation = studentArray.filter((student) => student.location === city);
  return studentLocation;
}
