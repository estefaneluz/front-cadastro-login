import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import './styles.css'

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      height: 40,
    }
  }));

export default function Header(){
    const classes = useStyles();
    const history = useHistory();
    const {setToken} = useContext(AuthContext); 
    const sair = () => {
        setToken('');
        history.push("/")
    }
    return (
        <>
        <header className="header">
            <h2>Olá, Fulano</h2>
            <Button onClick={sair}
            size="small" variant="contained" color="secondary" className={classes.button}>
                Sair
            </Button>
        </header>
        </>
    );
}