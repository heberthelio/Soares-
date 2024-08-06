import React from 'react';

class BuggyComponent extends React.Component {
    render() {
        throw new Error('Erro simulado!');
        return <p>teste</p>
    }
}

export default BuggyComponent;
