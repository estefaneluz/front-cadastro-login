import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import useStyles from '../../styles/formStyles'
import Button from '@material-ui/core/Button';
import InputSenha from '../InputSenha';

const FormCadastro = () => {
    const classes = useStyles();

    return (
        <form className={classes.form}>
            <Typography className={classes.title} component="h2">
                Cadastro
            </Typography>
            <div className={classes.row}>
                <TextField className={classes.input} id="standard-basic" label="Nome" />
                <TextField className={classes.input} id="standard-basic" label="E-mail" type="email" />
            </div>
            <div clasName={classes.row}>
                <InputSenha id="senha" label="Senha"/>
                <InputSenha id="repetir-senha" label="Repita a Senha"/>
            </div>
            <Button type="submit" className={classes.button} variant="contained" color="primary">
                Cadastrar-se
            </Button>
        </form>
    );
}

export default FormCadastro