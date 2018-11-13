import * as React from 'react';
import { Button } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';

export default class AddCardButton extends React.PureComponent<{
  onClick: () => void;
}> {
  public render() {
    const { onClick } = this.props;

    return (
      <Button variant="fab" color="secondary" onClick={onClick}>
        <AddIcon />
      </Button>
    );
  }
}
