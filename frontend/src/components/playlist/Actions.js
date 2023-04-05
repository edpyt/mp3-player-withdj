import React from "react";
import SongsList from '../../context/songs'

const fav = () => {
    console.log('I like this one')
}

let Actions = () => {
    return (
        <div className="actions">
            <img
                src="http://127.0.0.1:8000/media/uploads/metal-gear-rising-revengeance/metal-gear-rising-revengeance-ost/mistral-theme/13_aqu1MnA.jpg"/>
            <div className="album_meta">
                <span className="alb_label">ALBUM</span>
                <h1>Mussorgsky's Pictures at an Exhibition</h1>
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

export default Actions