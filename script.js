document.addEventListener('DOMContentLoaded', () => {
    try {
      const ctx = document.getElementById('emissionsChart').getContext('2d');
  
      const data = {
        labels: ['Energía', 'Transporte', 'Agricultura', 'Industria', 'Desechos', 'Otros'],
        datasets: [{
          label: 'Emisiones de CO₂ (Gigatoneladas)',
          data: [36.2, 8.4, 5.8, 6.4, 3.2, 1.8],
          backgroundColor: [
            'rgba(75, 192, 192, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(201, 203, 207, 0.6)'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(201, 203, 207, 1)'
          ],
          borderWidth: 1
        }]
      };
  
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Distribución de Emisiones por Sector'
          }
        },
        onClick: (event, activeElements) => {
          if (activeElements.length > 0) {
            const index = activeElements[0].index;
            const sector = data.labels[index];
            const value = data.datasets[0].data[index];
            alert(`Has seleccionado el sector: ${sector} con ${value} Gigatoneladas de CO₂.`);
          }
        }
      };
  
      new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
      });
    } catch (error) {
      console.error('Error al cargar el gráfico:', error);
    }
  });
  