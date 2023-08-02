export default function updateStudentGradeByCity(studentArray, city, newGrade) {
  const studentLocation = studentArray.filter((student) => student.location === city);
  const updatedGrd = studentLocation.map((student) => {
    const matchingGrades = newGrade.filter(
      (grade) => grade.studentId === student.id,
    );
    const newGrdA = matchingGrades.length > 0 ? matchingGrades[0].grade : 'N/A';
    return {
      ...student,
      grade: newGrdA,
    };
  });

  return updatedGrd;
}
