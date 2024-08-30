import React, {useState} from "react";
import {nanoid} from "nanoid";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Notice from "./components/Notice";
import Footer from "./components/Footer";
import CurrentNotice from "./components/CurrentNotice.";

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
        <li>
        <Notice
            id={notice.id}
            name={notice.name}
            completed={notice.completed}
            key={notice.id}
            toggleNoticeCompleted={toggleNoticeCompleted}
            deleteNotice={handleDeleteNotice}
            editNotice={handleEditNotice}
        />
        </li>
    ));

    function toggleNoticeCompleted(id) {
        const updatedNotices = notices.map((notice) => {
            if (id === notice.id) {
                return {...notice, completed: !notice.completed};
            }
            return notice;
        });
        setNotices(updatedNotices);
    }

    function handleDeleteNotice(id) {
        console.log(id);
        const remainingNotices = notices
            .filter((notice) => id !== notice.id)
            .filter((notice) => notice.completed !== true);
        setNotices(remainingNotices);
    }

    function handleEditNotice(id, newName) {
        const editedNoticeList = notices.map((notice) => {
            // if this task has the same ID as the edited task
            if (id === notice.id) {
                //
                return {...notice, name: newName}; //adding a new property to existing object
            }
            return notice;
        });
        setNotices(editedNoticeList);
    }

    const noticesNoun = noticeList.length !== 1 ? "notices" : "notice";
    const headingText = `${noticeList.filter((notice) => !notice.completed).length} ${noticesNoun} remaining`;

    return (
            <div className="noticeapp stack-large">
                <CurrentNotice notices={{notices}}/>
                <h1>Pending Notices</h1>

                <div className="filters btn-group stack-exception">
                    <FilterButton/>
                </div>
                <h2 className={`fw-bold text-primary  display-2 text-center`}>{headingText}</h2>
                <ul
                    className="notice-list stack-large stack-exception"
                    aria-labelledby="list-heading"
                >
                    {noticeList}
                </ul>
                <Form addNotice={addNotice}/>
                <Footer/>
            </div>
    );
}

export default App;
