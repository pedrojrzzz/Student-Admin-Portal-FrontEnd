export const useStudentCounter = (data) => {
  if (!data || data.length === 0 || data === undefined || data === null) return;
  /* Contando os estudantes ativos */
  const activeStudentsArray = [];
  const inativeStudentsArray = [];

  if (!Array.isArray(data) || data.length === 0) return;

  data.map((currentObject) => {
    if (currentObject.status === true) {
      activeStudentsArray.push(currentObject);
    }

    if (currentObject.status === false) {
      inativeStudentsArray.push(currentObject);
    }
  });

  /* ***************************** */

  const countedData = {
    numberOfStudents: data.length || false,
    activeStudents: activeStudentsArray.length || false,
    inactiveStudents: inativeStudentsArray.length || false,
  };

  return countedData;
};
