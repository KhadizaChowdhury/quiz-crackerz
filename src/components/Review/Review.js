import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import './Review.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, ListGroup } from 'react-bootstrap';
const Review = (props) => {
    const { quizQ } = props;
    const { options, id, question, correctAnswer } = quizQ;

    // console.log(quizQ)

    const CustomToast = () => (
        <div>
            <p>Q: {question},</p>
            <p>Ans: {correctAnswer}</p>
        </div>
    );

    const correctAn = (correctAnswer) => {
        // console.log(quizQ.correctAnswer);
        toast.info(CustomToast);
    }

    const [option, setOption] = useState();

    const handleSubmit = (event) => {
        if (`${option}` === correctAnswer) {
            event.preventDefault();
            toast.info(`Congratulations!
            Your answer ${option} is correct`)
        }
        else {
            event.preventDefault();
            toast.error(`Wrong!
            Correct Ans: ${correctAnswer}`)
        }
    }

    return (
        <div className='quiz-item py-3'>
            <Card>
                <Card.Header className="d-flex  justify-content-between p-4 align-items-center">
                    <div>
                        <h6>Q: {question}</h6>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button onClick={() => correctAn(correctAnswer)} type="button" class="btn btn-secondary">
                            <FontAwesomeIcon icon={faEye} />
                        </button>
                        <ToastContainer autoClose={10000} /></div>
                </Card.Header>
                <form onSubmit={handleSubmit}>
                    {options.map(option =>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>
                                <label>
                                    <input
                                        type="radio"
                                        name="option"
                                        value={option}
                                        onChange={(e) => setOption(e.target.value)}
                                    /> {option} </label>
                            </ListGroup.Item>
                        </ListGroup>
                    )
                    }
                    <Card.Body>
                        <Card.Link><input type="submit" /></Card.Link>
                    </Card.Body>
                </form>
            </Card>
        </div>
    );
};

export default Review;