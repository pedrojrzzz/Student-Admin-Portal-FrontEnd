/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import { FileButton, Button, Group } from '@mantine/core';
import { FcRemoveImage } from 'react-icons/fc';

export default function ButtonFile({ studentImgState, setStudentImgState }) {
  const handleReset = () => {
    setStudentImgState((prev) => ({
      ...prev,
      fileUploaded: null,
      urlImgStudent: null,
    }));
  };

  const handleChange = (file) => {
    const fileUrl = URL.createObjectURL(file);
    setStudentImgState((prev) => ({
      ...prev,
      fileUploaded: file,
      urlImgStudent: fileUrl,
    }));
  };
  return (
    <Group justify="center" display="block">
      {!studentImgState?.fileUploaded && (
        <FileButton
          onChange={(file) => handleChange(file)}
          accept="image/png,image/jpeg"
        >
          {(props) => (
            <Button
              variant="default"
              gradient={{ from: 'cyan', to: 'blue', deg: 121 }}
              {...props}
              disabled={studentImgState?.fileUploaded}
            >
              Alterar Imagem
            </Button>
          )}
        </FileButton>
      )}

      {studentImgState?.fileUploaded && (
        <Button variant="default" onHove onClick={handleReset}>
          <FcRemoveImage size={25} />
          <p> {studentImgState.fileUploaded.name}</p>
        </Button>
      )}
    </Group>
  );
}
