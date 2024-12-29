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

const formatStatus = (status) => {
  if (status === true) {
    return 1;
  }
  return 0;
};

export default function SanitizeDataModalEdit(data) {
  const sanitizedData = {
    id: data.id,
    nome: formatFirstName(data.nome),
    sobrenome: formatFirstName(data.sobrenome),
    email: formatEmail(data.email),
    idade: formatAge(data.idade),
    peso: formatWeight(data.peso),
    altura: formatHeight(data.altura),
    status: formatStatus(data.status),
    Fotos: data.Fotos,
  };

  return sanitizedData;
}
