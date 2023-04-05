import React, {useContext} from "react";
import SongsList from '../../context/songs'
import playerContext from "../../context/playerContext";

const fav = () => {
    console.log('I like this one')
}

let Actions = () => {
    const { currentSong, songslist } = useContext(playerContext)

    if (currentSong + 1 && songslist) {
        const picked_song = songslist[currentSong]
        return (
            <div className="actions">
                <img src={picked_song.photo}/>
                <div className="album_meta">
                    <span className="alb_label">{picked_song.playlist}</span>
                    <h1>{picked_song.name}</h1>
                </div>
                <div className="action_btns">
                    <button onClick={() => fav()} className="fav_btn">
                        <i className="far fa-heart fa-2x"></i>
                    </button>
                    <button onClick={() => fav()} className="fav_btn">
                        <i className="far fa-arrow-alt-circle-down fa-2x"></i>
                    </button>
                    <button onClick={() => fav()} className="fav_btn">
                        <i className="fas fa-ellipsis-h fa-2x"></i>
                    </button>
                </div>

            </div>
        )
    }
}

export default Actions