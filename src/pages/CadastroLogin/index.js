import './styles.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      padding: "5vh 7vw 7vw 7vh",
      boxShadow: "0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12)",
      borderRadius: 16
    },
    title: {
      fontSize: 14,
    },
  });

const Page = () => {
    const classes = useStyles();

    return (
        <div className="container">
            <Card className={classes.root}>
                sadasdasdas
            </Card>
        </div>
    );
}

export default Page;