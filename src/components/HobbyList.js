import React from 'react';
import PropTypes from 'prop-types';

const HobbyList = (props) => {
  const { hobbyList } = props;

  return (
    <ul>
      {hobbyList.map((hobby) => (
        <li key={hobby.id}>{hobby.title}</li>
      ))}
    </ul>
  );
};

HobbyList.propTypes = {
  hubbyList: PropTypes.array,
};
HobbyList.defaultProps = {
  HobbyList: [],
};

export default HobbyList;
