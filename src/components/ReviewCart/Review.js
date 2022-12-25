import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye} from '@fortawesome/free-solid-svg-icons';
import './Review.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Review = (props) => {
    const {quizQ} = props;
    const { options, id, question, correctAnswer} = quizQ;

    // console.log(quizQ)

    const CustomToast = () => (
        <div>
          <p>ID: {id},</p>
          <p>Ans: {correctAnswer}</p>
        </div>
      );

    const correctAn = (correctAnswer) =>{
        // console.log(quizQ.correctAnswer);
        toast.info(CustomToast);
    }

    // for(const quizz of questions){
    //     console.log(quizz)
    //     const question = quizz.question;
    //     const option = quizz.options;

    //     const correctAnswer = quizz.correctAnswer;
        
    //     //Array for in
    //     for (const index in option) {
    //             const element = option[index];
    //             console.log(element)
    //     }

    //     console.log(question,correctAnswer)
    // }
    const [option, setOption] = useState();

    const handleSubmit = (event) => {
        if(`${option}` === correctAnswer){
            event.preventDefault();
            toast.info(`Congratulations!
            Your answer ${option} is correct`)
        }
        else{
            event.preventDefault();
            toast.error(`Wrong!
            Correct Ans: ${correctAnswer}`)
        }
      }

    return (
        <div className='quiz-item'>
            <div className='quiz-info'>
                <div className='quiz-details-container'>
                    <div className='quiz-details'>
                        <button onClick={() =>correctAn(correctAnswer)}><FontAwesomeIcon icon={faEye} /></button>
                        <ToastContainer autoClose={10000}/>
                        <p>Q: {question}</p>
                        <div><form onSubmit={handleSubmit}>
                            {options.map(option=>
                                <div>
                                    <label>
                                    <input
                                        type="radio" 
                                        name="option"
                                        value={option}
                                        onChange={(e) => setOption(e.target.value)}
                                    /> {option} </label>
                                </div>
                                )
                            }
                            <br></br>
                            <input type="submit" />
                          </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;