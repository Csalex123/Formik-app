import * as Yup from 'yup';

const messages = {
    required: 'Campo obrigatório',
    email: 'Endereço de e-mail inválido',
    min: 'O nome deve conter no mínimo 2 caracteres'
}

export default Yup.object().shape({
    name: Yup.string().min(2, messages.min).required(messages.required),
    email: Yup.string().email(messages.email).required(messages.required),
});