import React from 'react';

const Blog = () => {
    return (
        <div className='container my-5'>
            <h1 className='text-center mb-4'>Q & A</h1>
            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            What is the purpose of react router?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div class="accordion-body">
                            The Router in React JS is primarily used to <strong>create Single Page Web Apps.</strong> In the application, React Router is utilized to define various routes. When a user enters a URL into your browser and the URL route equals one of several 'pathways' as in the router folder, the user is sent to that route.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            How does context api work?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div class="accordion-body">
                            <p>Here are a few benefits of Context API that give it an edge: </p>
                            <ul>
                                <li>
                                    The Context API <strong>helps share data between components which you can't easily share with props</strong>, for example, complex data objects.
                                </li>
                                <li>React Context API provides a way to send data like userid, auth, and theme data through the component tree without sending any props manually at every level.</li>
                                <li>
                                    We can also share specific states with multiple components instead through props manually. In some use cases, ideal for theming, localization, authentication etc.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Why do we use useRef in React??
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div class="accordion-body">
                            The useRef Hook <strong>allows you to persist values between renders.</strong> It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                            <p>If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
                            To avoid this, we can use the useRef Hook.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;