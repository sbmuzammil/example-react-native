import React from 'react'
import { Button, Text, Icon } from 'native-base'

const CustomisedButton = (props) => {
    const { label, icon, iconLeft, iconRight, ...btnProps } = props;
    let _iconLeft = (iconLeft === undefined && iconRight == undefined && icon != null) || iconLeft
    return (
        <Button iconLeft={_iconLeft} iconRight={iconRight} {...btnProps}>
            {icon !== null && _iconLeft && <Icon name={icon} />}
            <Text>{label}</Text>
            {icon !== null && iconRight !== undefined && <Icon name={icon} />}
        </Button>
    );
}
export { CustomisedButton as Button }