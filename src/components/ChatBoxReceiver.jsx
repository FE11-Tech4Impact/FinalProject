import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Image } from 'antd';
import "../css/chatboxreceiver.css";


const ChatBoxReceiver = ({ avatar, message }) => {
  return (
    <div className='chatbox'>
      {/* <Avatar
        size={50}
        src={
          <Image
            src={avatar}
            style={{
              objectFit: 'cover',
              width: 45,
              height: 45,
              borderRadius: '100%',
            }}
            preview={false}
          />
        }
      /> */}
      <p className='chat-penerima'>
        {message}
      </p>
    </div>
  );
};

ChatBoxReceiver.propTypes = {
  avatar: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ChatBoxReceiver;