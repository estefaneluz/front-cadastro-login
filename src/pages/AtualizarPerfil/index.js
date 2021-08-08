import { Typography, TextField, Button } from '@material-ui/core';
import InputSenha from '../../components/InputSenha';
import useStyles from '../../styles/formStyles';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import Header from '../../components/Header'

export default function AtualizarPerfil() {
    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    const classes = useStyles();
    const history = useHistory();

    return(
        <>
        <Header/>
        <form className={classes.form}>
            <Typography className={classes.title} component="h2">
                Atualizar Perfil
            </Typography>
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
            <div className="row">
                <Button className={classes.button} variant="contained" color="primary">
                    Atualizar
                </Button>
                <Button onClick={() => history.push("/home")} 
                color="primary" style={{textDecoration: "underline"}}>
                    Cancelar
                </Button>
            </div>
        </form>
        </>
    )
}