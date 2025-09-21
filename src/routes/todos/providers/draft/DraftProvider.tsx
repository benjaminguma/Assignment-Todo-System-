import React, { PropsWithChildren, useState } from 'react'
import { useTodoCtx } from '../TodoContext';
import { TodoDraft } from '../../types';
import D from '@/shared/components/atoms/nav/D';
import { DraftContext } from './DraftContext';

function DraftProvider({ children }: PropsWithChildren) {
    const { state: { draft } } = useTodoCtx();
    const [draftState, setDraftState] = useState(draft)

    function updateDraft(data: Partial<TodoDraft>) {
        setDraftState(pd => ({ ...pd, ...data } as TodoDraft))
    }
    if (!draft) {
        return null
    }
    return <DraftContext.Provider value={{ draft: draftState!, updateDraft }}>
        {children}
    </DraftContext.Provider>

}

export default DraftProvider