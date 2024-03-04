import React from 'react'

const Greeting = ({ isLoggedIn }) => {
    return (
        <div>
            {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
        </div>
    )

}

function UserGreeting() {
    return <h3>Welcome back, User!</h3>;
}

function GuestGreeting() {
    return <h3>Please sign up.</h3>;
}

export default Greeting
