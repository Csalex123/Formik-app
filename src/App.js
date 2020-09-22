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
                render={({ values, touched, isValid }) => (
                    <Form>
                        <div>
                            <Field label="Nome" name="name" type="text" />
                        </div>
                        <div>
                            <Field label="Email" name="email" type="email" />
                        </div>
                        <button type="submit" disabled={isValid} >Enviar</button>
                    </Form>
                )} />
        </div>
    );
}

export default App;
