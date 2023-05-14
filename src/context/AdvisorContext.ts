import { createContext} from "react";
export interface AdvisorContextType {
    sortBy: string;
    setSortBy: (event: string) => void
}
export const AdvisorContext = createContext<AdvisorContextType>(null!);