import React, {useContext, useRef} from 'react';
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';
import '../Player.css'
import {Songs} from "../Context";

const Player = () => {
        const {song, handleSetSong} = useContext(Songs)

        const handleClickNext = () => {
            handleSetSong(song.id + 1)
        }

        const handleClickPrevious = () => {
            handleSetSong(song.id - 1)
        }

        return (
            <div>

                <AudioPlayer
                    className="player-music"
                    src={song.url}
                    layout="stacked-reverse"
                    showSkipControls={true}
                    showJumpControls={false}
                    onClickNext={handleClickNext}
                    onClickPrevious={handleClickPrevious}
                />
            </div>
        )
    }
;

export default Player;