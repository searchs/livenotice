import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import Card from './components/Card';
import NoticeCard from './components/NoticeCard';
import Footer from './components/Footer';

function App(props) {
  const [notices, setNotices] = useState(props.notices);

  function addNotice(name) {
    const newNotice = {
      id: 'notice-' + nanoid(),
      name: name,
      completed: false
    };
    setNotices([...notices, newNotice]);
  }

  const noticeList = notices.map((notice) => (
    <Card
      id={notice.id}
      name={notice.name}
      completed={notice.completed}
      key={notice.id}
      toggleNoticeCompleted={toggleNoticeCompleted}
      deleteNotice={deleteNotice}
      editNotice={editNotice}
    />
  ));

  function toggleNoticeCompleted(id) {
    const updatedNotices = notices.map((notice) => {
      if (id === notice.id) {
        return { ...notice, completed: !notice.completed };
      }
      return notice;
    });
    setNotices(updatedNotices);
  }

  function deleteNotice(id) {
    console.log(id);
    const remainingNotices = notices
      .filter((notice) => id !== notice.id)
      .filter((notice) => notice.completed !== true);
    setNotices(remainingNotices);
  }

  function editNotice(id, newName) {
    const editedNoticeList = notices.map((notice) => {
      // if this task has the same ID as the edited task
      if (id === notice.id) {
        //
        return { ...notice, name: newName }; //adding a new property to existing object
      }
      return notice;
    });
    setNotices(editedNoticeList);
  }

  const noticesNoun = noticeList.length !== 1 ? 'notices' : 'notice';
  const headingText = `${noticeList.length} ${noticesNoun} remaining`;

  return (
    <div className='noticeapp stack-large'>
      <h1>Live Notices</h1>
      <Form addNotice={addNotice} />
      <div className='filters btn-group stack-exception'>
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id='list-heading' className='f2 light-purple'>
        {headingText}
      </h2>
      <ul
        role='list'
        className='notice-list stack-large stack-exception'
        aria-labelledby='list-heading'
      >
        {noticeList}
      </ul>
      <Footer />
    </div>
  );
}

export default App;
