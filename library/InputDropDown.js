import React from 'react'
import { Item, Input, Icon, Label, Picker } from 'native-base';
import PropTypes from 'prop-types';

class InputDropDown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: undefined
        }
    }
    _handleChange = (value) => {
        const { name, formik } = this.props;
        if (formik && formik.setFieldValue) {
            formik.setFieldValue(name, value);
            this.setState({
                selected: value
            });
        }
    }

    _handleBlur = () => {
        const { name, formik } = this.props;
        if (formik) {
            formik.setFieldTouched(name, true)
        }
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
        const { label, placeholder, disabled, dataSource, dataName, dataValue, ...rest } = this.props;
        const { error, success } = this._validateStaus();
        return (
            <Item>
                <Picker
                    mode="dropdown"
                    style={{ width: undefined }}
                    selectedValue={this.state.selected}
                    onValueChange={this._handleChange}
                    {...rest}
                >
                    {dataSource && dataSource.map(item => <Picker.Item key={item[dataValue]} label={item[dataName]} value={item[dataValue]} />)}
                </Picker>

                {success && <Icon active name='checkmark-circle' />}
                {error && <Icon active name='close-circle' onPress={this._handleReset} />}
            </Item>

        )
    }
}

InputDropDown.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    disabled: PropTypes.bool,
    dataSource: PropTypes.arrayOf(PropTypes.object),
    dataName: PropTypes.string.isRequired,
    dataValue: PropTypes.string.isRequired
};
InputDropDown.defaultTypes = {
    dataSource: []
}
export { InputDropDown };

// TextArea filed and dropdown field need to create.