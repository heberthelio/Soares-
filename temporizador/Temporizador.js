import React, { useState, useEffect } from 'react';

function Temporizador() {
  const [tempo, setTempo] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTempo((prevTempo) => prevTempo + 1);
    }, 1000);

    // Função de limpeza
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <p>Tempo: {tempo} segundos</p>
    </div>
  );
}

export default Temporizador;
