import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [set, setinput] = useState({ name1: '', name2: '' });
  const [fl, setfl] = useState('');

  function chan(event) {
    const { value, name } = event.target;
    setinput((values) => ({ ...values, [name]: value }));
  }

  function handle() {
    const a = set.name1;
    const b = set.name2;
    const p = a.replaceAll(' ', '').toLowerCase();
    const q = b.replaceAll(' ', '').toLowerCase();
    let p1 = p.split('');
    let q1 = q.split('');
    let count = 0;

    for (let i = 0; i < p1.length; i++) {
      for (let j = 0; j < q1.length; j++) {
        if (p1[i] === q1[j] && p1[i] !== ' ' && q1[j] !== ' ') {
          p1[i] = ' ';
          q1[j] = ' ';
          break;
        }
      }
    }

    for (const v of p1) {
      if (v !== ' ') {
        count = count + 1;
      }
    }

    for (const v of q1) {
      if (v !== ' ') {
        count = count + 1;
      }
    }

    let flames = 'FLAMES';
    let idxToRemove = (count - 1) % flames.length;

    while (flames.length > 1) {
      flames = flames.slice(0, idxToRemove) + flames.slice(idxToRemove + 1);
      idxToRemove = (idxToRemove + (count - 1)) % flames.length;
    }

    switch (flames) {
      case 'F':
        setfl('The relationship is Friends');
        break;
      case 'L':
        setfl('The relationship is Love');
        break;
      case 'A':
        setfl('The relationship is Affection');
        break;
      case 'M':
        setfl('The relationship is Marriage');
        break;
      case 'E':
        setfl('The relationship is Enemy');
        break;
      case 'S':
        setfl('The relationship is Sister');
        break;
      default:
        setfl('You entered a wrong one');
        break;
    }
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <h1
        style={{ margin: '0% 0%', position: 'relative', left: '45%' }}
        className="gfg1"
      >
        Flames
      </h1>

      <div className="o">
        <div className="heart"></div>
        <input
          type="text"
          name="name1"
          placeholder="Enter your name"
          onChange={chan}
        />
      </div>

      <div className="o">
        <div className="heart"></div>
        <input
          type="text"
          name="name2"
          placeholder="Enter your partner name"
          onChange={chan}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'start' }}>
        <button
          style={{
            position: 'relative',
            left: '40%',
            border: '2px solid yellow',
            color: 'red',
            padding: '20px',
            width: '110px',
            height: '50px',
            backgroundColor: 'grey',
          }}
          onClick={handle}
        >
          <span style={{ fontSize: '20px' }}>
            <abbr title="Check">Check</abbr>
          </span>
        </button>
        <button
          onClick={refreshPage}
          style={{
            backgroundColor: 'rgb(181, 255, 218)',
            position: 'relative',
            left: '50%',
            padding: '20px',
            width: '110px',
            height: '50px',
          }}
        >
          <abbr title="Refresh">
            <span style={{ color: 'rgb(25, 27, 29)' }}>
              <b>Refresh</b>
            </span>
          </abbr>
        </button>
      </div>
      <div></div>
      <div
        className="box1"
        style={{
          position: 'absolute',
          margin: '20px',
          width: '100%',
          height: '80px',
          backgroundColor: 'rgb(255, 199, 199)',
        }}
      >
        <h2
          style={{
            position: 'relative',
            top: '-20%',
            textAlign: 'center',
            color: 'rgb(87, 187, 182)',
          }}
        >
          {fl}
        </h2>
      </div>
    </div>
  );
}
