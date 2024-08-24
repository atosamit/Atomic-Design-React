import React, { useState } from 'react';
import Modal from './Modal';

export default {
  title: 'Modal',
  component: Modal,
};

export const Default = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <button onClick={handleOpen}>Open Modal</button>
      <Modal
        show={showModal}
        onClose={handleClose}
        title="Modal Title"
        content="This is the modal content."
      />
    </div>
  );
};

export const WithBulletPoints = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <button onClick={handleOpen}>Open Bullet Points Modal</button>
      <Modal
        show={showModal}
        onClose={handleClose}
        title="Bullet Points"
        content={['Point 1', 'Point 2', 'Point 3']}
        variant="bullet"
      />
    </div>
  );
};

export const WithNumberedPoints = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <button onClick={handleOpen}>Open Numbered Points Modal</button>
      <Modal
        show={showModal}
        onClose={handleClose}
        title="Numbered Points"
        content={['Point 1', 'Point 2', 'Point 3']}
        variant="number"
      />
    </div>
  );
};

export const WithTitleAndDescription = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <button onClick={handleOpen}>Open Title and Description Modal</button>
      <Modal
        show={showModal}
        onClose={handleClose}
        title="Title and Description"
        content={[
          { title: 'Title 1', description: 'This is description 1.' },
          { title: 'Title 2', description: 'This is description 2.' },
        ]}
        variant="description"
      />
    </div>
  );
};
