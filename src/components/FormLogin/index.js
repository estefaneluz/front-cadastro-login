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

    const onSubmit = async (data) => {
        setRequestErro('');
        setCarregando(true);

        const resposta = await fetch('https://revisao-m03.herokuapp.com/login',{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        });

        setCarregando(false);

        const dados = await resposta.json();

        if(resposta.ok){
            return history.push("/home");
        }

        setRequestErro(dados);
    }

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