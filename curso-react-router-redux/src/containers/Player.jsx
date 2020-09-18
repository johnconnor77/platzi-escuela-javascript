import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';
import NotFound from './NotFound';

const Player = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { id } = props.match.params;
  // eslint-disable-next-line react/destructuring-assignment
  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        {/* eslint-disable-next-line react/destructuring-assignment */}
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : <NotFound /> ;
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

// export default Player;
export default connect(mapStateToProps, mapDispatchToProps)(Player);
