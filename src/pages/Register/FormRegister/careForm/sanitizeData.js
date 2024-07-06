import DOMPurify from 'dompurify';

export const sanitizeData = (dataUser) => {
  const { name, email, password, confirmPassword } = dataUser;

  // Limpando códigos maliciosos
  const sanitizedName = DOMPurify.sanitize(name);
  const sanitizedEmail = DOMPurify.sanitize(email);
  const sanitizedPassword = DOMPurify.sanitize(password);
  const sanitizedConfirmPassword = DOMPurify.sanitize(confirmPassword);
  // ***************************

  return {
    sanitizedName,
    sanitizedEmail,
    sanitizedPassword,
    sanitizedConfirmPassword,
  };
};
