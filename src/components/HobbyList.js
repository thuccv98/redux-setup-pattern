import React from 'react';
import PropTypes from 'prop-types';
import './HobbyList.css';

const HobbyList = (props) => {
  const { hobbyList, activeId, onHobbyClick } = props;

  const handleClick = (hobby) => {
    if (onHobbyClick) {
      onHobbyClick(hobby);
    }
  };
  return (
    <ul className="hobby-list">
      {hobbyList.map((hobby) => (
        <li
          key={hobby.id}
          className={hobby.id === activeId ? 'active' : ''}
          onClick={() => handleClick(hobby)}
        >
          {hobby.title}
        </li>
      ))}
    </ul>
  );
};

HobbyList.propTypes = {
  hubbyList: PropTypes.array,
  activeId: PropTypes.number,
  onHobbyClick: PropTypes.func,
};
HobbyList.defaultProps = {
  HobbyList: [],
  activeId: null,
  onHobbyClick: null,
};

export default HobbyList;
