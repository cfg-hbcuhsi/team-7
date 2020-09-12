//Example of how to create you own page
import React from 'react';
import NavBar from '../components/NavBar';
export default function IndexPage() {

    return (
        <>
            <NavBar/> {/* this brings the navbar onto your page, make sure this is here*/}
            {/* 
            Put whatever html/css code you want here
            
            Go to the Router.js file and add the line

                where the path variable is the url you input behind localhost:3000/

                for below that would be localhost:3000/jobsl
            <Route path="/jobs" component={LandingPage} />
            */}
        </>
    )
}
