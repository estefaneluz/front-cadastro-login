import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputSenha from '../InputSenha';
import useStyles from '../../styles/formStyles';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const FormCadastro = ({setRequestErro, setCarregando}) => {
    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    const classes = useStyles();
    const history = useHistory();

    const onSubmit = async (data) => {
        if(data.senha !== data.repetirSenha){
            setError('senha', {type: 'validate'}, {shouldFocus: true});
            setError('repetirSenha', {type: 'validate'}, {shouldFocus: false});
            return;
        }

        setRequestErro('');
        setCarregando(true);
        const resposta = await fetch(
            'https://revisao-m03.herokuapp.com/usuarios', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json',
                }
            })
        setCarregando(false);

        if(resposta.ok){
            history.push('/home')
        }

        const message = await resposta.json()
        setRequestErro(message);
    }

    return (
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Typography className={classes.title} component="h2">
                Cadastro
            </Typography>
            <div className={classes.row}>
                <TextField 
                    {...register("nome", { required: true })}
                    className={classes.input} 
                    label="Nome" 
                    error={!!errors.nome}
                    />
                <TextField 
                    {...register("email", { required: true })}
                    className={classes.input} 
                    label="E-mail" 
                    type="email" 
                    error={!!errors.email}
                    />
            </div>
            <div className={classes.row}>
                <InputSenha 
                    register={() => register("senha", { required: true })}
                    id="senha" 
                    label="Senha"
                    error={!!errors.senha}
                />
                <InputSenha 
                    register={() => register("repetirSenha", { required: true })}
                    id="repetir-senha" 
                    label="Repita a Senha"
                    error={!!errors.repetirSenha}
                />
            </div>
            <Button type="submit" className={classes.button} variant="contained" color="primary">
                Cadastrar-se
            </Button>
        </form>
    );
}

export default FormCadastro