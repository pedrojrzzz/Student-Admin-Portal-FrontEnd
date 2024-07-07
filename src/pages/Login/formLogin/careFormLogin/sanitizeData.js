import DOMPurify from 'dompurify';

export const sanitizeData = (data) => {
  const { email, password } = data;

  const sanitizedEmail = DOMPurify.sanitize(email);
  const sanitizedPassword = DOMPurify.sanitize(password);

  return { sanitizedEmail, sanitizedPassword };
};
