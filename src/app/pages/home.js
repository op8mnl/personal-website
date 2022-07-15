import React from 'react';
import { Helmet } from 'react-helmet';

function Home() {


    const autoBio = 
    "I am currently a third year software engineering student at the University of Western Ontario. This page is meant to showcase the projects that I have been working on and acts as a personal log of what I have learnt!";

    return(
        <>
        <Helmet><title>Felix Zheng</title></Helmet>
            <div className="col-md-12 g-0">
                <div className="bg-dark text-secondary px-4 py-5 ">
                    <div className="py-5">
                        <h1 className="display-5 fw-bold text-center text-white">Hi, I'm Felix Zheng...</h1>
                        <div className="col-lg-6 mx-auto">
                            <p className="fs-5 mb-4" style={{textJustify:'inter-word'}}>{autoBio}</p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
                                <button type="button" className="btn btn-outline-light btn-lg px-4">Secondary</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Home