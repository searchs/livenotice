import { useEffect, useState } from 'react';

const CurrentNotice = ({ noticesList = [] }) => {
    const [current, setCurrent] = useState(null);

    useEffect(() => {
        // Filter notices to include only those that are not completed
        const notices = noticesList.filter((notice) => !notice.completed);

        // Update current notice based on the filtered list
        if (notices.length === 0) {
            setCurrent(null);
        } else {
            setCurrent(notices[0]);
        }
    }, [noticesList]);

    return (
        <div>
            <p className="display-4 text-center p-3 mb-3">
                {current ? current.id : 'No current notice'} {/* Safely handle null/undefined */}
            </p>
        </div>
    );
};

export default CurrentNotice;
