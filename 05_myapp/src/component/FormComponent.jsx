import React, { useState, useEffect } from 'react'

const FormComponent = () => {

    const [username, setUsername] = useState('')
    const [comment, setComment] = useState('')
    const [language, setLanguage] = useState('python')

    useEffect(() => {
        console.log("Component has mounted or updated Every time.");
    });

    useEffect(() => {
        console.log("Component has mounted or updated First time.");
    }, []);

    useEffect(() => {
        console.log("Component has mounted or updated username, comment.");
    }, [username, comment]);


    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
        console.log('Username is : ', username)

    }

    const handleCommentChange = (event) => {
        setComment(event.target.value)
        console.log('Comment is : ', comment)
    }

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value)
        console.log('Language is : ', language)
    }

    const handleSubmit = (event) => {
        console.log("Going to submit the form.")
        console.log("username : ", username)
        console.log("comment : ", comment)
        console.log("language : ", language)

        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username </label>
                <input type="text" name="username" id="username" value={username} onChange={handleUsernameChange} />
            </div>
            <div>
                <label>Comment </label>
                <input type="text" name="comment" id="comment" value={comment} onChange={handleCommentChange} />
            </div>
            <div>
                <label>Language </label>
                <select value={language} onChange={handleLanguageChange}>
                    <option value="python">Python</option>
                    <option value="reactjs">ReactJS</option>
                    <option value="nodejs">NodeJS</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default FormComponent
