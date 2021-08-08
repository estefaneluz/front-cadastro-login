import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './styles.css'

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      height: 40,
    }
  }));

export default function Header(){
    const classes = useStyles();
    return (
        <header className="header">
            <h2>Olá, Fulano</h2>
            <Button size="small" variant="contained" color="secondary" className={classes.button}>
                Sair
            </Button>
        </header>
    );
}