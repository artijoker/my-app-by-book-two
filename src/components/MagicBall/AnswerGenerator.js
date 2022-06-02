import React, { useState } from 'react';
import "./AnswerGenerator.css"

export default function AnswerGenerator(props) {
    const [isHidden, setisHidden] = useState(false);
    const [answer, setAnswer] = useState(getAnswer(props.answers));
    return <div className='AnswerGenerator'>
        <p hidden={isHidden}>Задай вопрос, вслух или в уме, и получи ответ</p>
        <p hidden={!isHidden}>
            {answer}
        </p>
        <button onClick={() => {
            if (!isHidden) {
                setisHidden(true);
            }
            setAnswer(getAnswer(props.answers));
        }}>
            Получит ответ
        </button>
    </div>;
}

function getAnswer(answers) {
    let value = getRandomValue(0, answers.length)
    return answers[value];
}

function getRandomValue(min, max) {
    return Math.floor((Math.random() * max) + min);
}
