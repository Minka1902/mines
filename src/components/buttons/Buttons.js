import React from "react";
import './buttons.css';
import { SvgDoubleCheck, SvgSend, SvgRefresh } from "../../images/SvgComponents";

export function ButtonGlitch({ buttonText = 'Click Me!', onClick }) {
    return (
        <button className="button-glitch" buttontext={buttonText} onClick={onClick}>{buttonText}</button>
    );
};

export function ButtonGlowing({ buttonText = 'Click Me!', onClick }) {
    const index = Math.floor(Math.random() * buttonText.length);
    const letter = buttonText.charAt(index);
    const before = buttonText.slice(0, index);
    const after = buttonText.slice(index + 1);

    return (
        <div className="container-glowing">
            <button className="glowing-btn" onClick={onClick}>
                <span className="glowing-word">{before}<span className="faulty-letter">{letter}</span>{after}</span>
            </button>
        </div>
    );
};

export function ButtonEncrypt({ buttonText = 'Click Me!', onClick }) {
    return (
        <button className="button-encrypt" onClick={onClick}>
            <span>{buttonText}</span>
        </button>
    );
};

export function ButtonFocus({ buttonText = 'Click Me!', onClick }) {
    return (
        <button className="button-focus" onClick={onClick}>{buttonText}</button>
    );
};

export function ButtonLike({ buttonText = 'Like', onClick }) {
    return (
        <div className="container-like">
            <button className="button-like" onClick={onClick} buttontext={buttonText}>
                <svg fill="currentColor" viewBox="0 0 17.503 15.625" height="20.625" width="20.503" xmlns="http://www.w3.org/2000/svg" className="icon-like">
                    <path fill="currentColor" transform="translate(0 0)" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" id="Fill"></path>
                </svg>
            </button>
        </div>
    );
};

export function ButtonFollow({ onClick }) {
    return (
        <div className="button-follow">
            <div className="button-follow__part">
                <button className="button-follow__card card1" onClick={onClick.instagram}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="30px" height="30px" fillRule="nonzero" className="follow-instagram">
                        <g fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ 'mixBlendMode': 'normal' }}>
                            <g transform="scale(8,8)">
                                <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path>
                            </g>
                        </g>
                    </svg>
                </button>
                <button className="button-follow__card card2" onClick={onClick.twitter}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px" className="follow-twitter">
                        <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429">
                        </path>
                    </svg>
                </button>
            </div>
            <div className="button-follow__part">
                <button className="button-follow__card card3" onClick={onClick.github}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" className="follow-github">
                        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z">
                        </path>
                    </svg>
                </button>
                <button className="button-follow__card card4" onClick={onClick.linkedin}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" className="follow-linkedin">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                </button>
            </div>
        </div >
    );
};

export function ButtonBubbles({ buttonText = 'Click Me!', onClick }) {
    return (
        <button className="button-bubbles" onClick={onClick}>{buttonText}</button>
    );
};

export function ButtonSliced({ buttonText = 'Click Me!', onClick, theme }) {
    return (
        <button class={`button-slice${theme ? ' theme_light-sliced' : ''}`} onClick={onClick}>
            <div class="top"><span>{buttonText}</span></div>
            <div class="bottom"><span>{buttonText}</span></div>
        </button>
    );
};

export function ButtonSave({ onClick }) {
    return (
        <label className="button-save" onClick={onClick}>
            <input className="button-save_input" type="checkbox" />
            <div className="bookmark">
                <svg viewBox="0 0 32 32">
                    <g>
                        <path d="M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z"></path>
                    </g>
                </svg>
            </div>
        </label>
    );
};

export function ButtonHamburger({ onClick, theme, isChecked }) {
    return (
        <label className="button-hamburger" onClick={onClick}>
            <input checked={isChecked} className="button-hamburger_input" type="checkbox" onChange={onClick} />
            <svg viewBox="0 0 32 32">
                <path className={`line line-top-bottom ${theme ? 'button-hamburger__theme_light' : ''}`} d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                <path className={`line ${theme ? 'button-hamburger__theme_light' : ''}`} d="M7 16 27 16"></path>
            </svg>
        </label>
    );
};

export function ButtonLock({ onClick }) {
    return (
        <>
            <input id="inpLock" type="checkbox" onClick={onClick} />
            <label class="btn-lock" for="inpLock">
                <svg viewBox="0 0 36 40">
                    <path class="lockb" d="M27 27C27 34.1797 21.1797 40 14 40C6.8203 40 1 34.1797 1 27C1 19.8203 6.8203 14 14 14C21.1797 14 27 19.8203 27 27ZM15.6298 26.5191C16.4544 25.9845 17 25.056 17 24C17 22.3431 15.6569 21 14 21C12.3431 21 11 22.3431 11 24C11 25.056 11.5456 25.9845 12.3702 26.5191L11 32H17L15.6298 26.5191Z"></path>
                    <path class="lock" d="M6 21V10C6 5.58172 9.58172 2 14 2V2C18.4183 2 22 5.58172 22 10V21"></path>
                    <path class="bling" d="M29 20L31 22"></path>
                    <path class="bling" d="M31.5 15H34.5"></path>
                    <path class="bling" d="M29 10L31 8"></path>
                </svg>
            </label>
        </>
    );
};

export function ButtonMerge({ buttonText = 'Click me!', onClick }) {
    return (
        <button className="button__merge" onClick={onClick}>{buttonText}</button>
    );
};

export function ButtonCheckbox({ todoList }) {
    return (
        <>
            {todoList.map((item, index) => {
                return (
                    <div className="checkbox-wrapper">
                        <input value="2" name={`checkbox-${index}`} type="checkbox" id={`checkbox-${index}`} />
                        <label>{item}</label>
                    </div>
                );
            })}
        </>
    );
};

export function ButtonSVG({ buttonText, onClick, title = buttonText, children = <SvgRefresh />, isRotating = true, classes }) {
    return (
        <button className={`add-button ${classes}`} onClick={onClick} title={title}>
            <div className={`add-button__sign${isRotating ? '' : ' no-rotate'}`}>
                {children}
            </div>
            <div className="add-button__text">{buttonText}</div>
        </button>
    );
};

export function ButtonSubmit() {
    return (
        <button className="button-submit" type="submit">
            <span className="button-submit__span">
                Submit
                <SvgSend />
            </span>
            <span className="button-submit__span">
                Sure ?
            </span>
            <span className="button-submit__span">
                Done
                <SvgDoubleCheck color='white' />
            </span>
        </button >
    );
};
