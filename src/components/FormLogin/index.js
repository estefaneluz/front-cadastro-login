import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputSenha from '../InputSenha';
import useStyles from '../../styles/formStyles';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

export default function FormLogin({setRequestErro, setCarregando}){
    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    const classes = useStyles();
    const history = useHistory();

    const onSubmit = (data) => console.log(data);

    return(
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Typography className={classes.title} component="h2">
                Login
            </Typography>

            <TextField 
                {...register("email", { required: true })}
                className={classes.input} 
                label="E-mail" 
                type="email" 
                error={!!errors.email}
            />
            <InputSenha 
                register={() => register("senha", { required: true })}
                id="senha-login" 
                label="Senha"
                error={!!errors.senha}
            />
            <Button type="submit" className={classes.button} variant="contained" color="primary">
                Entrar
            </Button>
        </form>
    );
}