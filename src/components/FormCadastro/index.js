import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import useStyles from '../../styles/formStyles'
import Button from '@material-ui/core/Button';

const FormCadastro = () => {
    const classes = useStyles();

    return (
        <form className={classes.form}>
            <Typography className={classes.title} component="h2">
                Cadastro
            </Typography>
            <div className={classes.row}>
                <TextField id="standard-basic" label="Nome" />
                <TextField id="standard-basic" label="E-mail" type="email" />
            </div>
            <Button type="submit" className={classes.button} variant="contained" color="primary">
                Cadastrar-se
            </Button>
        </form>
    );
}

export default FormCadastro