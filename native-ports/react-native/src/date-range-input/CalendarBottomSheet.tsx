import React from "react";
import { Modal, View, Pressable, StyleSheet } from "react-native";

interface CalendarBottomSheetProps {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export function CalendarBottomSheet({
    visible,
    onClose,
    children,
}: CalendarBottomSheetProps) {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            <Pressable style={styles.overlay} onPress={onClose}>
                <Pressable style={styles.sheet} onPress={() => {}}>
                    {children}
                </Pressable>
            </Pressable>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        justifyContent: "flex-end",
    },
    sheet: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingBottom: 24,
        maxHeight: "70%",
    },
});
