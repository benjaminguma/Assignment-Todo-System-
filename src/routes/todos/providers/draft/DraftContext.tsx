import { createContext, useContext } from "react";
import { TodoDraft } from "../../types";
import { todoDraftFactory } from "../../utils";



export type DraftContextType = {
    draft: TodoDraft;
    updateDraft(data: Partial<TodoDraft>): void
}

export const DraftContext = createContext<DraftContextType>({
    draft: todoDraftFactory(),
    updateDraft(data) {
    }
});


export const useDraftCtx = () => useContext(DraftContext)