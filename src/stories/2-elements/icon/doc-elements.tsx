import React, { useState } from "react";
import styled from "styled-components";
import { Color, Icon, Input, Text } from "src/components";
import { IconType } from "src/components/types";

interface IconSetProps {
    items: IconType[];
}
export const IconSet = (props: IconSetProps) => {
    const renderIcons = () => {
        return props.items.map((item) => {
            return (
                <Item key={item}>
                    <StyledIcon type={item} />
                    <Label>{item}</Label>
                </Item>
            );
        });
    };

    return <Set>{renderIcons()}</Set>;
};

interface SearchFieldProps {
    data: IconType[];
}

export const SearchField = (props: SearchFieldProps) => {
    const [results, setResults] = useState<IconType[]>(null);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value as IconType;

        if (searchValue.length === 0) {
            setResults(null);
        } else {
            const searchResults = props.data.filter((value) =>
                value.includes(searchValue)
            );
            setResults(searchResults);
        }
    };

    const renderResults = () => {
        if (results.length === 0) {
            return <Text.XSmall>No results found.</Text.XSmall>;
        }

        return (
            <ResultBox>
                <Text.XSmall weight="semibold">{`${results.length} matching icon(s) found`}</Text.XSmall>
                <IconSet items={results} />
            </ResultBox>
        );
    };

    return (
        <SearchSection>
            <Input onChange={handleOnChange} placeholder="Search for an icon" />
            {results && <ResultSection>{renderResults()}</ResultSection>}
        </SearchSection>
    );
};

// =============================================================================
// STYLING
// =============================================================================
export const StyledIcon = styled(Icon)`
    font-size: 1.5rem;
`;

const Set = styled.ul`
    display: flex;
    flex-wrap: wrap;
`;

const Item = styled.li`
    display: flex;
    flex-direction: column;
    width: 9rem;
    height: 8rem;
    border: 1px solid ${Color.Neutral[6]};
    align-items: center;
    justify-content: center;
    background: white;
`;

const Label = styled(Text.XSmall)`
    margin-top: 0.75rem;
    margin-bottom: 0;
`;

const SearchSection = styled.div`
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 1rem 0;
    background: ${Color.Accent.Light[4]};
`;

const ResultSection = styled.div`
    margin: 1rem 0;
`;

const ResultBox = styled.div`
    display: flex;
    flex-direction: column;
`;
