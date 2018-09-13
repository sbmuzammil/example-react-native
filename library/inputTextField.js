import React from 'react'
import { Item, Input, Icon, Label, Text } from 'native-base';
import PropTypes from 'prop-types';

class InputTextField extends React.Component {

    _handleChange = (value) => {
        const { name, formik, onChangeText } = this.props;
        if (formik && formik.setFieldValue)
            formik.setFieldValue(name, value);
        else if (onChangeText) {
            onChangeText(name, value);
        }
    }

    _getValue = () => {
        const { name, formik, value } = this.props;
        return formik !== undefined ? formik.values[name] : value ? value : "";
    }

    _handleBlur = (value) => {
        const { name, formik, onBlur } = this.props;
        if (formik) {
            formik.setFieldTouched(name, true)
        }
        else if (onBlur)
            onBlur(name, value);
    }

    _validateStaus = () => {
        const { name, formik } = this.props;
        const message = formik !== undefined ? (formik.touched[name] && formik.errors[name]) : null;
        const error = message ? true : false;
        const success = !error && formik.touched[name];
        return { message, error, success };
    }

    _handleReset = () => {
        const { name, formik } = this.props;
        formik.setFieldValue(name, null);
        formik.setFieldTouched(name, false)
    }

    render() {
        const { label, secureTextEntry, multiline, numberOfLines, keyboardType, placeholder, disabled, ...rest } = this.props;
        const { message, error, success } = this._validateStaus();
        return (
            <React.Fragment>
                <Item floatingLabel error={error} success={success} disabled={disabled} {...rest}>
                    <Label>{label}</Label>
                    <Input numberOfLines={numberOfLines} multiline={multiline} secureTextEntry={secureTextEntry} onChangeText={this._handleChange}
                        disabled={disabled} placeholder={placeholder} value={this._getValue()} onBlur={this._handleBlur}
                    />
                    {success && <Icon active name='checkmark-circle' />}
                    {error && <Icon active name='close-circle' onPress={this._handleReset} />}
                </Item>
            </React.Fragment>
        )
    }
}

InputTextField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    disabled: PropTypes.bool
};

export { InputTextField };

// TextArea filed and dropdown field need to create.