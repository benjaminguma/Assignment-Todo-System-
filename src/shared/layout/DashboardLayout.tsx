import React, { PropsWithChildren } from 'react'
import Sidebar from './sidebar'

function DashboardLayout({ children }: PropsWithChildren) {
    return (
        <div className="">
            <Sidebar />
            {children}
        </div>
    )
}

export default DashboardLayout