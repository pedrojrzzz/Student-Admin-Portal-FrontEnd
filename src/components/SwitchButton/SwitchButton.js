/* eslint-disable no-unused-vars */
import React from 'react';
import { Group, Chip, Fieldset } from '@mantine/core';
import { MdClose, MdDone } from 'react-icons/md';
import { colors } from '@mui/material';

export default function SwitchButton({ setChecked, checked }) {
  return (
    <div>
      <Group justify="center" p="md">
        <Fieldset
          legend="Status"
          variant="default"
          style={{ color: '#43384F', fontWeight: 'lighter' }}
        >
          {checked ? (
            <Chip
              icon={<MdDone size={17} />}
              defaultChecked
              checked
              color="lime"
              value="Ativo"
              onChange={() => setChecked(!checked)}
            >
              Ativo
            </Chip>
          ) : (
            <Chip
              icon={<MdClose size={17} />}
              defaultChecked
              checked
              color="red"
              value="Inativo"
              onChange={() => setChecked(!checked)}
            >
              Inativo
            </Chip>
          )}
        </Fieldset>
      </Group>
    </div>
  );
}
