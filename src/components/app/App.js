import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import usersApiOBJ from '../../utils/usersApi';
import * as auth from '../../utils/auth';
import Header from '../header/Header';
import LoginPopup from '../popup/PopupLogin';
import Playground from '../playground/Playground';
import SignUpPopup from '../popup/PopupSignUp';
import PopupSettings from '../popup/PopupSettings';
import * as Buttons from '../buttons/Buttons';
import * as Svgs from '../../images/SvgComponents';

export default function App() {
  const currentUserContext = React.useContext(CurrentUserContext);    // eslint-disable-line
  const safeDocument = typeof document !== 'undefined' ? document : {};
  const html = safeDocument.documentElement;
  const [isUserFound, setIsUserFound] = React.useState(true);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(undefined);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isSettingsPopupOpen, setIsSettingsPopupOpen] = React.useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = React.useState(false);
  const [difficulty, setDifficulty] = React.useState('easy');
  const [matSize, setMatSize] = React.useState(9);
  const [mat, setMat] = React.useState([]);
  const [minesNumber, setMinesNumber] = React.useState(10);
  const [isRestart, setIsRestart] = React.useState(false);

  // ???????????????????????????????????????????????????
  // !!!!!!!!!!!!!     SCROLL handling     !!!!!!!!!!!!!
  // ???????????????????????????????????????????????????
  const noScroll = () => html.classList.add('no-scroll');
  const scroll = () => html.classList.remove('no-scroll');

  // ???????????????????????????????????????????????????
  // !!!!!!!!!!!!!!     USER handling     !!!!!!!!!!!!!!
  // ???????????????????????????????????????????????????
  const isAutoLogin = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.checkToken(jwt)
        .then((user) => {
          if (user) {
            setCurrentUser(user);
            setLoggedIn(true);
          }
        })
        .catch((err) => {
          console.log(`Check token error: ${err}`);
        });
    }
  };

  const findUserInfo = () => {
    usersApiOBJ
      .getCurrentUser()
      .then((user) => {
        if (user) {
          setCurrentUser(user);
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      })
      .catch((err) => {
        if (err) {
          console.log(`Error type: ${err.message}`);
          setLoggedIn(false);
        }
      })
      .finally(() => {
        closeAllPopups({ isProject: false });
      });
  };

  const handleLoginSubmit = (email, password) => {
    usersApiOBJ
      .login({ email, password })
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem('jwt', data.jwt);
        }
        if (data.user._id) {
          setIsUserFound(true);
          findUserInfo();
        }
      })
      .catch((err) => {
        console.log(`Error type: ${err.message}`);
        if ((err === 'Error: 404') || (err.message === 'Failed to fetch')) {
          setIsUserFound(false);
        }
        setLoggedIn(false);
      });
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    setCurrentUser(undefined);
  };

  // ???????????????????????????????????????????????????
  // !!!!!!!!!!!!!     POPUP handling     !!!!!!!!!!!!!!
  // ???????????????????????????????????????????????????
  const closeAllPopups = () => {
    setIsLoginPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsSettingsPopupOpen(false);
  };

  const openPopup = () => {
    if (loggedIn) {

    } else {
      setIsLoginPopupOpen(true);
    }
  };

  const switchPopups = (evt) => {
    closeAllPopups();
    if (evt.target.parentElement.parentElement.parentElement.parentElement.classList.contains(`popup_type_signup`)) {
      setIsLoginPopupOpen(true);
    } else {
      setIsSignUpPopupOpen(true);
    }
  };

  const openSettingsPopup = () => setIsSettingsPopupOpen(true);

  // ???????????????????????????????????????????????????
  // !!!!!!!!!!!!!!     MAT handling     !!!!!!!!!!!!!!!
  // ???????????????????????????????????????????????????
  const createMat = () => {
    let tempMat = [];
    for (let i = 0; i < matSize; i++) {
      let tempArr = [];
      for (let j = 0; j < matSize; j++) {
        tempArr[j] = false;
      }
      tempMat[i] = tempArr;
    }
    addMines(tempMat);
  };

  const addMines = (tempMat) => {
    let minesArray = [];
    while (minesArray.length < minesNumber) {
      const rand = Math.floor((Math.random() * (matSize ** 2)));
      if (minesArray.indexOf(rand) === -1) {
        minesArray[minesArray.length] = rand;
      }
    }

    for (let i = 0; i < minesArray.length; i++) {
      const row = parseInt(minesArray[i] / matSize);
      const column = minesArray[i] % matSize - 1;
      tempMat[row][column > 0 ? column : 0] = true;
    }
    setMat(tempMat);
  };

  const endGame = async () => {
    await setIsRestart(true);
    createMat();
    setIsRestart(false);
  };

  const decreaseMineNumber = () => { };

  React.useEffect(() => {
    if (difficulty === 'easy') {
      setMatSize(9);
      setMinesNumber(10);
    } else {
      if (difficulty === 'hard') {
        setMatSize(16);
        setMinesNumber(40);
      } else {
        if (difficulty === 'expert') {
          setMatSize(21);
          setMinesNumber(90);
        }
      }
    }
  }, [difficulty]);

  React.useEffect(() => {
    createMat();
  }, [matSize])

  // ???????????????????????????????????????????????????
  // !!!!!!!!!!!!     SETTINGS handling     !!!!!!!!!!!!
  // ???????????????????????????????????????????????????
  const setSettings = async (settings) => {
    if (settings) {
      await setDifficulty(settings.difficulty);
      closeAllPopups();
    }
  };

  // ???????????????????????????????????????????????????
  // !!!!!!!!!!!!!     EVENT handling     !!!!!!!!!!!!!!
  // ???????????????????????????????????????????????????
  React.useEffect(() => { // * close popup when clicked ESCAPE
    const closeByEscape = (evt) => {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    };

    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => { // * close popup when clicked outside of it
    const closeByClick = (evt) => {
      if (evt.target.classList.contains("popup")) {
        closeAllPopups();
      }
    }

    document.addEventListener('mouseup', closeByClick);
    return () => document.removeEventListener('mouseup', closeByClick);
  });

  // ???????????????????????????????????????????????????
  // !!!!!!!!!!!!!     INIT handling     !!!!!!!!!!!!!!!
  // ???????????????????????????????????????????????????
  React.useEffect(() => { // * initializing the user and resources
    isAutoLogin();
    createMat();
  }, []);       //eslint-disable-line

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header
        noScroll={noScroll}
        scroll={scroll}
        isLoggedIn={false}
        buttons={[]}
        handleButtonClick={openPopup}
        theme={true}
      />

      <div className="settings-button__container">
        <Buttons.ButtonSVG onClick={openSettingsPopup} title='Reload' buttonText="Settings" >
          <Svgs.SvgSettings classes='setting__button-class' />
        </Buttons.ButtonSVG>
      </div>

      {!isRestart &&
        <Playground
          mat={mat}
          endGame={endGame}
          minesNumber={minesNumber}
          decreaseMineNumber={decreaseMineNumber}
        />}

      <LoginPopup
        handleLogin={handleLoginSubmit}
        isOpen={isLoginPopupOpen}
        isFound={isUserFound}
        linkText='Sign up'
        onClose={closeAllPopups}
        handleSwitchPopup={switchPopups}
        onSignOut={handleLogout}
      />

      <PopupSettings
        isOpen={isSettingsPopupOpen}
        onClose={closeAllPopups}
        handleSubmit={setSettings}
      />

      <SignUpPopup
        handleLogin={handleLoginSubmit}
        isOpen={isSignUpPopupOpen}
        buttonText='Sign Up'
        onClose={closeAllPopups}
        handleSwitchPopup={switchPopups}
      />
    </CurrentUserContext.Provider >
  );
};
