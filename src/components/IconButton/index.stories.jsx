import React from 'react';
import { IconButton } from './index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserSecret,
  faCoffee,
  faAmbulance,
} from '@fortawesome/free-solid-svg-icons';

export default { title: 'Components/IconButton' };
export const UserSecretExample = () => {
  return (
    <IconButton>
      <FontAwesomeIcon icon={faUserSecret} />
    </IconButton>
  );
};

export const CoffeeExample = () => {
  return (
    <IconButton>
      <FontAwesomeIcon icon={faCoffee} />
    </IconButton>
  );
};

export const AmbulanceExample = () => {
  return (
    <IconButton>
      <FontAwesomeIcon icon={faAmbulance} />
    </IconButton>
  );
};
