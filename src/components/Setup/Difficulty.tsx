import React, {SetStateAction, useState} from "react";

interface Props {
    difficulty: number;
    setDifficulty:  React.Dispatch<SetStateAction<number>>;
}


const Difficulty:React.FC<Props> = ({ difficulty, setDifficulty }) => {
    const [levels, setLevels] = useState([
        {
            id: 0,
            title: "Easy"
        },
        {
            id: 2,
            title: "Hard"
        }
    ]);
    return (
        <div className="difficulty-container">
            <h4>Difficulty of the bot</h4>
            <div className="difficulty-wrap">
            {
                levels.map(level => {
                    return (
                        <label key={level.id} className="difficulty-label">
                            <input className="difficulty-radio" onChange={() => setDifficulty(level.id)} checked={difficulty === level.id} type="radio"/>
                            <span className="difficulty-text">{level.title}</span>
                        </label>
                    )
                })
            }
            </div>
        </div>
    );
}

export default Difficulty;
