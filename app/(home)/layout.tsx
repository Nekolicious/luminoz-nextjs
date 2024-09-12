import { Sidebar } from "@/components/ui/navbar"
import { ReactNode } from "react"

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div className="flex flex-row min-h-screen max-h-screen min-w-screen bg-neutral-50 dark:bg-neutral-950 max-w-screen-auto mx-auto">
            <Sidebar />
            {children}
        </div>
    )
}