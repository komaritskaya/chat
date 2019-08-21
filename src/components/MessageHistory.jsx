import React from 'react';
import Typing from './Typing';
import Response from './Response';
import Message from './Message';

const MessageHistory = ({ list }) => {
  const renderMessage = item => {
    let MessageType;
    if (item.type === 'message') {
      MessageType = Message;
    } else if (item.type === 'response') {
      MessageType = Response;
    } else {
      MessageType = Typing;
    }

    return <MessageType key={item.id} from={item.from} message={item} />;
  };

  const renderArr = arr => {
    return arr.map(item => renderMessage(item));
  };
  if (list.length === 0) return null;
  return <ul>{renderArr(list)}</ul>;
};

MessageHistory.defaultProps = { list: [] };

export default MessageHistory;
