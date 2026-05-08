import { importPathPreferencesRule } from "./import-path-preferences.rule.mjs";
import { noNegativeLinariaInterpolationRule } from "./no-negative-linaria-interpolation.rule.mjs";
import { styleNamespaceImportRule } from "./style-namespace-import.rule.mjs";

export default {
    rules: {
        "import-path-preferences": importPathPreferencesRule,
        "style-namespace-import": styleNamespaceImportRule,
        "no-negative-linaria-interpolation": noNegativeLinariaInterpolationRule,
    },
};
