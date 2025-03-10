import { StyleSheet, Text, View,
    Button
 } from 'react-native'
import React from 'react'
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { hp } from '../helpers/common';

const video = () => {
    const videoSource = require('../assets/video/water.mp4')
  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.play();
  });
  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

  return (
    <View style={styles.contentContainer}>
      <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture={false} />
      <View style={styles.controlsContainer}>
        {/* <Button
          title={isPlaying ? 'Pause' : 'Play'}
          onPress={() => {
            if (isPlaying) {
              player.pause();
            } else {
              player.play();
            }
          }}
        /> */}
      </View>
    </View>
  )
}

export default video

const styles = StyleSheet.create({
    contentContainer: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 50,
      marginTop: hp(60)
    },
    video: {
      width: 350,
      height: 275,
    },
    controlsContainer: {
      padding: 10,
    },
  });