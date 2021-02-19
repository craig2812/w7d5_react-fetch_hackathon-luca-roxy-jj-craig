import React, { useState } from 'react';

// state difficulty , genre, number of questions, player name
// Display box for chosen Diff and Genre

function WelcomeDisplay({ state, dispatch, isVisible, handleVisibility }) {
    function handleSubmit(e) {
        dispatch({ type: 'PLAYER_NAME', payload: e.target[0].value });
        console.log(e);
        e.preventDefault();
    }

    return (
        <div className={isVisible?'true':'false'}>
            <div className="difficulty_buttons">
                <form onSubmit={handleSubmit}>
                    <input
                        className="Player_Name"
                        placeholder="Enter Player Name Here..."
                    // onChange={(e)=>setPlayerName(e.target.value)}
                    ></input>
                    {/* <button type="submit" onClick={handleSubmit}></button> */}
                </form>
                <p>Difficulty: {state.difficulty}</p>
                <p>Genre Chosen: {state.genre}</p>
             
                <button onClick={() => dispatch({ type: 'DIFFICULTY', payload: 'easy' })}>Easy</button>
                <button onClick={() => dispatch({ type: 'DIFFICULTY', payload: 'medium' })}>Medium</button>
                <button onClick={() => dispatch({ type: 'DIFFICULTY', payload: 'hard' })}>Hard</button>
            </div>

            <div className="genre_buttons">
                <button onClick={() => dispatch({ type: 'GENRE', payload: 9 })}>General Knowledge</button>
                <button onClick={() => dispatch({ type: 'GENRE', payload: 27 })}>Animals</button>
                <button onClick={() => dispatch({ type: 'GENRE', payload: 10 })}>Books</button>
                <button onClick={() => dispatch({ type: 'GENRE', payload: 11 })}>Film</button>
                <button onClick={() => dispatch({ type: 'GENRE', payload: 12 })}>Music</button>
                <button onClick={() => dispatch({ type: 'GENRE', payload: 31 })}>Anime and Manga</button>
                <button onClick={() => dispatch({ type: 'GENRE', payload: 14 })}>Television</button>
                <button onClick={() => dispatch({ type: 'GENRE', payload: 15 })}>Video Games</button>
                <button onClick={() => dispatch({ type: 'GENRE', payload: 16 })}>Board Games</button>
                <button onClick={() => dispatch({ type: 'GENRE', payload: 21 })}>Sports</button>

            </div>

            <button className = "start_button" onClick={handleVisibility}>Start Quiz</button>

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
