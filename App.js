import React, { useState } from 'react';

function App() {
  const [divida, setDivida] = useState('');
  const [juros, setJuros] = useState('');
  const [parcelas, setParcelas] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const valor = parseFloat(divida);
    const taxa = parseFloat(juros) / 100;
    const n = parseInt(parcelas);
    const parcela = (valor * taxa) / (1 - Math.pow(1 + taxa, -n));
    const total = parcela * n;
    setResultado({
      parcela: parcela.toFixed(2),
      total: total.toFixed(2),
    });
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Simulador de Dívidas - Nome Livre</h1>
      <input placeholder="Valor da dívida" type="number" value={divida} onChange={e => setDivida(e.target.value)} /><br /><br />
      <input placeholder="Taxa de juros mensal (%)" type="number" value={juros} onChange={e => setJuros(e.target.value)} /><br /><br />
      <input placeholder="Quantidade de parcelas" type="number" value={parcelas} onChange={e => setParcelas(e.target.value)} /><br /><br />
      <button onClick={calcular}>Simular</button>
      {resultado && (
        <div style={{ marginTop: 20 }}>
          <p>Valor da parcela: R$ {resultado.parcela}</p>
          <p>Total a pagar: R$ {resultado.total}</p>
        </div>
      )}
    </div>
  );
}

export default App;
