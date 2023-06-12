import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import '../css/inputText.css';

const InputText = ({ addMessage }) => {
  const [message, setMessage] = useState('');
  const inputRef = useRef(null);

  function sendMessage() {
    if (!message) return;
    addMessage({ message });
    setMessage('');
    inputRef.current.value = ''; // Menghapus nilai input secara eksplisit
  }

  return (
    <div>
      <Form className='form-group'>
        <Form.Control
          className="input-field"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          ref={inputRef} // Menghubungkan ref ke input
          placeholder="Type your message here..."
        />
        <Button
          variant="primary"
          onClick={sendMessage}
          className="send-button"
        >
          Send
        </Button>
      </Form>
    </div>
  );
};

InputText.propTypes = {
  addMessage: PropTypes.func.isRequired,
};

export default InputText;
