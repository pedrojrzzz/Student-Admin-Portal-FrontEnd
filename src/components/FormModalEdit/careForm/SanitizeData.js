/* eslint-disable no-unused-vars */
import DOMPurify from 'dompurify';

const sanitizeName = (name) => {
  const eachLetter = name.split(' ')[0].split('');
  let sanitizedName = [];
  eachLetter.map((item) => {
   
};

export default function SanitizeDataModalEdit(data) {
  const cleanName = sanitizeName(data.nome);
  return cleanName;
}
