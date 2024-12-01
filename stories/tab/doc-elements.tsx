import { Typography } from "src/typography";
import styled from "styled-components";

export const Content = styled.div`
    padding: 1.5rem;
`;

export const ContentA = () => (
    <Content>
        <Typography.HeaderMD>Section A</Typography.HeaderMD>
        <br />
        <Typography.BodyBL>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            commodo eget turpis sit amet luctus. Duis fringilla, libero ac
            eleifend vehicula, sem arcu mattis diam, eget pellentesque urna
            libero feugiat sem.
        </Typography.BodyBL>
    </Content>
);

export const ContentB = () => (
    <Content>
        <Typography.HeaderMD>Section B</Typography.HeaderMD>
        <br />
        <Typography.BodyBL>
            Donec metus augue, vulputate ut laoreet pretium, cursus sed odio.
            Aenean imperdiet sapien nec lectus gravida, vitae tincidunt sem
            feugiat. Nullam sit amet tortor purus. Sed eget nulla sapien. Proin
            a lacus pellentesque, facilisis augue quis, vestibulum sem.
        </Typography.BodyBL>
    </Content>
);

export const ContentC = () => (
    <Content>
        <Typography.HeaderMD>Section C</Typography.HeaderMD>
        <br />
        <Typography.BodyBL>
            Maecenas tempor dolor sit amet turpis interdum convallis. Nunc ut
            elit vitae justo placerat vulputate. Mauris varius sem in lectus
            vestibulum, sed porttitor nisi ultricies. Morbi quis commodo ipsum.
        </Typography.BodyBL>
    </Content>
);

export const ContentD = () => (
    <Content>
        <Typography.HeaderMD>Section D</Typography.HeaderMD>
        <br />
        <Typography.BodyBL>
            Nullam sit amet tortor purus. Sed eget nulla sapien. Proin a lacus
            pellentesque, facilisis augue quis, vestibulum sem. Nulla pretium
            gravida consectetur. Curabitur vestibulum erat nisi. Proin et
            accumsan purus. Donec blandit tortor risus, vitae tempus magna
            egestas nec.
        </Typography.BodyBL>
    </Content>
);
