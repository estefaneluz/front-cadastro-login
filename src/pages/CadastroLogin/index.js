import './styles.css'
import { makeStyles } from '@material-ui/core/styles';
import { Card, Backdrop, CircularProgress, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import FormCadastro from '../../components/FormCadastro';
import FormLogin from '../../components/FormLogin';
import { useState } from 'react';

const useStyles = makeStyles((theme)=>({
    root: {
      display: "flex",
      columnGap: 120,
      minWidth: 275,
      padding: "5vh 8vw 7vh 5vw",
      boxShadow: "0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12)",
      borderRadius: 16
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }
}));

export default function CadastroLogin() {
    const classes = useStyles();
    const [carregando, setCarregando] = useState(false);
    const [requestErro, setRequestErro] = useState('');
    const [requestSucesso, setRequestSucesso] = useState('');

    const fecharAlert = () => { 
        setRequestErro('');
        setRequestSucesso('');
    }

    return (
        <div className="container">
            <Card className={classes.root}>
                <FormCadastro 
                    setRequestErro={setRequestErro} 
                    setRequestSucesso={setRequestSucesso}
                    setCarregando={setCarregando}
                />
                <hr />
                <FormLogin setRequestErro={setRequestErro} setCarregando={setCarregando}/>
            </Card>

            <Backdrop className={classes.backdrop} open={carregando} >
                <CircularProgress color="inherit" />
            </Backdrop>

            <Snackbar open={!!requestErro || !!requestSucesso} autoHideDuration={6000} onClose={fecharAlert}>
                <Alert onClose={fecharAlert} severity={!!requestSucesso ? "success" : "error"}>
                    {!!requestSucesso ? requestSucesso : requestErro}
                </Alert>
            </Snackbar>
        </div>
    );
}