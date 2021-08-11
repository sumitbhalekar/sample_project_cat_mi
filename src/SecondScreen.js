import React from 'react';
import {
    StyleSheet,
    Text,
    View, Image,
} from 'react-native';

export const SecondScreen = (props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={{ flexDirection: "row" }}>
                <View>
                    <Text style={styles.title}>
                        {"Good Evening"}
                    </Text>
                    <Text style={styles.title1}>
                        {"Welcome Back"}
                    </Text>
                </View>
                <View style={styles.icon1}>
                    <Image source={require("./assets/Vector.png")} />
                </View>
            </View>
            <View style={styles.icon2}>
                <Image source={require("./assets/PremiumBanner.png")} />
            </View>
            <View style={styles.searchBox}>
                <Image source={require("./assets/Vector1.png")} />
                <Text>
                    {"Search through your scans"}
                </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: "10%" }}>
                <View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Image source={require("./assets/Vector2.png")} />
                    </View>
                    <Text style={styles.title3}>
                        {"Single Scan"}
                    </Text>
                </View>

                <View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Image source={require("./assets/Vector2.png")} />
                        <Image source={require("./assets/Vector3.png")} style={{ marginLeft: "32%", position: "absolute" }} />
                    </View>
                    <Text style={styles.title3}>
                        {"Batch Scan"}
                    </Text>
                </View>

                <View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Image source={require("./assets/Vector2.png")} />
                        <Image source={require("./assets/Vector3.png")} style={{ marginLeft: "22%", position: "absolute" }} />
                    </View>
                    <Text style={styles.title3}>
                        {"Batch Scan"}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    title: {
        fontFamily: "SF Pro Rounded",
        fontSize: 34,
        color: "#000000",
        marginHorizontal: "5%",
        fontWeight: "500"
    },
    title1: {
        fontFamily: "SF Pro Rounded",
        fontSize: 18,
        color: "#9B9B9B",
        marginHorizontal: "5%",
        fontWeight: "500"
    },
    title3: {
        fontFamily: "SF Pro Rounded",
        fontSize: 12,
        color: "#000000",
        fontWeight: "500"
    },
    icon1: {
        width: "20%",
        marginLeft: "10%",
        justifyContent: "center",
    },
    icon2: {
        marginTop: "10%",
        justifyContent: "center",
        alignItems: "center"
    },
    searchBox: {
        flexDirection: "row",
        marginTop: "10%",
        justifyContent: "space-evenly",
        marginHorizontal: "5%",
        backgroundColor: "#FFFFFF",
        borderRadius: 60, padding: 15
    }
});
