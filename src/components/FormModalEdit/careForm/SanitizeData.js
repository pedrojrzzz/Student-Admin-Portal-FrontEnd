import DOMPurify from 'dompurify';
//import HandlePost from './HandlePost';

const formatFirstName = (name) => {
  const sanitizedInput = DOMPurify.sanitize(name);
  const nameCharacters = sanitizedInput.split(' ')[0].split('');
  let formattedName = [];

  nameCharacters.map((char, index) => {
    if (index === 0) {
      formattedName.push(char.toUpperCase());
    } else {
      formattedName.push(char.toLowerCase());
    }
  });

  return formattedName.join('');
};

const formatEmail = (email) => {
  const sanitizedEmail = DOMPurify.sanitize(email);
  return sanitizedEmail;
};

const formatAge = (age) => {
  const sanitizedAge = DOMPurify.sanitize(age);

  return sanitizedAge;
};

const formatWeight = (weight) => {
  const sanitizedWeight = DOMPurify.sanitize(weight);
  return sanitizedWeight;
};

const formatHeight = (height) => {
  const sanitizedHeight = DOMPurify.sanitize(height);
  return sanitizedHeight;
};

export default function SanitizeDataModalEdit(data, idStudent) {
  const sanitizedData = {
    idStudent,
    firstName: formatFirstName(data.nome),
    lastName: formatFirstName(data.sobrenome),
    email: formatEmail(data.email),
    age: formatAge(data.idade),
    weight: formatWeight(data.peso),
    height: formatHeight(data.altura),
  };
  return sanitizedData;
}
