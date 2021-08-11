import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
export const MainScreen = (props) => {
    const slides = [
        {
            key: 1,
            title: 'Scan anything in HD, wherever you are...',
            text: 'Simply launch the AirScan app and scan any document, papers or real world photographs in seconds. ',
            backgroundColor: '#E5E5E5',
        },
        {
            key: 2,
            title: 'Navigate work documents like a Pro',
            text: 'Scan and organize your work documents in structured folders. Scan single or multiple documents in one swift go. Merge scans into PDFs, reorder pages and share them on the fly. ',
            backgroundColor: '#E5E5E5',
        },
        {
            key: 3,
            title: 'Less time scanning homework = more time for fun',
            text: 'Scanning of homework and assignments are a breeze with AirScan. Capture scans, generate PDFs and push them to any app installed on your phone. Its that easy!',
            backgroundColor: '#E5E5E5',
        },
        {
            key: 4,
            title: 'Covert Pictures to Text with our next generation offline OCR',
            text: 'Leverage our cutting edge machine learning OCR to convert documents to text in seconds with accurate results. Share OCR scans as Doc files or PDFs in seconds',
            backgroundColor: '#E5E5E5',
        }
    ];
    const _renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    }
    const _renderNextButton = () => {
        return (
            <View >
                <Text style={styles.text}>{"Next"}</Text>
            </View>
        );
    }
    const _renderDoneButton = () => {
        return (
            <View >
                <Text style={styles.text}>{"Done"}</Text>
            </View>
        );
    }
    return (
        <AppIntroSlider
            renderItem={_renderItem}
            data={slides}
            activeDotStyle={{ backgroundColor: "#49A6FC" }}
            renderNextButton={_renderNextButton}
            renderDoneButton={_renderDoneButton}
            onDone={() => props.navigation.navigate("SecondScreen")}
        />
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "SF Pro Rounded",
        fontSize: 18,
        color: "#000000",
        marginHorizontal: "5%",
        fontWeight: "500"
    },
    text: {
        fontFamily: "SF Pro Rounded",
        fontSize: 14,
        color: "#000000",
        marginTop: "5%",
        marginHorizontal: "5%",
        fontWeight: "500"
    }
});
