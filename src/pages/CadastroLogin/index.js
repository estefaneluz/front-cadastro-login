import './styles.css'
import { makeStyles } from '@material-ui/core/styles';
import { Card, Backdrop, CircularProgress, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import FormCadastro from '../../components/FormCadastro';
import { useState } from 'react';

const useStyles = makeStyles((theme)=>({
    root: {
      minWidth: 275,
      padding: "3vh 3vw",
      boxShadow: "0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12)",
      borderRadius: 16
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }
}));

const Page = () => {
    const classes = useStyles();
    const [carregando, setCarregando] = useState(false);
    const [requestErro, setRequestErro] = useState('');

    const fecharAlert = () => setRequestErro('')

    return (
        <div className="container">
            <Card className={classes.root}>
                <FormCadastro setRequestErro={setRequestErro} setCarregando={setCarregando}/>
            </Card>

            <Backdrop className={classes.backdrop} open={carregando} >
                <CircularProgress color="inherit" />
            </Backdrop>

            <Snackbar open={!!requestErro} autoHideDuration={6000} onClose={fecharAlert}>
                <Alert onClose={fecharAlert} severity="error">
                    {requestErro}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default Page;