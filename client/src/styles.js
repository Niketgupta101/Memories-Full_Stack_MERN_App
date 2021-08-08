import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5rem',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    fontSize: '45px',
  },
  image: {
    marginLeft: '15px',
    height: '50px',
    width: '55px',
  },
  [theme.breakpoints.down('sm')]:{
    mainContainer: {
      flexDirection:'column-reverse',
    },
  }
}));