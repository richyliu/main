import * as React from 'react';
import { useState } from 'react';
import {
  default as withStyles,
  WithStyles,
  StyleRules
} from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import BasePage from 'src/global/BasePage';
import AddCardButton from './AddCardButton';

const styles: StyleRules = {
  card: {
    marginBottom: 20,
  },
};

interface Card {
  title: string;
  content: string;
  key: string;
}

const HomePage: React.FunctionComponent<WithStyles> = ({ classes }) => {
  const [pageTitle] = useState<string>('Home');
  const [displayBack] = useState<boolean>(false);
  const [cards, setCards] = useState<Card[]>([
    {
      title: 'First cards',
      content: 'This is the very first card that I added to this list',
      key: 'a8qf6fss33k',
    },
    {
      title: 'Second card',
      content: 'This is the second card I added. grammer mistakes.',
      key: '1w6suawo9zxj',
    },
  ]);

  const addCard = () =>
    setCards([
      ...cards,
      {
        title: 'foo',
        content: 'foo bar baz',
        key: Math.random()
          .toString(2)
          .slice(2),
      },
    ]);

  const removeCard = removeKey =>
    setCards(cards.filter(card => card.key !== removeKey));

  console.log(cards);

  return (
    <BasePage pageTitle={pageTitle} fab={<AddCardButton onClick={addCard} />}>
      {cards.map(({ title, content, key }) => (
        <Card key={key} className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5">
                {title}
              </Typography>
              <Typography>{content}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="outlined" color="primary">
              Share
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => removeCard(key)}
            >
              Delete
              <DeleteIcon />
            </Button>
          </CardActions>
        </Card>
      ))}
    </BasePage>
  );
};

export default withStyles(styles)(HomePage);
