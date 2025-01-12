/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import { FileButton, Button, Group } from '@mantine/core';
import { FcRemoveImage } from 'react-icons/fc';

export default function ButtonFile({
  fileUploaded,
  setFileUploaded,
  setUrlImgStudent,
}) {
  const handleReset = () => {
    setFileUploaded(null);
    setUrlImgStudent(null);
  };

  const handleChange = (file) => {
    const fileUrl = URL.createObjectURL(file);
    setFileUploaded(file);
    setUrlImgStudent(fileUrl);
  };
  return (
    <Group justify="center" display="block">
      {!fileUploaded && (
        <FileButton
          onChange={(file) => handleChange(file)}
          accept="image/png,image/jpeg"
        >
          {(props) => (
            <Button
              variant="default"
              gradient={{ from: 'cyan', to: 'blue', deg: 121 }}
              {...props}
              disabled={fileUploaded}
            >
              Alterar Imagem
            </Button>
          )}
        </FileButton>
      )}

      {fileUploaded && (
        <Button variant="default" onHove onClick={handleReset}>
          <FcRemoveImage size={25} />
          <p> {fileUploaded.name}</p>
        </Button>
      )}
    </Group>
  );
}
