import React from 'react';

import IconButton from '@material-ui/core/IconButton';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

interface BackButtonProps {
  onClose: () => void;
}

const BackButton: React.FunctionComponent<BackButtonProps> = ({ onClose }) => (
  <IconButton onClick={onClose} color="inherit">
    <ArrowBackIcon />
  </IconButton>
);

export default BackButton;
