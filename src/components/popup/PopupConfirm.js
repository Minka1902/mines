import PopupWithForm from './PopupWithForm';

export default function ConfirmPopup(props) {
    const { isOpen, onClose, handleSubmit, isDeleteSource } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        if (evt.type === 'submit' && evt.target.classList.contains('popup__form')) {
            if (isDeleteSource) {
                handleSubmit();
            }
        } else {
            if (evt.type === 'click' && evt.target.classList.contains('popup__button')) {
                if (evt.target.innerText !== "Don`t delete.") {
                    handleSubmit();
                } else {
                    onClose();
                }
            }
        }
    };

    return (
        <PopupWithForm onSubmit={onSubmit} isValid={true} name="confirm" title={isDeleteSource ? "Sure you want to delete?" : "You signed up successfully, please log in."} isOpen={isOpen} onClose={onClose} buttonText={isDeleteSource ? 'Yes, i am sure.' : 'Login now.'}>
            {isDeleteSource && <button className='popup__button' onClick={onSubmit}>Don`t delete.</button>}
        </PopupWithForm>
    );
}
