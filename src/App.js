import React from 'react';
import { Formik, Field, Form } from 'formik';


function App() {

    function onSubmit(values, actions) {
        console.log('SUBMIT', values);
    }

    return (
        <div>
            <Formik
                onSubmit={onSubmit}
                initialValues={{ name: '', email: '' }}
                render={({ values, handleSubmit }) => (
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
