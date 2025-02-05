// Elimina esta línea si no la necesitas
// import React from 'react'; 

import { useState } from 'react';

const SobreMi = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div>
    </div>
  );
};

export default SobreMi;
