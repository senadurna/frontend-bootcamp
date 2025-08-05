import './Reviews.css';

const reviews = [
  {
    name: 'Emily Clark',
    role: 'Fitness Enthusiast',
    text: 'This gym completely changed my life. The trainers are incredibly supportive and the programs are so effective!',
    image: '/images/review1.jpeg',
  },
  {
    name: 'Michael Scott',
    role: 'Beginner',
    text: 'As a beginner, I was intimidated, but the team here made me feel right at home. Highly recommended!',
    image: '/images/review2.jpg',
  },
  {
    name: 'Sarah Johnson',
    role: 'Yoga Lover',
    text: 'I love the yoga classes here! Such a peaceful and welcoming environment.',
    image: '/images/review3.jpeg',
  },
];

const Reviews = () => {
  return (
    <section className="reviews-section">
      <h2 className="section-title">WHAT OUR CLIENTS SAY</h2>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img src={review.image} alt={review.name} />
            <p className="review-text">"{review.text}"</p>
            <h4>{review.name}</h4>
            <span>{review.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
