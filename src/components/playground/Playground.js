import React from "react";
import Timer from '../timer/Timer';
import { SvgSadSmiley, SvgSmiley } from "../../images/SvgComponents";
import Cell from "./Cell";

export default function Playground(props) {
    const { mat, endGame, minesNumber } = props;
    const [isAllOpen, setIsAllOpen] = React.useState(false);
    const [isStart, setIsStart] = React.useState(false);
    const [isLost, setIsLost] = React.useState(false);
    let tempIndex = -1;
    let tempMat = mat;

    const startTimer = () => setIsStart(true);

    const youLost = () => {
        setIsAllOpen(true);
        setIsLost(true);
    };

    return (
        <div className="playground__container">
            <div className={`playground__support ${mat.length === 9 ? 'easy' : mat.length === 16 ? 'hard' : mat.length === 21 ? 'expert' : ''}`}>
                <p className="playground__support_bombs-left">{minesNumber > 100 ? 0 : ''}0{minesNumber}</p>
                <button className="playground__support-button" onClick={endGame}>
                    {isLost ? <SvgSadSmiley classes='playground__support_image' color="#ff0000" />
                        :
                        <SvgSmiley classes='playground__support_image' color="#ffff00" />}
                </button>
                <p className="playground__support_time">
                    <Timer
                        isStart={isStart}
                        color="red"
                        displaySize={20}
                        isMinutes={true}
                        isBr={true}
                    />
                </p>
            </div>
            <div className="playground">
                {
                    mat ? mat.map((row) => {
                        tempIndex++;
                        return <div className="playground__row" key={tempIndex}>
                            {row.map((isBomb, cell) => {
                                return <Cell
                                    isBomb={isBomb}
                                    mat={tempMat}
                                    row={tempIndex}
                                    column={cell}
                                    key={`row${tempIndex}column${cell}`}
                                    isOpen={isAllOpen}
                                    openAll={youLost}
                                    startTimer={startTimer}
                                    didGameStart={isStart}
                                />
                            })}
                        </div>
                    }) : <></>
                }
            </div>
        </div >
    );
};
