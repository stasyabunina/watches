import "../App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import WatchesForm from "./WatchesForm";
import WatchesList from "./WatchesList";

function Watches() {
    const [watches, setWatches] = useState([{ id: uuidv4(), name: "Гринвич", timezone: "+0" }]);
    const [form, setForm] = useState({
        id: uuidv4(),
        name: "",
        timezone: "",
    });
    const [timeError, setTimeError] = useState(false);
    const [emptyError, setEmptyError] = useState(false);

    const onValueChange = (e) => {
        setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
    }

    const isTimezoneValid = (timezone) => {
        if (/^[+-]([0-9]?[0-2]?)$/.test(timezone)) {
            return true;
        }
        return false;
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.name === "" || form.timezone === "") {
            setEmptyError(true);
            return;
        }

        if (isTimezoneValid(form.timezone) === false) {
            setTimeError(true);
            return;
        }

        setWatches([...watches, form]);

        setForm({
            id: uuidv4(),
            name: "",
            timezone: "",
        });
        setEmptyError(false);
        setTimeError(false);
    }

    const onDeleteItem = (watch) => {
        setWatches((prevWatches) => prevWatches.filter(prevWatch => prevWatch.id !== watch.id));
    }

    return (
        <div className="container">
            <WatchesForm onSubmit={onSubmit} formData={form} onValueChange={onValueChange} />
            {timeError ? <span className="error">Зона должна совпадать формату +/-ЧЧ</span> : emptyError ? <span className="error">Поля не должны быть пустыми</span> : <></>}
            {watches.length === 0 ? <></> : <WatchesList items={watches} onDeleteItem={onDeleteItem}/>}
        </div>
    );
}

export default Watches;
