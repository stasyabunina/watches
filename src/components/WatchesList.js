import "../App.css";
import WatchItem from "./WatchItem";

function WatchesList({ onDeleteItem, items }) {
    return (
        <ul className="list">
            {items.map(item => (
                <WatchItem item={item} key={item.id} onDeleteItem={onDeleteItem} />
            ))}
        </ul>
    );
}

export default WatchesList;
