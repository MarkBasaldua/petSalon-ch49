function calculateSolarSystem() {
    const location = document.getElementById('location').value;
    const roofSize = document.getElementById('roofSize').value;
    const energyConsumption = document.getElementById('energyConsumption').value;
  
    // Simplified assumptions for calculation
    const sunHoursPerDay = 5; // Average peak sun hours per day
    const panelEfficiency = 0.18; // 18% efficiency for solar panels
    const panelSize = 1.6; // Solar panel size in square meters
    const panelCostPerWatt = 2.5; // Cost per watt for installed solar panels
  
    // Calculate required system size in kW
    const dailyConsumption = energyConsumption / 30;
    const requiredSystemSize = dailyConsumption / (sunHoursPerDay * panelEfficiency);
  
    // Calculate number of panels needed
    const panelsNeeded = Math.ceil(requiredSystemSize * 1000 / (panelEfficiency * 1000 / panelSize));
  
    // Calculate the total cost
    const totalCost = requiredSystemSize * 1000 * panelCostPerWatt;
  
    // Display results
    document.getElementById('results').innerHTML = `
      <h2>Results</h2>
      <p>Location: ${location}</p>
      <p>Roof Size: ${roofSize} sq ft</p>
      <p>Energy Consumption: ${energyConsumption} kWh/month</p>
      <p>Estimated System Size: ${requiredSystemSize.toFixed(2)} kW</p>
      <p>Number of Panels Needed: ${panelsNeeded}</p>
      <p>Total Cost: $${totalCost.toFixed(2)}</p>
    `;
  }
  