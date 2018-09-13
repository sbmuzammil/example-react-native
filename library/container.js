import React from 'react';
import { View, Dimensions } from 'react-native'
import { Container, connectStyle, StyleProvider } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

const BLUE_GRADIENT_COLOURS = ['#1DE3D5', '#9e73e8'];
const deviceHeight = Dimensions.get("window").height;

class customisedContainer extends React.Component {
    render() {
        const { children, style } = this.props;
        return (
            <LinearGradient
                colors={BLUE_GRADIENT_COLOURS}
                start={{ x: 1.0, y: 0.5 }}
                locations={[0.25, 1]}
            >
                <View style={{ height: deviceHeight }}>
                    <Container style={style.container}>
                        {children}
                    </Container>
                </View>
            </LinearGradient>
        );
    }
}

const styles = {
    container: {
        backgroundColor: 'transparent',
    }
};
const screen = connectStyle("commonColor.Container", styles)(customisedContainer)
export { screen as Container }

