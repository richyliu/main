import * as React from 'react';
import {
  WithStyles,
  withStyles,
  StyleRulesCallback,
  Theme
} from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';

import BasePage from 'src/global/BasePage';
import AddCardButton from './AddCardButton';

const styles: StyleRulesCallback = (theme: Theme) => ({
  card: {
    marginBottom: 20,
  },
});

interface HomePageState {
  title: string;
  displayBack: boolean;
  cards: Array<{
    title: string;
    content: string;
    key: string;
  }>;
}

class HomePage extends React.Component<WithStyles, HomePageState> {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Home',
      displayBack: false,
      cards: [
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
      ],
    };
  }

  public addCard = () => {
    this.setState(({ cards }) => ({
      cards: cards.concat({
        title: 'foo',
        content: 'foo bar baz',
        key: Math.random()
          .toString(2)
          .slice(2),
      }),
    }));
  }

  public removeCard = (key: string) => {
    this.setState(({ cards }) => ({
      cards: cards.filter(card => card.key !== key),
    }));
  }

  public render() {
    const { title: pageTitle, displayBack, cards } = this.state;
    const { classes } = this.props;
    console.log(cards);

    return (
      <BasePage
        pageTitle={pageTitle}
        displayBack={displayBack}
        fab={<AddCardButton onClick={this.addCard}/>}
      >
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
                onClick={() => this.removeCard(key)}
              >
                Delete
                <DeleteIcon />
              </Button>
            </CardActions>
          </Card>
        ))}
      </BasePage>
    );
  }
}

export default withStyles(styles)(HomePage);
