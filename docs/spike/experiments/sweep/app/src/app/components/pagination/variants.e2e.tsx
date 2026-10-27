"use client";
import { Pagination } from "@lifesg/react-design-system/pagination";

export default function Story() {
    return (
        <div className="story-column-container">
            <section>
                <h2>Default</h2>
                <Pagination
                    totalItems={100}
                    pageSize={10}
                    activePage={1}
                    showPageSizeChanger
                    data-testid="pagination-default"
                />
            </section>
            <section>
                <h2>Full</h2>
                <Pagination
                    totalItems={100}
                    pageSize={10}
                    activePage={1}
                    showPageSizeChanger
                    variant="full"
                    data-testid="pagination-full"
                />
            </section>
            <section>
                <h2>Compact</h2>
                <Pagination
                    totalItems={100}
                    pageSize={10}
                    activePage={1}
                    showPageSizeChanger
                    variant="compact"
                    data-testid="pagination-compact"
                />
            </section>
        </div>
    );
}
