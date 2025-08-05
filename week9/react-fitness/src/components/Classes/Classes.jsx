import './Classes.css';
import { useState } from 'react';

const classData = {
  yoga: {
    title: 'Why are your Yoga?',
    image: '/images/yoga.jpg',
    schedule: [
      'Saturday–Sunday: 8:00am – 10:00am',
      'Monday–Tuesday: 10:00am – 12:00pm',
      'Wednesday–Friday: 3:00pm – 6:00pm',
    ],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit...',
  },
  group: {
    title: 'Group Classes',
    image: '/images/group.jpg',
    schedule: [
      'Weekdays: 6:00pm – 8:00pm',
      'Saturday: 10:00am – 12:00pm',
    ],
    description: 'Group training with friends boosts motivation and energy.',
  },
  solo: {
    title: 'Solo Training',
    image: '/images/solo.jpg',
    schedule: ['Flexible Schedule – Anytime Access'],
    description: 'Personalized 1-on-1 training with a professional coach.',
  },
  stretch: {
    title: 'Stretching Session',
    image: '/images/stret.jpg',
    schedule: ['Everyday: 7:00am – 8:00am'],
    description: 'Improve flexibility and reduce injury risk with daily stretching.',
  },
};

const Classes = () => {
  const [activeClass, setActiveClass] = useState('yoga');

  const { title, image, description, schedule } = classData[activeClass];

  return (
    <section id="classes" className="section-light">
      <h2 className="section-title">OUR CLASSES</h2>
      <div className="section-desc">
        Lorem Ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College.
      </div>

      <div className="class-buttons">
        {Object.keys(classData).map((key) => (
          <button
            key={key}
            className={key === activeClass ? 'active' : ''}
            onClick={() => setActiveClass(key)}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      <div className="class-container">
        <div className="class-text">
          <h3>{title}</h3>
          <p>{description}</p>
          <ul>
            {schedule.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="class-image">
          <img src={image} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default Classes;
