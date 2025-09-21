import React, { useContext, useState } from 'react'
import { useTodoCtx } from '../providers/TodoContext'
import { TodoDraft } from '../types';
import { DraftContext } from '../providers/draft/DraftContext';

function useDraft() {
    return useContext(DraftContext)
}

export default useDraft