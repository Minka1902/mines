import React from 'react';
import { useHistory } from 'react-router-dom';

export default function NavBar(props) {
    const { buttons, isLoggedIn } = props;
    const history = useHistory();
    const [buttonCheckedName, setButtonCheckedName] = React.useState('Home');

    const determineIsAllowed = (button) => {
        if (isLoggedIn) {
            return true;
        } else {
            if (button.isAllowed) {
                return true;
            }
        }
        return false;
    };

    const buttonClick = (button) => {
        setButtonCheckedName(button.name);
        button.onClick && button.onClick();
    };

    React.useEffect(() => {
        const listen = history.listen((location) => {
            const button = buttons.find(button => button.path === location.pathname);
            if (button) {
                setButtonCheckedName(button.name);
            } else {
                setButtonCheckedName('');
            }
        });

        return () => listen();
    }, []);         //eslint-disable-line

    return (
        <nav className="navigation-bar">
            <ul className="navigation-bar__list">
                {buttons.map((button) => {
                    return <li className="navigation-bar__item" key={button.name}>
                        <button
                            className={`navigation-bar__button${buttonCheckedName === button.name ? ' checked' : ''}
                            ${!determineIsAllowed(button) ? ' none' : ''}`}
                            onClick={() => buttonClick(button)}
                            key={button.name}
                        >
                            {button.name}
                        </button>
                    </li>
                })}
            </ul>
        </nav>
    );
};
