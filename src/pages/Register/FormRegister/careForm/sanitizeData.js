import DOMPurify from 'dompurify';

export const sanitizeData = (dataUser) => {
  const { name, email, password, confirmPassword } = dataUser;

  // Removendo espaços a mais
  const rmSpacesName = name.replace(/\s+/g, ' ').trim();
  const rmSpacesEmail = email.replace(/\s+/g, ' ').trim();
  const rmSpacesPassword = password.replace(/\s+/g, ' ').trim();
  const rmSpacesConfirmPassword = confirmPassword.replace(/\s+/g, ' ').trim();
  // ***************************

  // Limpando códigos maliciosos
  const sanitizedName = DOMPurify.sanitize(rmSpacesName);
  const sanitizedEmail = DOMPurify.sanitize(rmSpacesEmail);
  const sanitizedPassword = DOMPurify.sanitize(rmSpacesPassword);
  const sanitizedConfirmPassword = DOMPurify.sanitize(rmSpacesConfirmPassword);
  // ***************************

  return {
    sanitizedName,
    sanitizedEmail,
    sanitizedPassword,
    sanitizedConfirmPassword,
  };
};
