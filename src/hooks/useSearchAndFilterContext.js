import { useContext } from 'react';
import { SearchAndFilterContext } from '../context/SearchAndFilterContext';

export default function useSearchAndFilterContext() {
  const context = useContext(SearchAndFilterContext);

  if (context === undefined) {
    throw new Error('Não está dentro do contexto.');
  }

  return context;
}
