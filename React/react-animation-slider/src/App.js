import React, { useState } from 'react';

const person = [
  {
    id: 0,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 1,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 2,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 3,
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
];

const App = () => {
  const [persons, setPersons] = useState(person);
  const [curentPerson, setCurrentPerson] = useState(person[0]);
  const [animation, setAnimation] = useState(false);

  const handleRight = () => {
    if (curentPerson.id === persons.length - 1) {
      setCurrentPerson(persons[0]);
    } else {
      setCurrentPerson(persons[curentPerson.id + 1]);
    }
  };
  const handleLeft = () => {
    if (curentPerson.id === 0) {
      setCurrentPerson(persons[persons.length - 1]);
    } else {
      setCurrentPerson(persons[curentPerson.id - 1]);
    }
  };

  const randomPerson = () => {
    const random = Math.floor(Math.random() * persons.length);
    setCurrentPerson(persons[random]);
  };

  return (
    <div className="container">
      <p
        className={animation ? 'swipe-left' : ''}
        onAnimationEnd={() => setAnimation(false)}
      >
        {curentPerson.name}
      </p>

      <p
        className={animation ? 'swipe-right' : ''}
        onAnimationEnd={() => setAnimation(false)}
      >
        {curentPerson.number}
      </p>

      <div>
        <button
          onClick={() => {
            handleLeft();
            setAnimation(true);
          }}
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <button
          onClick={() => {
            handleRight();
            setAnimation(true);
          }}
        >
          <i className="fas fa-arrow-right"></i>
        </button>
        <button
          onClick={() => {
            randomPerson();
            setAnimation(true);
          }}
        >
          <i className="fas fa-random"></i>
        </button>
      </div>
    </div>
  );
};

export default App;
