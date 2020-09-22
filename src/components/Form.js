import React, { useState } from 'react';


function Form() {
    const [values, setValues] = useState({
        name: ''
    });

    function onChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <div>
            <form>
                <div>
                    <label>Nome:</label>
                    <input name="name" type="text" value={values.name} onChange={onChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input name="email" type="email" value={values.email} onChange={onChange} />
                </div>
            </form>
        </div>
    );
}

export default Form;
