import React from 'react';
import { Header, connectStyle } from 'native-base';

class customisedHeader extends React.Component {
    render() {
        const { children, style,backgroundColor } = this.props;
        return (
            <Header style={{...style.container,backgroundColor:backgroundColor}}>
                {children}
            </Header>
        );
    }
}

const styles = {
    container: {
        backgroundColor: 'transparent',
        height: 150,
    }
};
const screen = connectStyle("customisedHeader.Header", styles)(customisedHeader)
export { screen as Header }

