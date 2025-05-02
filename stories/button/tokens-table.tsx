import styled, { useTheme } from "styled-components";
import { ThemeButton } from "../../src/theme/components/theme-helper";
import { ThemeButtonToken } from "../../src/theme/components/types";
import { ApiTable, ApiTableSectionProps } from "../storybook-common";

const ButtonToken = ({ token }: { token: keyof ThemeButtonToken }) => {
    const theme = useTheme();
    switch (token) {
        case "button-radius":
            return (
                <SwatchItem key={token}>
                    <Reference>{ThemeButton[token]({ theme })}</Reference>
                    <div>
                        <RadiusExample $radius={ThemeButton[token]} />
                    </div>
                </SwatchItem>
            );
        default:
            return (
                <Swatch>
                    <SwatchItem key={token}>
                        <Reference>{ThemeButton[token]({ theme })}</Reference>
                        <SwatchColour $colour={ThemeButton[token]} />
                    </SwatchItem>
                </Swatch>
            );
    }
};

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "",
                description: "This is the preset of this component",
            },
            {
                name: "button-radius",
                description: "",
                propTypes: [],
                defaultValue: <ButtonToken token={"button-radius"} />,
            },
            {
                name: "button-default-colour-bg",
                description: "",
                propTypes: [],
                defaultValue: (
                    <ButtonToken token={"button-default-colour-bg"} />
                ),
            },
            {
                name: "button-default-colour-text",
                description: "",
                propTypes: [],
                defaultValue: (
                    <ButtonToken token={"button-default-colour-text"} />
                ),
            },
            {
                name: "button-default-colour-bg-hover",
                description: "",
                propTypes: [],
                defaultValue: (
                    <ButtonToken token={"button-default-colour-bg-hover"} />
                ),
            },
            {
                name: "button-secondary-colour-text",
                description: "",
                propTypes: [],
                defaultValue: (
                    <ButtonToken token={"button-secondary-colour-text"} />
                ),
            },
            {
                name: "button-light-colour-text",
                description: "",
                propTypes: [],
                defaultValue: (
                    <ButtonToken token={"button-light-colour-text"} />
                ),
            },
            {
                name: "button-secondary-colour-border",
                description: "",
                propTypes: [],
                defaultValue: (
                    <ButtonToken token={"button-secondary-colour-border"} />
                ),
            },
        ],
    },
];

export const TokensTable = () => {
    return <ApiTable sections={DATA} />;
};

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface SwatchColourProps {
    $colour: string;
}

interface RadiusStyleProps {
    $radius: string;
}

const Swatch = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    gap: 0.25rem;
`;

const SwatchItem = styled.li`
    display: flex;
    justify-items: "";
    align-items: center;
    gap: 0.5rem;
`;

const SwatchColour = styled.div<SwatchColourProps>`
    flex-shrink: 0;
    height: 1.5rem;
    width: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    background: repeating-linear-gradient(
        135deg,
        #edefef 0px,
        #edefef 10px,
        #dde1e2 10px,
        #dde1e2 20px
    );
    background: ${(props) => props.$colour};
`;

const Reference = styled.div`
    font-family: monospace;
    font-size: 0.875rem;
    border-radius: 4px;
    padding: 0 0.5rem;
    color: #787878;
    width: 6rem;
`;

const RadiusExample = styled.div<RadiusStyleProps>`
    height: 48px;
    width: 128px;
    background: tomato;
    border-radius: ${(props) => props.$radius};
`;
