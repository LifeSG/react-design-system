export const inputCode = `

import { V2_TextList } from "@lifesg/react-design-system/v2_text-list";


<V2_TextList.Ul bulletType="circle">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
</V2_TextList.Ul>;


`;

export const expectedOutputCode = `

import { TextList } from "@lifesg/react-design-system/text-list";


<TextList.Ul bulletType="circle">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
</TextList.Ul>;


`;
