import './BMI.css';
import { useState } from 'react';

const BMI = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = () => {
    if (!weight || !height) return;

    const h = height / 100;
    const result = weight / (h * h);
    setBmi(result.toFixed(1));

    if (result < 18.5) setStatus('Underweight');
    else if (result < 25) setStatus('Normal');
    else if (result < 30) setStatus('Overweight');
    else setStatus('Obese');
  };

  return (
    <section className="bmi-section">
      <div className="bmi-content">
        <h2>Let's Calculate your BMI</h2>
        <p>Enter your height and weight to calculate your Body Mass Index</p>

        <div className="bmi-inputs">
          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <button onClick={calculateBMI}>Calculate</button>
        </div>

        {bmi && (
          <div className="bmi-result">
            <h3>Your BMI is {bmi}</h3>
            <p>Status: {status}</p>
          </div>
        )}
      </div>
      <div className="bmi-image">
        <img src="/images/bmi-index.jpg" alt="BMI" />
      </div>
    </section>
  );
};

export default BMI;
