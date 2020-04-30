import React from 'react';
import Link from "next/link";

import User from "../../components/User";

const AuthIndexPage = (props) => (
    <div>
        <h1>The Auth Index Page = {props.appName}</h1>
        <User name="Max" age={28}/>
    </div>
);

AuthIndexPage.getInitialProps = context => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({appName: 'Super App (Auth)'});
        }, 1000);
    });
    return promise;
};

export default AuthIndexPage;
