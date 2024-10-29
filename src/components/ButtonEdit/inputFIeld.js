/* eslint-disable no-unused-vars */
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    color: 'white', // Cor do texto
    '&::placeholder': {
      color: 'white', // Cor do placeholder
      opacity: 1, // Garantir que o placeholder seja totalmente visível
    },
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: 'white', // Linha de baixo antes de focar
  },
  '& .MuiInput-underline:hover:before': {
    borderBottomColor: 'white', // Linha de baixo ao passar o mouse
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'blue', // Linha de baixo quando focado
  },
  '& .MuiInputLabel-root': {
    color: 'white', // Cor do label padrão
  },
  '& .MuiInputLabel-root.MuiInputLabel-shrink': {
    color: 'blue', // Cor do label quando o input está focado ou tem valor
  },
}));
