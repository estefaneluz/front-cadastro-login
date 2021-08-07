import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputSenha from '../InputSenha';
import useStyles from '../../styles/formStyles';
import { useForm } from 'react-hook-form';

const FormCadastro = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const classes = useStyles();

    const onSubmit = data => console.log(data);
    return (
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Typography className={classes.title} component="h2">
                Cadastro
            </Typography>
            <div className={classes.row}>
                <TextField 
                    {...register("nome", { required: true })}
                    className={classes.input} 
                    id="standard-basic" 
                    label="Nome" />
                <TextField 
                    {...register("email", { required: true })}
                    className={classes.input} 
                    id="standard-basic" 
                    label="E-mail" 
                    type="email" />
            </div>
            <div className={classes.row}>
                <InputSenha 
                    register={() => register("senha", { required: true })}
                    id="senha" 
                    label="Senha"
                />
                <InputSenha 
                    register={() => register("repetirSenha", { required: true })}
                    id="repetir-senha" 
                    label="Repita a Senha"
                />
            </div>
            <Button type="submit" className={classes.button} variant="contained" color="primary">
                Cadastrar-se
            </Button>
        </form>
    );
}

export default FormCadastro