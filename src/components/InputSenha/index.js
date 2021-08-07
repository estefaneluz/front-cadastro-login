import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@material-ui/core';
import clsx from 'clsx';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import useStyles from './styles'
import { useState } from 'react';

const InputSenha = (props) => {
    const classes = useStyles();
    const [mostrarSenha, setMostrarSenha] = useState();

    return (
    <FormControl className={clsx(classes.margin, classes.textField)}>
        <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
        <Input
        id={props.id}
        type={mostrarSenha ? 'text' : 'password'}
        className={classes.input}
        endAdornment={
            <InputAdornment position="end">
            <IconButton aria-label="Toggle password visibility" onClick={() => setMostrarSenha(!mostrarSenha)}>
                {mostrarSenha ? <Visibility /> : <VisibilityOff />}
            </IconButton>
            </InputAdornment>
        }
        />
    </FormControl>
    );
}

export default InputSenha