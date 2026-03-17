"use client";

import { Pagination } from "@lifesg/react-design-system/pagination";

export default function Story() {
    return (
        <Pagination totalItems={30} activePage={1} onPageChange={() => {}} />
    );
}
