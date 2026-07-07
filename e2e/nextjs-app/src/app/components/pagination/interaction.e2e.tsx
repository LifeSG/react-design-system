"use client";
import { Pagination } from "@lifesg/react-design-system/pagination";

export default function Story() {
    return (
        <div className="story-column-container">
            <button data-testid="focus-target-before">before</button>
            <Pagination
                totalItems={200}
                pageSize={10}
                activePage={10}
                showFirstAndLastNav
                showPageSizeChanger
                data-testid="pagination-middle"
            />
            <button data-testid="focus-target-after">after</button>
        </div>
    );
}
