"use client";
import { Pagination } from "@lifesg/react-design-system/pagination";

export default function Story() {
    return (
        <Pagination
            totalItems={100}
            pageSize={10}
            activePage={1}
            showPageSizeChanger
            data-testid="pagination-page-size"
        />
    );
}
