export const handleFixInputName = (e, setFieldValue) => {
  const { value } = e.target;

  const fullName = value.split(' ');

  const newName = fullName.map((each) => {
    if (each.charAt(0) === each.charAt(0).toUpperCase()) {
      return each;
    }
    const fixed = each.charAt(0).toUpperCase() + each.slice(1).toLowerCase();
    return fixed;
  });

  setFieldValue('name', newName.join(' '));
};
