/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */


/* eslint-disable no-undef */
export const useStudentCounter = (data) => {

  /* Contando os estudantes ativos */
  const activeStudentsArray = []
  const inativeStudentsArray = []
  data.map((currentObject) => {
    
    if (currentObject.status === true) {
      activeStudentsArray.push(currentObject)
      
    }
    if (currentObject.status === false) {
      inativeStudentsArray.push(currentObject)
    }
    
  })

  /* ***************************** */


  const countedData = {
    numberOfStudents: data.length || false,
    activeStudents: activeStudentsArray.length || false,
    inactiveStudents: inativeStudentsArray.length || false
  }

  return countedData;
};
