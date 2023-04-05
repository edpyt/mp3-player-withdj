import React, {useEffect, useReducer, useState} from "react";
import playerReducer from "./playerReducer";
import playerContext from "./playerContext";

import SongsList from "./songs";

const PlayerState = props => {
    const [song_list, setSongs] = useState();

    useEffect(() => {
        retrieveSongs();
    }, []);

    const retrieveSongs = () => {
        SongsList()
            .then(response => {
                setSongs(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const initialState = {
        currentSong: 0,
        songslist: song_list,
        repeat: false,
        random: false,
        playing: false,

    }



    const [state, dispatch] = useReducer(playerReducer, initialState)

    // Set songs array
    const SetCurrent = (id) => dispatch({type: 'SET_CURRENT_SONG', data: id})

    // Set songs array
    const songsSet = (songsArr) =>
        dispatch({type: 'SET_SONGS_ARRAY', data: songsArr})

    // Set playing bla
    const togglePlaying = () =>
        dispatch({type: 'TOGGLE_PLAYING', data: state.playing ? false: true})

    // Prev song
    const prevSong = () => {
        if (state.currentSong === 0){
            SetCurrent(song_list.length - 1)
        } else {
            SetCurrent(state.currentSong - 1)
        }
    }

    // Next song
    const nextSong = () => {
        if (state.currentSong === song_list.length - 1){
            SetCurrent(0)
        } else {
            SetCurrent(state.currentSong + 1)
        }
    }

    // Repeat and Random
    const toggleRepeat = (id) =>
        dispatch({type: 'TOGGLE_REPEAT', data: !state.repeat })
    const toggleRandom = (id) =>
        dispatch({type: 'TOGGLE_RANDOM', data: !state.random })

    // End of Song
    const handleEnd = () => {
        if (state.random){
            return dispatch({
                type: 'SET_CURRENT_SONG',
                data: ~~(Math.random() * song_list.length)
            })
        } else {
            if (state.repeat){
                nextSong()
            } else if(state.currentSong === song_list.length - 1){
                return
            } else {
                nextSong()
            }
        }
    }

    return <playerContext.Provider value={{
        currentSong: state.currentSong,
        songslist: song_list, // I HATE THIS F+**
        repeat: state.repeat,
        random: state.random,
        playing: state.playing,
        nextSong,
        prevSong,
        SetCurrent,
        toggleRandom,
        toggleRepeat,
        togglePlaying,
        handleEnd,
        songsSet,
    }}>
        {props.children}
    </playerContext.Provider>

}

export default PlayerState;