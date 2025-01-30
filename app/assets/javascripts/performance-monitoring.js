
  // ----------------------------------
  // TIP ingestion
  // ------------------------------------

  const ctx3 = document.getElementById('cdms-chart').getContext('2d');

  // Example datasets for the respective time ranges
  const tip_datasets = {
      last7days: {
          labels: ['21/01/2025', '22/01/2025', '23/01/2025', '24/01/2025', '25/01/2025', '26/01/2025', '27/01/2025'],
          data: [350, 400, 380, 360, 370, 420, 300]
      },
      last30days: {
          labels: Array.from({ length: 30 }, (_, i) => {
              const date = new Date(2025, 0, 27 - 29 + i);
              return date.toLocaleDateString('en-GB');
          }),
          data: Array.from({ length: 30 }, () => Math.floor(Math.random() * (500 - 250 + 1)) + 250)
      },
      all: {
          labels: Array.from({ length: 366 }, (_, i) => {
              const date = new Date(2024, 0, 27 + i);
              return date.toLocaleDateString('en-GB');
          }),
          data: Array.from({ length: 365 }, () => Math.floor(Math.random() * (50000 - 25000 + 1)) + 25000)
      }
  };

  // Chart configuration
  const config = {
      type: 'line',
      data: {
          labels: tip_datasets.last7days.labels,
          datasets: [{
              label: 'Space-Track',
              data: tip_datasets.last7days.data,
              borderColor: '#12436D',
              borderWidth: 2,
              backgroundColor: '#12436D',
              tension: 0.3,
              pointStyle: 'circle',
              pointRadius: 2,
              pointBackgroundColor: '#12436D'
          }]
      },
      options: {
          responsive: true,
          scales: {
              x: {
                  title: {
                      display: false,
                  },
                  ticks: {
                    maxTicksLimit: 8,
                  }
              },
              y: {
                  title: {
                      display: true,
                      text: 'Number of TIPs ingested',
                      color: "black",
                      padding: 10,
                      font: {
                        weight: "bold",
                        size: "18px",
                        family: "GDS Transport"
                      }
                  },
                  ticks: {
                    maxTicksLimit: 8,
                  },
                  beginAtZero: true
              }
          },
          plugins: {
              legend: {
                  position: 'bottom',
                  labels: {
                    color: "black",
                    padding: -35,
                    font: {
                      family: "GDS Transport",
                      size: "12px"
                    }
                  },
                  title: {
                    text: "Tracking and Impact Prediction message (TIP) source",
                    display: true,
                    color: "black",
                    padding: 40,
                    font: {
                      weight: "bold",
                      size: "18px",
                      family: "GDS Transport"
                    }
                  }
              },

          }
      }
  };

  // ------------------------------------
  // new users bar
  // ---------------------------------------

  const user_ctx = document.getElementById('usageBar').getContext('2d');

  const user_datasets = {
    '12': {
        labels: ['01/2024', '02/2024', '03/2024', '04/2024', '05/2024', '06/2024', '07/2024', '08/2024', '09/2024', '10/2024', '11/2024', '12/2024'],
        data: {
            users: [5, 6, 5, 7, 8, 0, 6, 8, 9, 9, 6, 3],
            orgs: [1, 0, 2, 1, 3, 0, 0, 2, 3, 3, 1, 2]
        }
    },
    'all': {
        labels: ['04/2023', '05/2023', '06/2023', '07/2023', '08/2023', '09/2023', '10/2023', '11/2023', '12/2023', '01/2024', '02/2024', '03/2024', '04/2024', '05/2024', '06/2024', '07/2024', '08/2024', '09/2024', '10/2024', '11/2024', '12/2024'],
        data: {
            users: [30, 35, 40, 45, 50, 55, 60, 65, 70, 50, 60, 55, 70, 80, 75, 65, 85, 90, 95, 100, 110],
            orgs: [25, 30, 35, 40, 45, 50, 55, 60, 65, 40, 50, 45, 60, 70, 65, 55, 75, 80, 85, 90, 95]
        }
    }
  };
  let user_currentData = user_datasets['12'];

  const user_chart = new Chart(user_ctx, {
      type: 'bar',
      data: {
          labels: user_currentData.labels,
          datasets: [
              { label: 'New users', data: user_currentData.data.users, backgroundColor: '#F46A25' },
              { label: 'New organisations', data: user_currentData.data.orgs, backgroundColor: '#12436D' }
          ]
      },
      options: {
          responsive: true,
          scales: { 
            x: { 
              title: { display: false, text: 'Month' },
              ticks: {
                color: "black",
              },
            },
            y: { 
              title: { 
                display: false, 
                text: 'Number recieved',
                color: "black",
                font: {
                  size: 14,
                  weight: "bold"
                }
              } ,
              ticks: {
                color: "black",
              }
            } 
          },
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                color: "black",
                font: {
                  size: 14,
                }
              },
            }
          }
      }
  });
  function updateUserTable() {
      const tableBody = document.getElementById('user-table');
      tableBody.innerHTML = '';
      user_currentData.labels.slice().reverse().forEach((label, i) => {
          const row = `<tr class="govuk-table__row">
              <td class="govuk-table__cell">${label}</td>
              <td class="govuk-table__cell">${user_currentData.data.users[i]}</td>
              <td class="govuk-table__cell">${user_currentData.data.orgs[i]}</td>
          </tr>`;
          tableBody.innerHTML += row;
      });
  }

  updateUserTable();

  // ----------------------------------------------
  // Conjunctions type bar
  // ----------------------------------------------

  const ctb_ctx = document.getElementById('typeBar').getContext('2d');

  const ctb_datasets = {
    '12': {
        labels: ['01/2024', '02/2024', '03/2024', '04/2024', '05/2024', '06/2024', '07/2024', '08/2024', '09/2024', '10/2024', '11/2024', '12/2024'],
        data: {
            debris: [100, 121, 40, 60, 50, 55, 60, 65, 70, 92, 60, 55, 70, 80, 75, 65, 85, 90, 95, 100, 110],
            sat: [50, 60, 40, 70, 82, 75, 65, 45, 50, 55, 60, 65, 70, 70, 60, 55, 74, 90, 95, 100, 110],
            uk_sat: [25, 30, 35, 40, 45, 20, 55, 60, 32, 40, 50, 24, 10, 40, 65, 55, 75, 32, 52, 14, 33],
            obj: [50, 60, 40, 70, 82, 75, 65, 45, 50, 55, 60, 65, 70, 70, 60, 55, 74, 90, 95, 100, 110],
        }
    },    
  };
  let ctb_currentData = ctb_datasets['12'];

  const ctb_chart = new Chart(ctb_ctx, {
      type: 'bar',
      data: {
          labels: ctb_currentData.labels,
          datasets: [
              { label: 'Events with debris', data: ctb_currentData.data.debris, backgroundColor: '#12436D' },
              { label: 'Events with another satellite', data: ctb_currentData.data.sat, backgroundColor: '#F46A25' },
              { label: 'Events with two UK-licensed satellites', data: ctb_currentData.data.uk_sat, backgroundColor: '#801650' },
              { label: 'Events with other objects', data: ctb_currentData.data.obj, backgroundColor: '#A285D1' }
          ]
      },
      options: {
          responsive: true,
          scales: { 
            x: { 
              stacked: true,
              title: { display: false, text: 'Month' },
              ticks: {
                color: "black",
              },
            },
            y: { 
              stacked: true,
              title: { 
                display: false, 
                text: 'Number recieved',
                color: "black",
                font: {
                  size: 14,
                  weight: "bold"
                }
              } ,
              ticks: {
                color: "black",
              }
            } 
          },
          plugins: {
            legend: {
              position: 'bottom',
              padding: 10,
              title: {
                text: "Number of events with",
                display: false,
                color: "black",
                padding: 10,
                font: {
                  size: 18,
                  weight: "bold",
                },
              },
              labels: {
                color: "black",
                padding: 20,
                font: {
                  size: 14,
                }
              },
            }
          }
      }
  });
  function updateCtbTable() {
      const tableBody = document.getElementById('ctb-table');
      tableBody.innerHTML = '';
      ctb_currentData.labels.slice().reverse().forEach((label, i) => {
          total = ctb_currentData.data.debris[i] + ctb_currentData.data.sat[i] + ctb_currentData.data.uk_sat[i] + ctb_currentData.data.obj[i];
          const row = `<tr class="govuk-table__row">
              <td class="govuk-table__cell">${label}</td>
              <td class="govuk-table__cell">${ctb_currentData.data.debris[i]}</td>
              <td class="govuk-table__cell">${ctb_currentData.data.sat[i]}</td>
              <td class="govuk-table__cell">${ctb_currentData.data.uk_sat[i]}</td>
              <td class="govuk-table__cell">${ctb_currentData.data.obj[i]}</td>
              <td class="govuk-table__cell govuk-body-s">${total}</td>
            </tr>`;
          tableBody.innerHTML += row;
      });
  }

  updateCtbTable();

  // ----------------------------------------------
  // PoC bar
  // ----------------------------------------------

  const poc_ctx = document.getElementById('pocBar').getContext('2d');

  const poc_datasets = {
    '12': {
        labels: ['01/2024', '02/2024', '03/2024', '04/2024', '05/2024', '06/2024', '07/2024', '08/2024', '09/2024', '10/2024', '11/2024', '12/2024'],
        data: {
            small: [100, 121, 40, 60, 50, 55, 60, 65, 70, 92, 60, 55, 70, 80, 75, 65, 85, 90, 95, 100, 110],
            med: [50, 60, 40, 70, 82, 75, 65, 45, 50, 55, 60, 65, 70, 70, 60, 55, 74, 90, 95, 100, 110],
            big: [25, 30, 35, 40, 45, 20, 55, 60, 32, 40, 50, 24, 10, 40, 65, 55, 75, 32, 52, 14, 33]
        }
    },    
  };
  let poc_currentData = poc_datasets['12'];

  const poc_chart = new Chart(poc_ctx, {
      type: 'bar',
      data: {
          labels: poc_currentData.labels,
          datasets: [
              { label: 'PoC < 1e-5    ', data: poc_currentData.data.small, backgroundColor: '#12436D' },
              { label: '1e-5 < PoC < 1e-3    ', data: poc_currentData.data.med, backgroundColor: '#2073BC' },
              { label: 'PoC > 1e-3    ', data: poc_currentData.data.big, backgroundColor: '#6BACE6' }
          ]
      },
      options: {
          responsive: true,
          scales: { 
            x: { 
              stacked: true,
              title: { display: false, text: 'Month' },
              ticks: {
                color: "black",
              },
            },
            y: { 
              stacked: true,
              title: { 
                display: false, 
                text: 'Number recieved',
                color: "black",
                font: {
                  size: 14,
                  weight: "bold"
                }
              } ,
              ticks: {
                color: "black",
              }
            } 
          },
          plugins: {
            legend: {
              position: 'bottom',
              padding: 10,
              title: {
                text: "Number of events with",
                display: true,
                color: "black",
                padding: 10,
                font: {
                  size: 18,
                  weight: "bold",
                },
              },
              labels: {
                color: "black",
                padding: -5,
                font: {
                  size: 14,
                }
              },
            }
          }
      }
  });
  function updatePocTable() {
      const tableBody = document.getElementById('poc-table');
      tableBody.innerHTML = '';
      poc_currentData.labels.slice().reverse().forEach((label, i) => {
        total = poc_currentData.data.small[i] + poc_currentData.data.med[i] + poc_currentData.data.big[i];
          const row = `<tr class="govuk-table__row">
              <td class="govuk-table__cell">${label}</td>
              <td class="govuk-table__cell">${poc_currentData.data.small[i]}</td>
              <td class="govuk-table__cell">${poc_currentData.data.med[i]}</td>
              <td class="govuk-table__cell">${poc_currentData.data.big[i]}</td>
              <td class="govuk-table__cell">${total}</td>
          </tr>`;
          tableBody.innerHTML += row;
      });
  }

  updatePocTable();


  // ------------------------------------
  // Analysis and MTP bar
  // ---------------------------------------

  const ctx4 = document.getElementById('analysisBar').getContext('2d');

  const datasets3 = {
    '12': {
        labels: ['01/2024', '02/2024', '03/2024', '04/2024', '05/2024', '06/2024', '07/2024', '08/2024', '09/2024', '10/2024', '11/2024', '12/2024'],
        data: {
            analyses: [50, 60, 55, 70, 80, 75, 65, 85, 90, 95, 100, 110],
            manoeuvres: [40, 50, 45, 60, 70, 65, 55, 75, 80, 85, 90, 95]
        }
    },
    'all': {
        labels: ['04/2023', '05/2023', '06/2023', '07/2023', '08/2023', '09/2023', '10/2023', '11/2023', '12/2023', '01/2024', '02/2024', '03/2024', '04/2024', '05/2024', '06/2024', '07/2024', '08/2024', '09/2024', '10/2024', '11/2024', '12/2024'],
        data: {
            analyses: [30, 35, 40, 45, 50, 55, 60, 65, 70, 50, 60, 55, 70, 80, 75, 65, 85, 90, 95, 100, 110],
            manoeuvres: [25, 30, 35, 40, 45, 50, 55, 60, 65, 40, 50, 45, 60, 70, 65, 55, 75, 80, 85, 90, 95]
        }
    }
  };
  let currentData = datasets3['12'];

  const chart = new Chart(ctx4, {
      type: 'bar',
      data: {
          labels: currentData.labels,
          datasets: [
              { label: 'Analyses Received         ', data: currentData.data.analyses, backgroundColor: '#F46A25' },
              { label: 'Manoeuvre Support Plots Received', data: currentData.data.manoeuvres, backgroundColor: '#12436D' }
          ]
      },
      options: {
          responsive: true,
          scales: { 
            x: { 
              title: { display: false, text: 'Month' },
              ticks: {
                color: "black",
              },
            },
            y: { 
              title: { 
                display: true, 
                text: 'Number recieved',
                color: "black",
                font: {
                  size: 14,
                  weight: "bold"
                }
              } ,
              ticks: {
                color: "black",
              }
            } 
          },
          plugins: {
            legend: {
            position: 'bottom',
            labels: {
              color: "black",
              padding: -20,
              font: {
                size: 14,
              }
            },
            title: {
              text: "File type",
              padding: 25,
              display: true,
              color: "black",
              font: {
                weight: "bold",
                size: 18
              }
            }
          }
        }
      }
  });
  function updateAnalysisTable() {
      const tableBody = document.getElementById('analysis-table');
      tableBody.innerHTML = '';
      console.log(currentData)
      currentData.labels.forEach((label, i) => {
          const row = `<tr class="govuk-table__row">
              <td class="govuk-table__cell">${label}</td>
              <td class="govuk-table__cell">${currentData.data.analyses[i]}</td>
              <td class="govuk-table__cell">${currentData.data.manoeuvres[i]}</td>
          </tr>`;
          tableBody.innerHTML += row;
      });
  }

  updateAnalysisTable();

  const myChart3 = new Chart(ctx3, config);

  // Event listener to update chart based on selected radio button
  document.querySelectorAll('input[name="dateRange"]').forEach((radio) => {
      radio.addEventListener('change', (event) => {
          const selectedRange = event.target.value;
          myChart3.data.labels = tip_datasets[selectedRange].labels;
          myChart3.data.datasets[0].data = tip_datasets[selectedRange].data;
          myChart3.update();
      });
  });

  //
  // Re-entry events by type pie
  //

  const ctx = document.getElementById('re-entry-type').getContext('2d');

  // Dataset for each time range
  const datasets = {
      upcoming: [3, 1, 2, 1],    // Example data for "Upcoming events"
      last7days: [15, 0, 6, 1],   // Example data for "Last 7 days"
      last1month: [47, 2, 18, 1], // Example data for "Last 1 month"
      last6months: [253, 10, 157, 17],// Example data for "Last 6 months"
      event: [15, 0, 6, 1],
      alert: [2, 0, 2, 1],
  };

  const categories = ['Payload', 'Debris', 'Rocket body', 'Unknown'];

  // Chart initial data setup (default: upcoming)
  const chartData = {
      labels: categories,
      datasets: [{
          data: datasets.upcoming,
          backgroundColor: ['#F46A25', '#12436D', '#A285D1', '#801650'],
          borderColor: ['#ffffff'],
          borderWidth: 2,
      }]
  };

  // Chart.js configuration
  const myChart = new Chart(ctx, {
      type: 'pie',
      data: chartData,
      options: {
          responsive: false,
          plugins: {
              legend: {
                  position: 'left',
                  labels: {
                    color: "black",
                    font: {
                      size: 14,
                    }
                  },
                  title: {
                    text: "Object type",
                    display: true,
                    color: "black",
                    position: "start",
                    font: {
                      weight: "bold",
                      size: 14
                    }
                  }
              },
              tooltip: {
                  callbacks: {
                      label: function (context) {
                          let label = context.label || '';
                          if (label) {
                              label += ': ';
                          }
                          if (context.parsed !== null) {
                              label += context.parsed;
                          }
                          return label;
                      }
                  }
              }
          }
      }
  });

  // Update table data
  function updateTable(data) {
      const tbody = document.getElementById('data-table').querySelector('tbody');
      tbody.innerHTML = ''; // Clear existing rows
      total = 0;
      data.forEach((value, index) => {
          const row = document.createElement('tr');
          row.className = "govuk-table__row";
          row.innerHTML = `
              <td class="govuk-table__cell govuk-body-s">${categories[index]}</td>
              <td class="govuk-table__cell govuk-body-s">${value}</td>
          `;
          tbody.appendChild(row);
          total = total + value;
      });
      const row = document.createElement('tr');
      row.className = "govuk-table__row";
      row.innerHTML = `
          <td class="govuk-table__cell govuk-body-s">Total</td>
          <td class="govuk-table__cell govuk-body-s">${total}</td>
      `;
      tbody.appendChild(row);
  }

  // Event listener for radio buttons
  document.querySelectorAll('input[name="timeRange"]').forEach((radio) => {
      radio.addEventListener('change', (event) => {
          const selectedRange = event.target.value;
          const selectedData = datasets[selectedRange];
          myChart.data.datasets[0].data = selectedData; // Update chart data
          myChart.update(); // Refresh the chart
          updateTable(selectedData); // Update table
      });
  });
  document.querySelectorAll('input[name="eventLevel"]').forEach((radio) => {
      radio.addEventListener('change', (event) => {
          const selectedRange = event.target.value;
          const selectedData = datasets[selectedRange];
          myChart.data.datasets[0].data = selectedData; // Update chart data
          myChart.update(); // Refresh the chart
          updateTable(selectedData); // Update table
      });
  });


  // Initial table update
  updateTable(datasets.last7days);

