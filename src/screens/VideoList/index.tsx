import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const API_KEY = 'AIzaSyDnuRM_U29KoUYA-YQqw_OyHOq53XDhQE4';
// const TOKEN =
//   'ya29.a0AWY7CkluMkZS2Rz66Jc0T4XGwHFMU39OYYE_sfzH0U9Ch08vnLgeZxU29PY1x0S50c7POeCquu0Y5HT7rHjeljzPmBd-Jc6ovZ7TkM9RsVmQJMkunZe8e37bD6_qlTIM1vB8bsaq52KroMNMU8akuZ0DDoDibV7cZgaCgYKAdQSARESFQG1tDrp39Q6DF6BjY0wbhg1r4YDtw0169';

const VIDEOS_ENDPOINT = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=10&key=${API_KEY}`;

const VideosList = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: 'vidiq-386218',
      offlineAccess: true,
      scopes: ['https://www.googleapis.com/auth/youtube.readonly'],
    });
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signInSilently();
      const {accessToken} = userInfo;
      const response = await fetch(VIDEOS_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        },
      });
      const data = await response.json();
      setVideos(data.items);
      setIsLoading(false);
    } catch (isError) {
      console.error(isError);
      setIsLoading(false);
      setIsError(true);
    }
  };

  const renderVideo = ({item}) => (
    <TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={{uri: item.snippet.thumbnails.medium.url}}
          style={{width: 120, height: 90}}
        />
        <View style={{marginLeft: 12}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            {item.snippet.title}
          </Text>
          <Text style={{fontSize: 12, marginTop: 4}}>
            {item.snippet.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          padding: 16,
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={{flex: 1, backgroundColor: '#fff', padding: 16}}>
        <Text>
          An isError occurred while fetching the videos. Please try again later.
        </Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: '#fff', padding: 16}}>
      <FlatList
        data={videos}
        keyExtractor={item => item.id}
        renderItem={renderVideo}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 16}}
      />
    </View>
  );
};

export default VideosList;
