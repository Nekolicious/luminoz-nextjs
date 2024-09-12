import { Sidebar } from "@/components/navbar"
import { ReactNode } from "react"

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div className="flex flex-row min-h-screen min-w-screen">
            <Sidebar />
            {children}
        </div>
    )
}