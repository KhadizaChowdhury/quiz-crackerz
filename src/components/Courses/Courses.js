import {useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const course = useLoaderData();
    const courses = course.data;

    return (
        <div className="shop_cont">
            <div>
                <h1>All Courses: {courses.length}</h1>
                <div className='courses'>
                    {
                        courses.map(course => <Course
                            course={course}
                            // unique key
                            key={course.id}
                            >
                        </Course>)
                    }
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};
export default Courses;