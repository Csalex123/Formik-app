import React from 'react';
import { useField } from 'formik';

import './Input.css';

const Input = ({ label, name, id, ...restProps }) => {
    const [field, meta] = useField({ name, id, ...restProps });
    return (
        <>
            {label && <label>{label}</label>}
            <input name={name} id={id ?? name} {...field} />
            {meta.error && (
                <span className="input-error">{meta.error}</span>
            )}
        </>
    );
};

export default Input;