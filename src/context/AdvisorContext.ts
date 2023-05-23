import { createContext} from "react";
export interface AdvisorContextType {
    sortBy: string;
    setSortBy: (event: string) => void
    status: {Online: boolean, Offline: boolean};
    handleStatusChange: (event: Object) => void;
    handleLanguageChange: (event: Object) => void;
    languages: {German: boolean, English: boolean, French: boolean, Spanish: boolean};
}
export const AdvisorContext = createContext<AdvisorContextType>(null!);