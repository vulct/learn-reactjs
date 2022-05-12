import Navbar from "./components/Navbar";
import DetailsSong from "./components/DetailsSong";
import ListSongs from "./components/ListSongs";
import Player from "./components/Player";
import DataSongs from './data/songs.json'
import {Songs} from './Context'
import {useState} from "react";

function App() {
    const [song, setSong] = useState(DataSongs[0]);

    const handleSetSong = (idSong) => {
        const song = DataSongs.find(song => song.id === idSong);
        if (!song)
            setSong(DataSongs[0])
        else
            setSong(song)
    }

    return (
        <div className="App">
            <Songs.Provider value={{DataSongs, song, handleSetSong}}>
                <Navbar/>
                <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
                    <DetailsSong/>
                    <ListSongs/>
                </div>
                <Player/>
            </Songs.Provider>
        </div>
    );
}

export default App;
