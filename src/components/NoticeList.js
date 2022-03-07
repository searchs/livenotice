import React from 'react';
import Card from './Card';

const NoticeList = ({ notices }) => {
  return notices.map((notice, idx) => {
    return (
      <Card
        key={idx}
        id={notices[idx].id}
        title={notices[idx].title}
        completed={notices[idx].completed ? 'false' : 'true'}
        userId={notices[idx].userId}
      />
    );
  });
};

export default NoticeList;
