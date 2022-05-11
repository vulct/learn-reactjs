import React, {useRef, useState} from 'react';
import {FaMusic, FaHeart, FaCommentDots, FaShare} from "react-icons/fa";
import "./info.css"

// declare variable is status of video.
let videoPlayed = null;

// function using format form number to string with the character.
function nFormatter(num) {
    const lookup = [
        {value: 1, symbol: ""},
        {value: 1e3, symbol: "k"},
        {value: 1e6, symbol: "M"},
        {value: 1e9, symbol: "G"},
        {value: 1e12, symbol: "T"},
        {value: 1e15, symbol: "P"},
        {value: 1e18, symbol: "E"}
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function (item) {
        return num >= item.value;
    });
    return item ? (num / item.value).toFixed(2).replace(rx, "$1") + item.symbol : "0";
}


function Video({video, currIndex}) {

    const videoRef = useRef();


    const [isLike, setIsLike] = useState(false);

    const [itemVideo, setItemVideo] = useState(video);


    const handlePlay = (currIndex) => {
        const video = document.getElementById("video_" + currIndex);

        const videoPause = videoPlayed !== null ? document.getElementById("video_" + videoPlayed) : null;

        if (currIndex !== videoPlayed) {

            video.play();

            videoPlayed = currIndex;

            if (videoPause !== null) {
                videoPause.pause()
            }

        } else if (currIndex === videoPlayed && video.paused) {
            video.play();
        } else {
            video.pause();
        }

    }

    const handleLike = () => {

        setIsLike(!isLike)

        const likeCount = isLike ? -1 : 1;

        setItemVideo({
            ...itemVideo,
            stats: {
                ...itemVideo.stats,
                diggCount: itemVideo.stats.diggCount + likeCount
            }
        })

    }

    return (
        <div className="mt-2 mb-3">
            <div className="flex flex-row">
                <img className="w-[50px] h-[50px] rounded-full" src={itemVideo.author.avatarLarger} alt="avatar-user"/>
                <div className="ml-3 min-w-[70%]">
                    <div className="hover:cursor-pointer">
                        <a href="#">
                            <span
                                className="mr-0.5 font-bold text-lg hover:underline">{itemVideo.author.uniqueId}</span>
                            <span className="text-sm">{itemVideo.author.nickname}</span>
                        </a>
                    </div>
                    <div>
                        <p className="text-sm max-w-[280px]">
                            {itemVideo.desc}
                        </p>
                    </div>
                    <div className="flex flex-row items-center font-medium hover:cursor-pointer font-sm max-w-[280px]">
                        <FaMusic/>
                        <a href="#"
                           className="ml-1 hover:underline overflow-ellipsis overflow-hidden whitespace-nowrap">
                            <span>{itemVideo.music.title}</span>
                        </a>
                    </div>
                </div>
                <div>
                    <button
                        className="border border-[#fe2c55] text-[#fe2c55] rounded px-2.5 hover:bg-[#fe2c550f]">Follow
                    </button>
                </div>
            </div>
            <div className="relative">
                <video
                    id={"video_" + currIndex}
                    onClick={() => {
                        handlePlay(currIndex)
                    }}
                    ref={videoRef}
                    className="max-h-[600px] ml-[60px] rounded-xl mt-4 overflow-hidden mb-4"
                    src={itemVideo.video.downloadAddr}
                    loop={true}
                >
                </video>
                <div className="absolute top-[50%] right-[25%]">
                    <div className="pb-[10px]">
                        <div
                            onClick={handleLike}
                            className={isLike ? "!bg-red-500 video__button" : "video__button"}
                        >
                            <FaHeart className="inline-block"/>
                        </div>
                        <p className="text__info">{nFormatter(itemVideo.stats.diggCount)}</p>
                    </div>
                    <div className="pb-[10px]">
                        <div className="video__button cursor-pointer hover:bg-[##1618231a]">
                            <FaCommentDots className="inline-block"/>
                        </div>
                        <p className="text__info">{nFormatter(itemVideo.stats.commentCount)}</p>
                    </div>
                    <div className="pb-[10px]">
                        <div className="video__button cursor-pointer hover:bg-[##1618231a]">
                            <FaShare className="inline-block"/>
                        </div>
                        <p className="text__info">{nFormatter(itemVideo.stats.shareCount)}</p>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default Video;