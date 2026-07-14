import { StyleSheet } from "react-native";
import { ThemeColours } from "../theme-constants";

/**
 * Convenience alias kept for backward-compat with components that imported
 * `Colors` directly. New code should import `ThemeColours` instead.
 */
const Colors = {
    primary: ThemeColours.bgPrimary,
    primaryLight: ThemeColours.bgSelected,
    text: ThemeColours.text,
    textSubtle: ThemeColours.textSubtler,
    textDisabled: ThemeColours.textDisabled,
    border: ThemeColours.border,
    bg: ThemeColours.bg,
    bgHover: ThemeColours.bgHover,
    bgDisabled: ThemeColours.bgDisabled,
    error: ThemeColours.borderError,
    white: ThemeColours.white,
};

export { Colors };

export const dateRangeInputStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: ThemeColours.border,
        borderRadius: 4,
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: ThemeColours.bg,
        gap: 8,
    },
    containerFocused: {
        borderColor: ThemeColours.borderPrimary,
    },
    containerDisabled: {
        opacity: 0.5,
        backgroundColor: ThemeColours.bgDisabled,
    },
    containerError: {
        borderColor: ThemeColours.borderError,
    },
    separator: {
        color: ThemeColours.textDisabled,
        fontSize: 14,
    },
});

export const standaloneInputStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    input: {
        fontSize: 14,
        color: ThemeColours.text,
        textAlign: "center",
        padding: 0,
        minWidth: 24,
    },
    yearInput: {
        minWidth: 40,
    },
    divider: {
        color: ThemeColours.textDisabled,
        fontSize: 14,
        marginHorizontal: 1,
    },
    dividerActive: {
        color: ThemeColours.text,
    },
});

export const calendarManagerStyles = StyleSheet.create({
    container: {
        backgroundColor: ThemeColours.bg,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 8,
        paddingTop: 12,
        paddingBottom: 8,
    },
    navBtn: {
        width: 32,
        height: 32,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: ThemeColours.border,
        borderRadius: 4,
    },
    navBtnDisabled: {
        opacity: 0.3,
    },
    navBtnText: {
        fontSize: 18,
        color: ThemeColours.text,
    },
    headerLabels: {
        flexDirection: "row",
        gap: 4,
    },
    headerLabel: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    headerLabelText: {
        fontSize: 14,
        fontWeight: "600",
        color: ThemeColours.text,
    },
    headerLabelActive: {
        color: ThemeColours.textPrimary,
    },
    pickerGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 16,
        gap: 8,
    },
    pickerItem: {
        width: "30%",
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: ThemeColours.border,
        borderRadius: 4,
        alignItems: "center",
    },
    pickerItemSelected: {
        backgroundColor: ThemeColours.bgPrimary,
        borderColor: ThemeColours.borderPrimary,
    },
    pickerItemDisabled: {
        opacity: 0.3,
    },
    pickerItemText: {
        fontSize: 13,
        color: ThemeColours.text,
    },
    pickerItemTextSelected: {
        color: ThemeColours.white,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 8,
        padding: 8,
        borderTopWidth: 1,
        borderTopColor: ThemeColours.border,
    },
    cancelBtn: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: ThemeColours.border,
        borderRadius: 4,
    },
    cancelBtnText: {
        fontSize: 14,
        color: ThemeColours.text,
    },
    doneBtn: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 4,
        backgroundColor: ThemeColours.bgPrimary,
    },
    doneBtnDisabled: {
        opacity: 0.5,
    },
    doneBtnText: {
        fontSize: 14,
        color: ThemeColours.white,
    },
});

export const calendarStyles = StyleSheet.create({
    container: {
        padding: 8,
    },
    weekdayRow: {
        flexDirection: "row",
        marginBottom: 4,
    },
    weekdayLabel: {
        flex: 1,
        textAlign: "center",
        fontSize: 12,
        fontWeight: "600",
        color: ThemeColours.textSubtler,
        paddingVertical: 4,
    },
    weekRow: {
        flexDirection: "row",
    },
});

export const dayCellStyles = StyleSheet.create({
    cell: {
        flex: 1,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    cellInRange: {
        backgroundColor: ThemeColours.bgSelected,
    },
    cellSelectedStart: {
        backgroundColor: ThemeColours.bgPrimary,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    cellSelectedEnd: {
        backgroundColor: ThemeColours.bgPrimary,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    text: {
        fontSize: 14,
        color: ThemeColours.text,
    },
    textOtherMonth: {
        color: ThemeColours.textDisabled,
    },
    textToday: {
        fontWeight: "700",
        color: ThemeColours.textPrimary,
    },
    textDisabled: {
        color: ThemeColours.textDisabled,
        opacity: 0.5,
    },
    textSelected: {
        color: ThemeColours.white,
    },
});
