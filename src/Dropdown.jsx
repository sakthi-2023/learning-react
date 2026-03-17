import React, { useState } from "react";

function Dropdown() {
  const data = {
    India: {
      TamilNadu: ["Chennai", "Madurai"],
      Karnataka: ["Bangalore", "Mysore"]
    },
    USA: {
      California: ["Los Angeles", "San Francisco"],
      Texas: ["Houston", "Dallas"]
    }
  };

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Country → State → City Dropdown</h2>

      
      <select
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
          setState("");
          setCity("");
        }}
      >
        <option value="">Select Country</option>
        {Object.keys(data).map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select
        value={state}
        onChange={(e) => {
          setState(e.target.value);
          setCity("");
        }}
       
      >
        <option value="">Select State</option>
        {country &&
          Object.keys(data[country]).map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
      </select>

      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        
      >
        <option value="">Select City</option>
        {state &&
          data[country][state].map((ct) => (
            <option key={ct} value={ct}>
              {ct}
            </option>
          ))}
      </select>

      <br /><br />

      {city && (
        <h3>
          Selected: {country} → {state} → {city}
        </h3>
      )}
    </div>
  );
}

export default Dropdown;
