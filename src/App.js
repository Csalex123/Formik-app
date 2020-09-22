import React from 'react';
import { Formik, Field, Form } from 'formik';


function App() {

    function onSubmit(values, actions) {
        console.log('SUBMIT', values);
    }

    function validate(values) {
        const erros = {};

        if (!values.name) {
            erros.name = 'Name é obrigatório';
        }

        if (!values.email) {
            erros.email = 'Email é obrigatório';
        }

        return erros;
    }

    return (
        <div>
            <Formik
                validate={validate}
                onSubmit={onSubmit}
                initialValues={{ name: '', email: '' }}
                render={({ values }) => (
                    <Form>
                        <div>
                            <label>Nome:</label>
                            <Field name="name" type="text" />
                       
                        </div>
                        <div>
                            <label>Email:</label>
                            <Field name="email" type="email" />
                  
                        </div>
                        <button type="submit">Enviar</button>
                    </Form>
                )} />
        </div>
    );
}

export default App;
