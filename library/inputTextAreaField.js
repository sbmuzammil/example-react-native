import React from 'react'
import PropTypes from 'prop-types';
import { InputTextField } from './inputTextField';

const InputTextAreaField = (prop) => {
    return (
        <InputTextField {...prop} multiline />
    );
}

InputTextAreaField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    multiline: PropTypes.bool,
    numberOfLines: PropTypes.number
};

InputTextAreaField.defaultProps = {
    multiline: true,
    numberOfLines: 4
}

export { InputTextAreaField };