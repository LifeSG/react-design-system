"use client";
import { Pagination } from "@lifesg/react-design-system/pagination";

export default function Story() {
    return (
        <div className="story-column-container">
            <Pagination
                totalItems={50}
                pageSize={10}
                activePage={1}
                showFirstAndLastNav
                data-testid="pagination-first"
            />
            <Pagination
                totalItems={50}
                pageSize={10}
                activePage={3}
                showFirstAndLastNav
                data-testid="pagination-middle"
            />
            <Pagination
                totalItems={50}
                pageSize={10}
                activePage={5}
                showFirstAndLastNav
                data-testid="pagination-last"
            />
        </div>
    );
}
