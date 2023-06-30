import { createContext } from "react";
// =============================================================================
// TYPINGS
// =============================================================================
// FUM = File Upload Manager
interface FileUploadContextValues {
    activeId?: string | undefined;
    setActiveId: (id: string) => void;
}

// =============================================================================
// CONTEXT
// =============================================================================
const DEFAULT_VALUES: FileUploadContextValues = {
    activeId: undefined,
    setActiveId: undefined,
};

export const FileUploadContext = createContext(DEFAULT_VALUES);
