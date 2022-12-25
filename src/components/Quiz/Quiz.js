import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan} from '@fortawesome/free-solid-svg-icons';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import { Alert } from 'bootstrap';
const Quiz = () => {
    const quizData = useLoaderData();
    // console.log(quizData)
    const quiz = quizData.data;
    // console.log(quiz)
    const {total, name , questions} = quiz;

    return (
        <div>
            <h1>Quiz of {name}</h1>
            <h1>Total Questions: {total}</h1>
            <div>
                {
                    questions.map(quizQ =><Review
                        key={quizQ.id}
                        quizQ={quizQ}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Quiz;