import axios from 'axios';
import Story from '../../components/story'
import React, {useEffect} from 'react';

export default function historial() {
  let storyReturn;
  let [story, setStory] = React.useState([]);
  useEffect(() => {
    
    const result = async () => {
      let data = await axios.get('/api/me');
      let idUser = await data.data.data.responseBd.idUser;
      let story = await axios.get('/api/story/' + idUser);
      storyReturn = story.data;
      setStory(storyReturn);
    }
    result();
  }, [])


  return (
    <>
      <Story storyData={story} />
    </>
  )
}

