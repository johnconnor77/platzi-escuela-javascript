import {useState, useEffect} from 'react';

const useInitialState = (API) => {
  const [ videos, setVideos] = useState({mylist: [], trends: [], originals: []});
  useEffect(()=>{
    fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []) // el empty array evita un ciclo infinito

  return videos;
  console.log(videos)
}


export default useInitialState;