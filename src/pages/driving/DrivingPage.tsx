import * as React from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core';

export default function() {
  const [fat, setFat] = useState<boolean>(true);

  return (
    <div>
      Driving page {fat ? 'true' : 'false'}
      <Button onClick={() => setFat(!fat)}>Toggle</Button>
    </div>
  );
}
