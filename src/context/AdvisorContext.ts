import { createContext} from "react";
export interface AdvisorContextType {
    sortBy: string;
    setSortBy: (event: string) => void
    status: {online: boolean, offline: boolean};
    handleChange: (event: Object) => void;
    handleLanguageChange: (event: Object) => void;
    languages: {german: boolean, english: boolean, french: boolean, spanish: boolean};
}
export const AdvisorContext = createContext<AdvisorContextType>(null!);