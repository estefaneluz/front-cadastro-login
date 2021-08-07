import './styles.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import FormCadastro from '../../components/FormCadastro';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      padding: "3vh 3vw",
      boxShadow: "0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12)",
      borderRadius: 16
    }
});

const Page = () => {
    const classes = useStyles();

    return (
        <div className="container">
            <Card className={classes.root}>
                <FormCadastro/>
            </Card>
        </div>
    );
}

export default Page;