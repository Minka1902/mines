import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function PopupSettings({ isOpen, handleSubmit, onClose }) {
    const currentUser = React.useContext(CurrentUserContext);
    const [difficulty, setDifficulty] = React.useState('easy');

    const changeDifficulty = (evt) => {
        evt.preventDefault();
        if (evt.target.selectedOptions[0]) {
            setDifficulty(evt.target.selectedOptions[0].value);
        }
    };

    const saveSettings = (evt) => {
        evt.preventDefault();
        if (evt.type === 'click' || evt.type === 'submit') {
            const newSettings = { difficulty };
            handleSubmit(newSettings);
        }
    };

    return (
        <PopupWithForm onSubmit={saveSettings} name="settings" title="Settings" isOpen={isOpen} onClose={onClose} buttonText='Save' isValid={true}>
            <label className="popup__setting">
                Difficulty:
                <select className="popup__settings-select" onChange={changeDifficulty} value={difficulty}>
                    <option id='easy'>easy</option>
                    <option id='hard'>hard</option>
                    <option id='expert'>expert</option>
                </select>
            </label>
        </PopupWithForm>
    );
};
