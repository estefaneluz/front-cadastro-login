import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
      flexBasis: 200,
    },
    input: {
      width: 220
    }
  }));

export default useStyles;