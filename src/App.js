import React, { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Notice from "./components/Notice";

function App(props) {
  const [notices, setNotices] = useState(props.notices);

  function addNotice(name) {
    const newNotice = {
      id: "notice-" + nanoid(),
      name: name,
      completed: false
    };
    setNotices([...notices, newNotice]);
  }

  const noticeList = notices.map((notice) => (
    <Notice
      id={notice.id}
      name={notice.name}
      completed={notice.completed}
      key={notice.id}
      toggleNoticeCompleted={toggleNoticeCompleted}
      deleteNotice={deleteNotice}
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
  }

  const noticesNoun = noticeList.length !== 1 ? "notices" : "notice";
  const headingText = `${noticeList.length} ${noticesNoun} remaining`;

  return (
    <div className="noticeapp stack-large">
      <h1>Live Notices</h1>
      <Form addNotice={addNotice} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="notice-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {noticeList}
      </ul>
    </div>
  );
}

export default App;
