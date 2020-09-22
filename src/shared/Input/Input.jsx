import React from 'react';
import { useField } from 'formik';

import './Input.css';

const Input = ({ label, name, id, ...restProps }) => {
    const [field, meta] = useField({ name, id, ...restProps });
    return (
        <>
            {label && <label htmlFor={id ?? name} className="label">{label}</label>}
            <input
                className={`input ${meta.touched && meta.error && 'input--error'}`}
                name={name}
                id={id ?? name}
                {...restProps}
                {...field} />
            { meta.touched && meta.error && (
                <span className={`${meta.error && 'input-error'}`}>{meta.error}</span>
            )}
        </>
    );
};

export default Input;