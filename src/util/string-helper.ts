export namespace StringHelper {
	export const transformWithSpaces = (
		value: string | any,
		groupLength: number
	) => {
		const regex = "(.{" + groupLength + "})";
		return value
			.replace(/[^\dA-Z]/gi, "")
			.replace(new RegExp(regex, "g"), "$1 ")
			.trim();
	};

	/**
	 * Pads single digit values with a zero and trims leading zero for
	 * values of length more than 2
	 * @param value the string value
	 * @param retainSingleZero setting true will allow single zero value
	 * @returns
	 */
	export const padValue = (value: string, retainSingleZero?: boolean): string => {
		if (value === "0") {
			return retainSingleZero ? value : value.padStart(2, "0");
		}

		if (value === "") {
			return value;
		}

		const trimmedValue = parseInt(value);
		return trimmedValue.toString().padStart(2, "0");
	};
}

