import React from 'react';
import PropTypes from 'prop-types';
import './AchieveComponent.styles.css';
import keyImage from '../../assets/images/icons/kye-icon.svg';
import xImage from '../../assets/images/icons/cross-icon.svg';
import timerImage from '../../assets/images/icons/timer-icon.svg';
import cupImage from '../../assets/images/icons/kup-icon.svg';

export default function Achievement({ achieveTask, Ranking, timeSpent }) {
  const minutes = Math.floor(timeSpent / 1);

  return (
    <div className="achieveMain">
      <div className="AchieveBox">
        <div className="AchieveCircle">
          <img src={keyImage} alt="keyImage" />
        </div>
        <div>
          <p className="wireframes">{achieveTask}</p>
        </div>
      </div>

      <div className="AchieveBox">
        <div className="AchieveCircle">
          <img src={xImage} alt="xImage" />
        </div>
        <div>
          <p className="wireframes">{5 - achieveTask}</p>
        </div>
      </div>
      <div className="AchieveBox">
        <div className="AchieveCircle">
          <img src={timerImage} alt="timerImage" />
        </div>
        <div>
          <p className="wireframes">{`${minutes}`} min</p>
        </div>
      </div>
      <div className="AchieveBox">
        <div className="AchieveCircle">
          <img src={cupImage} alt="cupImage" />
        </div>
        <div>
          <p className="wireframes">{Ranking}</p>
        </div>
      </div>
    </div>
  );
}
Achievement.propTypes = {
  achieveTask: PropTypes.number.isRequired,
  Ranking: PropTypes.number.isRequired,
  timeSpent: PropTypes.number.isRequired,
};
