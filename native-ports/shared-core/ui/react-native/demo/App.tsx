import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";
import { DateRangeInput, Button, LoadingSpinner } from "../src";
import { ThemeColours } from "../src/theme-constants";

// ---------------------------------------------------------------------------
// Simple star icon placeholder (no external icon lib required)
// ---------------------------------------------------------------------------
function StarIcon({ colour = ThemeColours.white }: { colour?: string }) {
    return (
        <Text
            style={{ fontSize: 14, color: colour, textAlign: "center" }}
            accessibilityElementsHidden
        >
            {"★"}
        </Text>
    );
}

export default function App() {
    const [output1, setOutput1] = useState("No selection yet");
    const [output2, setOutput2] = useState(
        "Start: 2026-07-01 | End: 2026-07-15"
    );
    const [output3, setOutput3] = useState("No selection yet");

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.scroll}>
                <Text style={styles.title}>Flagship React Native Port</Text>
                <Text style={styles.subtitle}>
                    Native RN implementation of DateRangeInput and Button.
                    Approach 3 pilot.
                </Text>

                {/* =======================================================
                    DATE RANGE INPUT DEMOS
                   ======================================================= */}
                <Text style={styles.groupHeading}>DateRangeInput</Text>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        DEFAULT (WITH DONE/CANCEL)
                    </Text>
                    <DateRangeInput
                        minDate="2024-01-01"
                        maxDate="2026-12-31"
                        onChange={(start, end) =>
                            setOutput1(`Start: ${start} | End: ${end}`)
                        }
                    />
                    <Text style={styles.output}>{output1}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>WITH INITIAL VALUES</Text>
                    <DateRangeInput
                        value="2026-07-01"
                        valueEnd="2026-07-15"
                        onChange={(start, end) =>
                            setOutput2(`Start: ${start} | End: ${end}`)
                        }
                    />
                    <Text style={styles.output}>{output2}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        AUTO-CONFIRM (NO BUTTONS)
                    </Text>
                    <DateRangeInput
                        withButton={false}
                        onChange={(start, end) =>
                            setOutput3(`Start: ${start} | End: ${end}`)
                        }
                    />
                    <Text style={styles.output}>{output3}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>DISABLED</Text>
                    <DateRangeInput disabled />
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>ERROR STATE</Text>
                    <DateRangeInput error />
                </View>

                {/* =======================================================
                    BUTTON DEMOS
                   ======================================================= */}
                <Text style={styles.groupHeading}>Button</Text>

                {/* --- Style types --- */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>STYLE TYPES</Text>
                    <View style={styles.buttonRow}>
                        <Button styleType="default">Default</Button>
                        <Button styleType="secondary">Secondary</Button>
                        <Button styleType="light">Light</Button>
                        <Button styleType="link">Link</Button>
                    </View>
                </View>

                {/* --- Sizes --- */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>SIZES</Text>
                    <View style={styles.buttonRow}>
                        <Button sizeType="large">Large</Button>
                        <Button sizeType="default">Default</Button>
                        <Button sizeType="small">Small</Button>
                    </View>
                </View>

                {/* --- Danger --- */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>DANGER</Text>
                    <View style={styles.buttonRow}>
                        <Button danger>Default danger</Button>
                        <Button styleType="secondary" danger>
                            Secondary danger
                        </Button>
                    </View>
                </View>

                {/* --- With icon --- */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>WITH ICON</Text>
                    <View style={styles.buttonRow}>
                        <Button icon={<StarIcon />}>Icon left</Button>
                        <Button icon={<StarIcon />} iconPosition="right">
                            Icon right
                        </Button>
                        <Button
                            styleType="secondary"
                            icon={
                                <StarIcon
                                    colour={ThemeColours.buttonSecondaryText}
                                />
                            }
                        >
                            Secondary
                        </Button>
                    </View>
                </View>

                {/* --- Icon-only --- */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>ICON ONLY</Text>
                    <View style={styles.buttonRow}>
                        <Button
                            icon={<StarIcon />}
                            sizeType="large"
                            aria-label="Large star"
                        />
                        <Button
                            icon={<StarIcon />}
                            sizeType="default"
                            aria-label="Default star"
                        />
                        <Button
                            icon={<StarIcon />}
                            sizeType="small"
                            aria-label="Small star"
                        />
                        <Button
                            styleType="secondary"
                            icon={
                                <StarIcon
                                    colour={ThemeColours.buttonSecondaryText}
                                />
                            }
                            aria-label="Secondary star"
                        />
                    </View>
                </View>

                {/* --- Loading --- */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>LOADING</Text>
                    <View style={styles.buttonRow}>
                        <Button loading icon={<StarIcon />}>
                            Loading
                        </Button>
                        <Button
                            styleType="secondary"
                            loading
                            icon={
                                <StarIcon
                                    colour={ThemeColours.buttonSecondaryText}
                                />
                            }
                        >
                            Loading
                        </Button>
                        <Button
                            loading
                            icon={<StarIcon />}
                            aria-label="Loading icon only"
                        />
                    </View>
                </View>

                {/* --- Disabled --- */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>DISABLED</Text>
                    <View style={styles.buttonRow}>
                        <Button disabled>Disabled</Button>
                        <Button styleType="secondary" disabled>
                            Disabled
                        </Button>
                        <Button styleType="light" disabled>
                            Disabled
                        </Button>
                        <Button styleType="link" disabled>
                            Disabled
                        </Button>
                    </View>
                </View>

                {/* --- Standalone LoadingSpinner --- */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>LOADING SPINNER</Text>
                    <View style={styles.buttonRow}>
                        <LoadingSpinner size={20} />
                        <LoadingSpinner size={32} />
                        <LoadingSpinner
                            size={40}
                            colour={ThemeColours.textPrimary}
                        />
                    </View>
                </View>

                <View style={{ height: 40 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#fafafa",
    },
    scroll: {
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 4,
        marginTop: 40,
    },
    subtitle: {
        fontSize: 14,
        color: "#666",
        marginBottom: 24,
    },
    groupHeading: {
        fontSize: 16,
        fontWeight: "700",
        color: ThemeColours.text,
        marginTop: 12,
        marginBottom: 8,
    },
    section: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#e0e0e0",
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: "600",
        letterSpacing: 0.5,
        color: "#999",
        marginBottom: 12,
    },
    output: {
        marginTop: 12,
        padding: 10,
        backgroundColor: "#f5f5f5",
        borderRadius: 4,
        fontSize: 13,
        fontFamily: "monospace",
        color: "#333",
    },
    buttonRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        alignItems: "center",
    },
});
