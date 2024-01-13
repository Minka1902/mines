import PopupWithForm from './PopupWithForm';
import React from 'react';

export default function SignUpPopup(props) {
  const { isOpen, onClose, handleSwitchPopup, handleSignup, buttonText } = props;
  const [isValid, setIsValid] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isEmailCorrect, setIsEmailCorrect] = React.useState(true);
  const [isPasswordCorrect, setIsPasswordCorrect] = React.useState(true);
  const [shouldAddSSign, setShouldAddSSign] = React.useState(false);
  const [passwordErrorText, setPasswordErrorText] = React.useState('Password incorrect');
  const [isUsernameCorrect, setIsUsernameCorrect] = React.useState(true);

  // ! Resetting the popup when closing
  React.useEffect(() => {
    setIsEmailCorrect(true);
    setIsPasswordCorrect(true);
    setIsUsernameCorrect(true);
    setEmail('');
    setPassword('');
    setUsername('');
    setIsValid(false);
    setShouldAddSSign(false);
  }, [isOpen]);

  // ! Validating the email input
  const checkEmailValid = () => {
    // eslint-disable-next-line
    const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailRegExp.test(email)) {
      if (email.length >= 8) {
        setIsEmailCorrect(true);
      } else {
        setIsEmailCorrect(false);
      }
    } else {
      if (email === '') {
        setIsEmailCorrect(true);
      } else {
        setIsEmailCorrect(false);
      }
    }
  };

  // ! Validating the password input
  const checkPasswordValid = () => {
    const passwordRegExp = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const passwordSpecialSignRegExp = /(?=.*[!@#$%^&*])/;
    if (password.length >= 6 || password === '') {
      if (passwordRegExp.test(password)) {
        if (!passwordSpecialSignRegExp.test(password)) {
          setPasswordErrorText('It`s better to add a special sign ( ! @ # $ % ^ & * ).');
          setShouldAddSSign(true);
        } else {
          setShouldAddSSign(false);
          setPasswordErrorText('Password incorrect. Must contain numbers and letters!');
        }
        setIsPasswordCorrect(true);
      } else {
        setShouldAddSSign(false);
        setPasswordErrorText('Password incorrect. Must contain numbers and letters!');
        if (password === '') {
          setIsPasswordCorrect(true);
        } else {
          setIsPasswordCorrect(false);
        }
      }
    } else {
      setIsPasswordCorrect(false);
      setPasswordErrorText('Password to short!');
    }
  };

  // ! Validating the name input
  const checkUsernameValid = () => {
    const usernameRegExp = /^[a-zA-Z0-9 ]{2,40}$/;
    if (usernameRegExp.test(username)) {
      setIsUsernameCorrect(true);
    } else {
      if (username === '') {
        setIsUsernameCorrect(true);
      } else {
        setIsUsernameCorrect(false);
      }
    }
  };

  // ! Submitting the form
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isValid) {
      handleSignup(email, password, username);
      setIsValid(false);
    }
  };

  // ! Validating the form
  React.useEffect(() => {
    checkEmailValid();
    checkPasswordValid();
    checkUsernameValid();
    if (isEmailCorrect || isPasswordCorrect || isUsernameCorrect) {
      if (isEmailCorrect && isPasswordCorrect && isUsernameCorrect) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    } else {
      setIsValid(false);
    }
    // eslint-disable-next-line
  }, [email, password, username]);

  return (
    <PopupWithForm name="signup" isValid={isValid} title="Sign up" onSubmit={handleSubmit} handleSwitchPopup={handleSwitchPopup} isOpen={isOpen} onClose={onClose} linkText="Sign in" buttonText={buttonText}>
      <h3 className='popup__input-title'>Email</h3>
      <input
        className="popup__input"
        value={email}
        onChange={(evt) => setEmail(evt.currentTarget.value)}
        placeholder="Enter email"
        id="signup-email-input"
        type="email"
        name="emailInput"
        required
        minLength="2"
        maxLength="40"
        autoComplete="off"
      />
      <p className={`popup__error-massage${isEmailCorrect ? '' : '_visible'}`}>Email incorrect.</p>

      <h3 className='popup__input-title'>Password</h3>
      <input
        className="popup__input"
        value={password}
        onChange={(evt) => setPassword(evt.currentTarget.value)}
        placeholder="Enter password"
        id="signup-password-input"
        type="password"
        name="passwordInput"
        required
        minLength="2"
        maxLength="200"
        autoComplete="off"
      />
      <p className={`popup__error-massage${isPasswordCorrect ? '' : '_visible'}${shouldAddSSign ? '_visible' : ''}`}>{passwordErrorText}</p>
      
      <h3 className='popup__input-title'>Username</h3>
      <input
        className="popup__input"
        value={username}
        onChange={(evt) => setUsername(evt.currentTarget.value)}
        placeholder="Enter your username"
        id="signup-username-input"
        type="text"
        name="usernameInput"
        required
        minLength="2"
        maxLength="40"
        autoComplete="off"
      />
      <p className={`popup__error-massage${isUsernameCorrect ? '' : '_visible'}`}>Name incorrect.</p>
    </PopupWithForm>
  );
};
