import React, { useMemo } from 'react'
import { dummyAssignees } from '../static'
import { Assignee } from '../types'

function useAssignees() {
    const assigneesMap: Map<string, Assignee> = useMemo(() => {
        const map = new Map<string, Assignee>()
        dummyAssignees.forEach(assignee => {
            map.set(assignee.id, assignee)
        })
        return map
    }, [])
    return {
        assignees: dummyAssignees,
        assigneesMap
    }
}

export default useAssignees