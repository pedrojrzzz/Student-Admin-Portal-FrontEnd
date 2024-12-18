import React from 'react';
import { Group, Switch } from '@mantine/core';
import classes from './SwitchButton.module.css';

export default function SwitchButton({ setChecked, checked }) {
  return (
    <Group justify="center" p="md">
      <Switch
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        onLabel="Ativo"
        offLabel="Inativo"
        label="Status: "
        labelPosition="le"
        color="blue"
        classNames={classes}
      />
    </Group>
  );
}
