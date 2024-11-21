/* eslint-disable no-unused-vars */
import DOMPurify from 'dompurify';

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

export default function SanitizeDataModalEdit(data) {
  const sanitizedData = {
    firstName: formatFirstName(data.nome),
  };
  console.log(sanitizedData);

  return sanitizedData;
}
