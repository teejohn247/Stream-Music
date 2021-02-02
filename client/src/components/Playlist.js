import React from 'react';
import Audio from 'react-audioplayer';
// In your render() function:

var somePlaylist = {
    name: 'Tempered Song', // song name
    src: "http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3", // song source address
    img: "", // (optional) song image source address
    comments: {
        time: "number",
        content: "string"
      }
    }

const Playlist = () => (
 
<Audio
  width={600}
  height={400}
  autoPlay={true}
  playlist={somePlaylist}
/>

)

export default Playlist;
