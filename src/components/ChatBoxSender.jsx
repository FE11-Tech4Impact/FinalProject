import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Image } from 'antd';
import "../css/chatboxsender.css";


const ChatBoxSender = ({ avatar, user, message }) => {
  return (
    <div className='chatbox-sender'>
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
      <p className='pesan'>
       
        {message}
      </p>
    </div>
  );
};

ChatBoxSender.propTypes = {
  avatar: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ChatBoxSender;
