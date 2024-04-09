import React, { useState } from 'react';

const CustomerRegistration = () => {
    const [fName, setFname] = useState('');
    const [lName, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(fName, lName, email, password)
    }
    return (
        <div>
            <h1>Customer Registration</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fName">First Name</label>
                    <input type="text" name="fName" onChange={(e) => { setFname(e.target.value) }} />
                </div>
                <div>
                    <label htmlFor="lName">Last Name</label>
                    <input type="text" name="lName" onChange={(e) => { setLname(e.target.value) }} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div>
                    <label htmlFor="passw">Password</label>
                    <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default CustomerRegistration
