import { useState, useEffect } from 'react';

// Este hook personalizado captura a largura da tela do navegador e a armazena em um estado local.
export const useScreenWidth = () => {
  // Define um estado local chamado "screenWidth" para armazenar a largura da tela.
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Define uma função para atualizar o estado "screenWidth" com a largura atual da janela do navegador.
  const handleWindowSizeChange = () => {
    setScreenWidth(window.innerWidth);
  };

  // Configura um efeito para ser executado após cada renderização do componente.
  useEffect(() => {
    // Adiciona um ouvinte de evento de redimensionamento da janela do navegador.
    // Sempre que a janela é redimensionada, a função "handleWindowSizeChange" é chamada para atualizar o estado "screenWidth".
    window.addEventListener('resize', handleWindowSizeChange);

    // Retorna uma função de limpeza para remover o ouvinte de evento quando o componente é desmontado.
    // Isso é importante para evitar vazamentos de memória e melhorar o desempenho.
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []); // O array de dependências está vazio, o que significa que este efeito será executado apenas uma vez, após a montagem do componente.

  // Retorna a largura da tela atualmente armazenada no estado "screenWidth".
  return screenWidth;
};
