import './styles.css'
import Header from '../../components/Header';
import Button from '@material-ui/core/Button';
import useStyles from '../../styles/formStyles';
import { useHistory } from 'react-router';

export default function Home() {
    const classes = useStyles();
    const history = useHistory();

    return (
        <>
        <Header/>
        <div className="container-home">
            <Button onClick={() => history.push("/atualizar")} 
            className={classes.button} variant="contained" color="primary">
                Atualizar Perfil
            </Button>
        </div>
        </>
    );
}
