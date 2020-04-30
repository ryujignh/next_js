import React from 'react';
import Link from "next/link";

import User from "../../components/User";

const AuthIndexPage = () => (
    <div>
        <h1>The Auth Index Page</h1>
        <User name="Max" age={28}/>
    </div>
)

export default AuthIndexPage;
