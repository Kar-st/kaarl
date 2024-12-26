import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Section id="causes" title="Causas Principales">
          <ul>
            <li>Quema de combustibles fósiles (industria, transporte).</li>
            <li>Deforestación y cambios en el uso del suelo.</li>
            <li>Producción agrícola y ganadera.</li>
          </ul>
        </Section>

        <Section id="ghg-chart" title="Emisiones Globales de Gases de Efecto Invernadero">
          <canvas id="emissionsChart"></canvas>
        </Section>

        <Section id="effects" title="Efectos del Cambio Climático">
          <div className="grid">
            <div className="card">
              <h3>Aumento de Temperaturas</h3>
              <p>
                El incremento de las emisiones ha elevado la temperatura global promedio en 1.1°C desde la era preindustrial.
              </p>
            </div>
            <div className="card">
              <h3>Derretimiento de Glaciares</h3>
              <p>La pérdida de hielo en el Ártico y en glaciares aumenta el nivel del mar.</p>
            </div>
            <div className="card">
              <h3>Eventos Climáticos Extremos</h3>
              <p>Huracanes más fuertes, sequías prolongadas y olas de calor extremas.</p>
            </div>
          </div>
        </Section>

        <Section id="solutions" title="Soluciones">
          <p>Actuar ahora puede frenar el impacto:</p>
          <ul>
            <li>Transición a energías renovables.</li>
            <li>Reforestación masiva.</li>
            <li>Reducción del consumo de carne y productos animales.</li>
          </ul>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default App;
