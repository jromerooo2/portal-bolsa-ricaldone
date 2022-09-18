import axios from 'axios';
import Story from '../../components/story'
import React, {useEffect} from 'react';

export default function historial() {
  let storyReturn;
  let [story, setStory] = React.useState([]);
  let [user, setUser] = React.useState([]);
  
  const result = async () => {
    let data = await axios.get('/api/me');
    let user = await data.data.data.responseBd;
    let story = await axios.get('/api/story/' + user.idUser);
    storyReturn = story.data;
    setStory(storyReturn);
    setUser(user);
  }

  useEffect(() => {
    result();
  }, []);


  return (
    <>
      <Story storyData={story} user={user} />
    </>
  )
}

