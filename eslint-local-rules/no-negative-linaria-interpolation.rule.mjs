export const noNegativeLinariaInterpolationRule = {
    meta: {
        type: "problem",
        docs: {
            description:
                "Disallow negative Linaria interpolations like -${token} in css templates.",
        },
        fixable: "code",
        schema: [],
        messages: {
            negativeLinariaInterpolation:
                "Avoid -${...} in Linaria css templates. Use calc(${...} * -1) instead.",
        },
    },
    create(context) {
        return {
            TaggedTemplateExpression(node) {
                // Only lint Linaria `css` tagged template literals.
                if (
                    node.tag.type !== "Identifier" ||
                    node.tag.name !== "css" ||
                    node.quasi.type !== "TemplateLiteral"
                ) {
                    return;
                }

                const template = node.quasi;
                for (let i = 0; i < template.expressions.length; i += 1) {
                    const beforeExpression = template.quasis[i]?.value?.raw;
                    if (!beforeExpression) continue;

                    // Detect patterns like `...: -${token};` where unary minus is
                    // applied before interpolation and compiles to invalid CSS values.
                    const negativePrefixMatch = beforeExpression.match(/-\s*$/);
                    if (negativePrefixMatch) {
                        const beforeMinus = beforeExpression.slice(
                            0,
                            beforeExpression.length -
                                negativePrefixMatch[0].length
                        );
                        const previousNonWhitespace =
                            beforeMinus.match(/\S\s*$/)?.[0]?.trim() || "";

                        // Only flag unary negatives like `: -${x}` or `(-${x}`.
                        // Skip binary subtraction contexts like `100% - ${x}`.
                        if (
                            previousNonWhitespace &&
                            ![":", "(", ","].includes(previousNonWhitespace)
                        ) {
                            continue;
                        }

                        context.report({
                            node: template.expressions[i],
                            messageId: "negativeLinariaInterpolation",
                            fix(fixer) {
                                const expression = template.expressions[i];
                                const negativePrefixLength =
                                    negativePrefixMatch[0].length;
                                // Replace from the trailing `-${` prefix to the closing `}`
                                // of the interpolation with `calc(${expr} * -1)`.
                                const replacementStart =
                                    expression.range[0] -
                                    negativePrefixLength -
                                    2;
                                const replacementEnd = expression.range[1] + 1;
                                const expressionText =
                                    context.sourceCode.getText(expression);

                                return fixer.replaceTextRange(
                                    [replacementStart, replacementEnd],
                                    `calc($\{${expressionText}} * -1)`
                                );
                            },
                        });
                    }
                }
            },
        };
    },
};
