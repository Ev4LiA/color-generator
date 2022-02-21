import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);

  const HandleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(name).all(10);
      setList(colors);
      setError(false);
      console.log(list);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={HandleSubmit}>
          <input
            type="text"
            placeholder="#f15025"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${error ? 'error' : null}`}
          />
          <button type="submit" className="btn" onClick={HandleSubmit}>
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((item, index) => {
          return <SingleColor key={index} {...item} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
