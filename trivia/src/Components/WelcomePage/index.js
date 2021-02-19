import React, { useState } from 'react';

function WelcomeDisplay({ state, dispatch, isVisible, handleVisibility }) {
    const [classname, setClassName] = useState("")
    const [genreClass, setGenreClass] = useState("")
    
    function difficultyClick(text) {
        setClassName(classname ? "" : "clicked")
        dispatch({ type: 'DIFFICULTY', payload: text })
    }
    
    function genreClick(text, i) {
        setGenreClass(genreClass ? "" : "genreButton")
        dispatch({ type: 'GENRE', payload: text })
    }
    
    return (
        <div className={isVisible ? 'true' : 'false'}>
            <div className="difficulty_buttons">
                    <input
                        className="Player_Name"
                        placeholder="Enter Player Name Here..."
                        onChange={(e)=>dispatch({type: 'PLAYER_NAME', payload: e.target.value})}
                        ></input>
                <p>Difficulty: {state.difficulty}</p>
                <p>Genre Chosen: {state.genre}</p>
            <div className="diff_buttons">
                    <button className={classname} onClick={() => difficultyClick("easy")}>Easy</button>
                    <button className={classname} onClick={() => difficultyClick("medium")}>Medium</button>
                    <button className={classname} onClick={() => difficultyClick("hard")}>Hard</button>
                </div>
            </div>

<div className="genre_buttons">
                <button className={genreClass} onClick={() => genreClick(9)}>General Knowledge</button>
                <button className={genreClass} onClick={() => genreClick(27)}>Animals</button>
                <button className={genreClass} onClick={() => genreClick(10)}>Books</button>
                <button className={genreClass} onClick={() => genreClick(11)}>Film</button>
                <button className={genreClass} onClick={() => genreClick(12)}>Music</button>
                <button className={genreClass} onClick={() => genreClick(31)}>Anime</button>
                <button className={genreClass} onClick={() => genreClick(14)}>Television</button>
                <button className={genreClass} onClick={() => genreClick(15)}>Video Games</button>
                <button className={genreClass} onClick={() => genreClick(16)}>Board Games</button>
                <button className={genreClass} onClick={() => genreClick(21)}>Sports</button>

            </div>

            <button className="start_button" onClick={handleVisibility}>Start Quiz</button>

        </div>
    );
}

export default WelcomeDisplay;
//functions handle

//props to take:
//handle(functions)
//difficulty/genre/name/ states

//returns
//DifficultyButtons
//GenreButtons
//input field

//<form onSubmit={handleSubmit}>
    // function handleSubmit(e) {
    //     dispatch({ type: 'PLAYER_NAME', payload: e.target[0].value });
    //     console.log(e);
    //     e.preventDefault();
    // } */}
//form> */}