import React from 'react';
import './App.css';
import Video from "./components/Video";
import listVideo from "./data/list.json";



function App() {

    // get videos list from file json.
    const videos = listVideo.items;

    return (
        <div className="m-auto w-[692px] max-w-[692px]">
            {videos
                // get all videos with video width <= 576
                .filter(video => video.video.width <= 576)
                .map((value, index) => (
                <Video
                    key={value.id}
                    video={value}
                    currIndex={index}
                />
            ))}
        </div>)
}

export default App;
