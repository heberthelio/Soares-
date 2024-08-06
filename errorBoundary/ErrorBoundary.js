import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: true };
  }

  static getDerivedStateFromError() {
    // Atualiza o estado para exibir a UI de fallback em vez do filho que falhou.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Também pode registrar o erro em um serviço de log
    console.log('Erro capturado:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Pode renderizar qualquer UI de fallback
      return <h1>Algo deu errado.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
