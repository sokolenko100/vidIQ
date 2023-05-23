import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import { SCOUPES, VIDEOS_ENDPOINT, WEB_CLIENT_ID } from './constants';
import Error from './components/Error';
import Loading from './components/Loading';
import Video from './components/Video ';
import { styles } from './styles';

const VideosList = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
      offlineAccess: true,
      scopes: [SCOUPES],
    });
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsError(false);
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signInSilently();
      const {accessToken} = userInfo;
      fetch(VIDEOS_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        },
      }).then((response)=>response.json())
      .then((data)=>{
        setVideos(data.items);
        setIsLoading(false);
      })
  
    } catch (isError) {
      console.error(isError);
      setIsLoading(false);
      setIsError(true);
    }
  };

  const renderVideo = ({item}) => (
    <Video item={item}/>
  );

  if (isLoading) {
    return (<Loading/>);
  }

  if (isError) {
    return (<Error/>);
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={videos}
        keyExtractor={item => item.id}
        renderItem={renderVideo}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default VideosList;
