import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Course.css'
import { Link } from 'react-router-dom';
const Course = (props) => {
    const {startQuiz, course} = props;
    const {id, logo, name, total}= course;
    
    return (
        <div className='course'>
            {/* <p>{id}</p> */}
            <div className='course-info'>
                <div className='img'>
                    <img src={logo} alt="" />
                </div>
                <p className='name'>{name}</p>
                <p className='total'>Total Question: {total}</p>
                {
                    <div className='startQuiz'>
                        <Link to={`../${id}`} area-label='view Item'>Start Quiz</Link>
                    </div>
                }
            </div>
            
        </div>
    );
};

export default Course;