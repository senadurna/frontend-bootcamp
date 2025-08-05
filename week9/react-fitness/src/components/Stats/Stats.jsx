import './Stats.css';

const StatBox = ({ number, label }) => (
  <div className="stat-box">
    <h3>{number}</h3>
    <p>{label}</p>
  </div>
);

const Stats = () => {
  return (
    <section className="stats-section">
      <StatBox number="325" label="Course" />
      <StatBox number="405" label="Work Out" />
      <StatBox number="305" label="Working Hour" />
      <StatBox number="705" label="Happy Client" />
    </section>
  );
};

export default Stats;
