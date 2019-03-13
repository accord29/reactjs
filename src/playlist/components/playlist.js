import React, { Component } from 'react';
import Media from './media.js';
import './playlist.css'
import FullScreen from '../../icons/components/full-screen';

function Playlist(props) {
  const playlist = props.data.categories[0].playlist
  return (
    <div className="Playlist">
      <FullScreen
        size={50}
        color="red"
      />
      {
        playlist.map((item) => {
          return <Media {...item} key={item.id} />
        })
      }
    </div>
  )
}

export default Playlist;