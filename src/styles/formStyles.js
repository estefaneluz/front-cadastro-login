import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 40
    },
    title: {
      fontFamily: "serif",
      fontWeight: 500,
      textAlign: "center",
      fontSize: 32,
    },
    button: {
        backgroundColor: "#007DFF",
        "&:hover": {
            backgroundColor: "#0070E4"
        } 
    },
    row: {
        display: "flex",
        columnGap: 30
    }
});

export default useStyles;