import React, {useEffect, useState} from "react";
import axios from "axios";


const SongsList = () => {
    // const [songs, setSongs] = useState(null);
    //
    // useEffect(() => {
    //     retrieveSongs();
    // }, []);
    //
    // const retrieveSongs = () => {
    //     axios.get('http://localhost:8000/api/songs/')
    //         .then(response => {
    //             setSongs(response);
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // }
    return axios.get('http://localhost:8000/api/songs/')
}

export default SongsList;