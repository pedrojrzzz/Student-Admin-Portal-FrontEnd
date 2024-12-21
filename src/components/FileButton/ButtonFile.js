/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import { FileButton, Button, Group } from '@mantine/core';
import { FcRemoveImage } from 'react-icons/fc';

export default function ButtonFile({ fileUploaded, setFileUploaded }) {
  const handleReset = () => {
    setFileUploaded(null);
  };
  return (
    <Group justify="center" display="block">
      {!fileUploaded && (
        <FileButton onChange={setFileUploaded} accept="image/png,image/jpeg">
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
        </Button>
      )}

      {fileUploaded && (
        <p style={{ color: 'black', fontWeight: 'lighter' }}>
          Img: {fileUploaded.name}
        </p>
      )}
    </Group>
  );
}
