"use client";
import { Pagination } from "@lifesg/react-design-system/pagination";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Pagination
                totalItems={200}
                pageSize={10}
                activePage={1}
                data-testid="pagination-first"
            />
            <Pagination
                totalItems={200}
                pageSize={10}
                activePage={10}
                data-testid="pagination-middle"
            />
            <Pagination
                totalItems={200}
                pageSize={10}
                activePage={20}
                data-testid="pagination-last"
            />
        </div>
    );
}
