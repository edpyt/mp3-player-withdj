import React, {useContext} from "react";

import playerContext from "../../context/playerContext";

let Playlist = () => {
      const { SetCurrent, currentSong, songslist } = useContext(playerContext)

    if (songslist) {
        return (
            <div className="playlist">
                <ul className="loi">
                    {songslist.map((song, i) => {
                        return (
                            <li className={'songContainer ' + (currentSong===i?'selected':'')}
                            key={i}
                            onClick={ () => SetCurrent(i) }>
                                <div className="tmbn_song" style={{ backgroundImage: `url(${song.photo})` }}>
                                    <i className="fas fa-play"></i>
                                </div>
                                <div className="songmeta_playlist">
                                    <span className="songname">{song.name}</span>
                                    <span className="songauthors">{song.singer}</span>
                                </div>
                                <div className="playlist_btns_group">
                                    <button className="fav_song playlist_btn">
                                        <i className="far fa-heart fa-fg"></i>
                                    </button>
                                    <button className="options_song playlist_btn">
                                        <i className="fas fa-ellipsis-v fa-lg"></i>
                                    </button>
                                </div>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>)
    }
}

export default Playlist;