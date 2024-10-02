import { useContext } from 'react';
import { StudentsInfoContext } from '../context/StudentsInfoContext';

export default function useStudentsInfoContext() {
  const context = useContext(StudentsInfoContext);

  if (context === undefined) {
    throw new Error('Não está dentro do contexto');
  }

  return context;
}
