import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const course = useLoaderData();
    const courses = course.data;

    return (
        <div className="shop_cont">
            <section className="scn_1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hero_text text-center">
                                <h1>Welcome to <span>Virtual Course</span></h1>
                                <h4>We are offering {courses.length} Courses for you!</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='container courses mt-5'>
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
    );
};
export default Courses;