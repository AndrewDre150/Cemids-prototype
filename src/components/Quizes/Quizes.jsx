
import React, { useRef, useState } from 'react';
import { data } from './data'; // Import your quiz data

function Quiz({ category }) {
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    const [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];

    const checkAns = (e, ans) => {
        if (!lock) {
            if (question.ans === ans) {
                e.target.classList.add("correct");
                setScore(prev=>prev+1);
            } else {
                e.target.classList.add("wrong");
                option_array[question.ans-1].current.classList.add('correct')
            }
            setLock(true);
        }
    }

    const next = () => {
        if (index === data.length - 1) {
            setResult(true);
        } else {
            // Reset styling of all answer elements
            option_array.forEach(optionRef => {
                if (optionRef.current) {
                    optionRef.current.classList.remove("correct");
                    optionRef.current.classList.remove("wrong");
                }
            });

            // Move to the next question
            setIndex(prevIndex => prevIndex + 1); // Increment index
            setQuestion(data[index + 1]); // Set next question
            setLock(false);
        }
    }

    const reset = () =>{
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    }

    return (
        <div className='quiz-container'>
            <h1>{category}</h1>
            <hr></hr>
            {result?<></>:<>
                <h2>{index + 1}. {question.question}</h2>
                <ul>
                    <li ref={Option1} onClick={(e) => { checkAns(e, 1) }}>{question.option1}</li>
                    <li ref={Option2} onClick={(e) => { checkAns(e, 2) }}>{question.option2}</li>
                    <li ref={Option3} onClick={(e) => { checkAns(e, 3) }}>{question.option3}</li>
                    <li ref={Option4} onClick={(e) => { checkAns(e, 4) }}>{question.option4}</li>
                </ul>
                <button onClick={next}>Next</button>
                <div className="index">{index + 1} of {data.length} questions</div>
            </>}
            {result?<h2>You scored {score}  out of {data.length}</h2>:<></>}
            {result?<button onClick={reset}>Reset</button>:<></>}
        </div>
    )
}

export default Quiz;
