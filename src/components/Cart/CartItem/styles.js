import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  cartItem: {
    width: "345px"
  },
  media: {
    height: 240,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));