import "../App.css";
import moment from "moment-timezone";
import { useState, useEffect } from "react";

function WatchItem({ onDeleteItem, item }) {
    const [time, setTime] = useState(null);

    const { name, timezone } = item;

    useEffect(() => {
        const interval = setInterval(setIntervalTime, 1000);
        return () => clearInterval(interval);
    }, [time]);

    const setIntervalTime = () => {
        setTime(moment().tz(`Etc/GMT${timezone}`).format('HH:mm:ss'))
    }

    return (
        time === null ? <></> :
            <li className="list-item">
                <span className="list-item-name">{name}</span>
                <span className="list-item-time">{time}</span>
                <button className="list-item-btn" type="button" onClick={() => onDeleteItem(item)}>X</button>
            </li>
    );
}

export default WatchItem;
