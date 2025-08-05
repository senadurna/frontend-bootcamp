import './Purchase.css';

const packages = [
  {
    title: 'Basic Package',
    price: '$120',
    features: ['Unlimited Gym Access', '1 Training Program', 'Free Fitness Consultation'],
    active: false,
  },
  {
    title: 'Premium Package',
    price: '$240',
    features: ['Everything in Basic', '5 Training Programs', 'Personal Trainer', 'Nutrition Guide'],
    active: true,
  },
  {
    title: 'Pro Package',
    price: '$420',
    features: ['All Premium Features', 'Unlimited Classes', 'Priority Support', 'Private Locker'],
    active: false,
  },
];

const Purchase = () => {
  return (
    <section className="purchase-section">
      <h2 className="section-title">PURCHASE FROM US</h2>
      <div className="purchase-grid">
        {packages.map((pack, index) => (
          <div className={`purchase-card ${pack.active ? 'active' : ''}`} key={index}>
            <h3>{pack.title}</h3>
            <p className="price">{pack.price}</p>
            <ul>
              {pack.features.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <button className="buy-btn">Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Purchase;
