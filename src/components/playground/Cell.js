import React from "react";
import { SvgBomb, SvgFlag } from "../../images/SvgComponents";

export default function Cell(props) {
    const { isBomb, openAll, mat, row, column, isOpen, startTimer, didGameStart } = props;
    const [isClicked, setIsClicked] = React.useState(false);
    const [isFlag, setIsFlag] = React.useState(false);
    const [number, setNumber] = React.useState(0);

    const onClick = () => {
        if (!isClicked && !isFlag) {
            setIsClicked(true);
            if (isBomb) {
                openAll && openAll();
            } else {
                calculateNumber();
                !didGameStart && startTimer();
            }
        }
    };

    const calculateNumber = () => {
        let counter = 0;
        if (!isBomb) {
            //top right
            if (row > 0 && column < mat[row].length - 1) {
                if (mat[row - 1][column + 1]) {
                    counter++;
                }
            }
            //right
            if (column < mat[row].length - 1) {
                if (mat[row][column + 1]) {
                    counter++;
                }
            }
            //bottom right
            if (row < mat.length - 1 && column < mat[row].length - 1) {
                if (mat[row + 1][column + 1]) {
                    counter++;
                }
            }
            //bottom
            if (row < mat.length - 1) {
                if (mat[row + 1][column]) {
                    counter++;
                }
            }
            //bottom left
            if (row < mat.length - 1 && column > 0) {
                if (mat[row + 1][column - 1]) {
                    counter++;
                }
            }
            // left
            if (column > 0) {
                if (mat[row][column - 1]) {
                    counter++;
                }
            }
            //top left
            if (row > 0 && column > 0) {
                if (mat[row - 1][column - 1]) {
                    counter++;
                }
            }
            //top
            if (row > 0) {
                if (mat[row - 1][column]) {
                    counter++;
                }
            }
        }
        setNumber(counter);
    };

    React.useEffect(() => {
        const cell = document.getElementById(`row${row}column${column}`);
        const handleContextMenu = (event) => {
            event.preventDefault();
            if (event.currentTarget.children.length !== 0) {
                if (event.currentTarget.lastChild.classList && event.currentTarget.lastChild.classList.contains("playground__cell_image")) {
                    setIsFlag(false);
                } else {
                    if (event.currentTarget.classList[0].indexOf('clicked') === -1) {
                        setIsFlag(true);
                    }
                }
            } else {
                if (!event.currentTarget.lastChild && event.currentTarget.className.indexOf('clicked') === -1) {
                    setIsFlag(true);
                }
            }
        };

        cell.addEventListener('contextmenu', handleContextMenu);

        return () => {
            cell.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);//eslint-disable-line

    React.useEffect(() => {
        if (isOpen) {
            onClick()
        }
    }, [isOpen]);//eslint-disable-line

    return (
        <div id={`row${row}column${column}`} name={`cell-row${row}column${column}`} className={`playground__cell${isClicked ? isBomb ? '_clicked-with-bomb' : '_clicked' : ''}`} onClick={onClick} >
            {isFlag ? <SvgFlag color="red" classes='playground__cell_image' /> : isBomb && isClicked ? <SvgBomb classes='playground__cell_image' /> :
                number === 0 ? '' : number
            }
        </div>
    );
};
