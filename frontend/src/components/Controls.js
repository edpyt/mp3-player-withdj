import React, {useState, useRef, useEffect, useContext} from "react";
import playerContext from "../context/playerContext";

let Controls = () =>{
    const {
        currentSong,
        songs,
        nextSong,
        prevSong,
        repeat,
        random,
        playing,
        toggleRandom,
        toggleRepeat,
        togglePlaying,
        handleEnd,
        songslist,
    } = useContext(playerContext)

    const [statevolum, setStateVolum] = useState(0.3)
    const [dur, setDur] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    const fmtMSS = (s) => {
        return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s
    }

    let audio = useRef('audio_tag')

    const handleVolume = (q) => {
        setStateVolum(q)
        audio.current.volume = q
    }

    const toggleAudio = () =>
        audio.current.paused ? audio.current.play() : audio.current.pause()

    const handleProgress = (value) => {
        let compute = (value * dur) / 100
        setCurrentTime(compute)
        audio.current.currentTime = compute
    }
    if (songslist) {
        return (
            <div className="controls">
                <audio ref={audio}
                       autoPlay
                       onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
                       onCanPlay={(e) => setDur(e.target.duration)}
                       onEnded={handleEnd}
                       type="audio/mpeg"
                       preload="true"
                       src={songslist[currentSong].mp3_file}/>
                <div className="vlme">
            <span className="volum">
                <i className="fas fa-volume-down"></i>
            </span>
                    <input
                        value={Math.round(statevolum * 100)}
                        type="range"
                        name="volBar"
                        id="volBar"
                        onChange={(e) => handleVolume(e.target.value / 100)}/>
                </div>
                <div className="musicControls">
            <span className="prev" onClick={prevSong}>
              <i className="fas fa-step-backward"></i>
            </span>

                    <span
                        className="play"
                        onClick={() => {
                            togglePlaying()
                            toggleAudio()
                        }}
                    >
              <span className={!playing ? '' : 'hide'}>
                <i className="fas fa-play"></i>
              </span>
              <span className={!playing ? 'hide' : ''}>
                <i className="fas fa-pause"></i>
              </span>
            </span>

            <span className="next" onClick={nextSong}>
                <i className="fas fa-step-forward"></i>
            </span>
                </div>

                <div className="progressb">
                    <div className="songMeta">
                        <span className="songtitle">{songslist[currentSong].name}</span>
                        <span className="songartistName">
                    {songslist[currentSong].singer}
                </span>
                    </div>
                    <progress
                        value={dur ? (currentTime * 100) / dur : 0}
                        max="100"
                        id="prgbar"
                        onClick={(e) =>
                            handleProgress(
                                ((e.clientX - e.target.offsetLeft) / e.target.offsetWidth) * 100,
                            )}
                    ></progress>
                    <span className="currentT">{fmtMSS(currentTime)}</span>/
                    <span className="totalT">{fmtMSS(dur)}</span>
                </div>

                <div className="plsoptions">
            <span
                onClick={toggleRandom}
                className={'random ' + (random ? 'active' : '')}
            >
              <i className="fas fa-random"></i>
            </span>
                    <span
                        onClick={toggleRepeat}
                        className={'repeat ' + (repeat ? 'active' : '')}
                    >
              <i className="fas fa-redo-alt"></i>
            </span>
                </div>

            </div>
        )
    }
}

export default Controls