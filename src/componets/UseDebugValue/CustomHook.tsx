import { useDebugValue, useState } from "react";

function useMyFriendStatus(friendID: string) {
    const date=new Date();
    const [isOnline, setIsOnline] = useState(null);
    useDebugValue(isOnline ? 'Online' : 'Offline');
    useDebugValue(date, date => date.toDateString());

    return isOnline;
}

export default useMyFriendStatus;