import './Trainers.css';

const trainers = [
  {
    name: 'James Watt',
    title: 'Gym Trainer',
    image: '/images/trainer1.jpg',
  },
  {
    name: 'John Wick',
    title: 'Yoga Trainer',
    image: '/images/trainer2.jpg',
  },
  {
    name: 'Harry Potter',
    title: 'Cardio Trainer',
    image: '/images/trainer3.jpg',
  },
];

const Trainers = () => {
  return (
    <section className="trainers-section">
      <h2 className="section-title">OUR BEST TRAINERS</h2>
      <div className="trainers-grid">
        {trainers.map((trainer, index) => (
          <div className="trainer-card" key={index}>
            <div className="trainer-image">
              <img src={trainer.image} alt={trainer.name} />
              <div className="trainer-overlay">
                <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <h3>{trainer.name}</h3>
            <p>{trainer.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trainers;
