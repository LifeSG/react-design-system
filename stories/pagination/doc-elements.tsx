import React from "react";

export const CurrentPage = ({ page }: { page: number }) => (
    <div style={{ margin: "1rem 0", textAlign: "center" }}>
        Current page: {page}
    </div>
);
