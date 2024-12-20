/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import { FileButton, Button, Group } from '@mantine/core';

export default function ButtonFile({ fileUploaded, setFileUploaded }) {
  const handleReset = () => {
    setFileUploaded(null);
  };
  return (
    <Group justify="center" display="block">
      <FileButton onChange={setFileUploaded} accept="image/png,image/jpeg">
        {(props) => (
          <Button {...props} disabled={fileUploaded}>
            Alterar Imagem
          </Button>
        )}
      </FileButton>
      <Button onClick={handleReset}>x</Button>
      {fileUploaded && (
        <p style={{ color: 'black', fontWeight: 'lighter' }}>
          Img: {fileUploaded.name}
        </p>
      )}
    </Group>
  );
}
