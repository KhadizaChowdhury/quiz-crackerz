import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import { Alert } from 'bootstrap';

const Quiz = () => {
    const quizData = useLoaderData();
    // console.log(quizData)
    const quiz = quizData.data;
    // console.log(quiz)
    const { total, name, questions } = quiz;

    return (
        <div className='bg-dark'>
            <section className="scn_1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hero_text text-center">
                                <h1>Welcome to <span>Quiz of {name}</span></h1>
                                <h4>Here is Total {total} Questions for you!</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='container mt-5 col col-lg-6 col-md-8 mx-auto'>
                {
                    questions.map(quizQ => <Review
                        key={quizQ.id}
                        quizQ={quizQ}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Quiz;