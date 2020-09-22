import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import schema from './schema';
import Field from './shared/Input';


function App() {

    function onSubmit(values, actions) {
        console.log('SUBMIT', values);
        actions.resetForm({ values: { name: "", email: "" } })
    }

    return (
        <div>
            <Formik
                validationSchema={schema}
                onSubmit={onSubmit}
                initialValues={{ name: '', email: '' }}
                render={() => (
                    <Form>
                        <div>
                            <Field label="Nome" id="name" name="name" type="text" placeholder="Digite o nome" />
                        </div>
                        <div>
                            <Field label="Email" id="email" name="email" type="email" placeholder="Digite o email" />
                        </div>
                        <button type="submit" >Enviar</button>
                    </Form>
                )} />
        </div>
    );
}

export default App;
