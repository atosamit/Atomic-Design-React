import React, { useState } from 'react';
import Modal from './stories/components/Modal/Modal';
import './App.css';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="App">
      <h1>Welcome to My App</h1>
      <button onClick={handleOpen}>Open Modal</button>
      
      <Modal
        show={showModal}
        onClose={handleClose}
        title="My Modal"
        content={[
          { title: 'Title 1', description: 'This is description 1.' },
          { title: 'Title 2', description: 'This is description 2.' },
        ]}
        variant="description"
      />
    </div>
  );
};

export default App;
