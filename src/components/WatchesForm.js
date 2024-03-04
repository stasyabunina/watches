import "../App.css";

function WatchesForm({ formData, onValueChange, onSubmit }) {
    return (
        <form className="form" onSubmit={onSubmit}>
            <label className="label">
                <span className="label-name">Название</span>
                <input className="input" type="text" name="name" value={formData.name} onChange={onValueChange} />
            </label>
            <label className="label">
                <span className="label-name">Временная зона</span>
                <input className="input" type="text" name="timezone" value={formData.timezone} onChange={onValueChange} />
            </label>
            <button className="submit">Добавить</button>
        </form>
    );
}

export default WatchesForm;
