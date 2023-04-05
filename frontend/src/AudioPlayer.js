import React from "react";

import './main.css';
import './input.css'
import Header from "./components/Header";
import Controls from './components/Controls'
import Actions from "./components/playlist/Actions";
import Playlist from "./components/playlist/Playlist";
import PlayerState from "./context/playerState";

let AudioPlayer = () => {
    return(
        <PlayerState>
        <div className="audioplayer">
            <div className="inside_content">
                <Header />
                <Actions />
                <Playlist />
            </div>
            <Controls />
        </div>
        </PlayerState>
    )
}

export default AudioPlayer;