import React from 'react';
import Card from './Card';

const NoticesList = ({ notices }) => {
  return notices.map((notices) => {
    return <Card />;
  });
};

export default NoticesList;
