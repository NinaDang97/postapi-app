import React from 'react';

const TextInput = (props) => <input type='text' {...props} />;
const TextArea = (props) => <textarea rows='5' {...props}></textarea>

const Input = (props) => {
    const { input, meta: { error, touched }, label, type } = props;
    return (
        <div>
            <label htmlFor={input.name}>{label}:</label><br />
            {type === 'text' ? <TextInput {...input} /> : <TextArea {...input} />}
            <div className='err-msg'>
                {touched && error ? <span>{error}</span> : null}
            </div>
        </div>
    )
} 

export default Input;