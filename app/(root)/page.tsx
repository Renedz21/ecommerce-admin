"use client"

import { useStoreModal } from "@/hooks/use-store-modal";
import { UserButton } from "@clerk/nextjs";
import { useEffect } from "react";

export default function SetupPage() {

    const isOpen = useStoreModal(state => state.isOpen)
    const onOpen = useStoreModal(state => state.onOpen)

    useEffect(() => {
        if (!isOpen) {
            onOpen()
        }
    }, [
        isOpen,
        onOpen
    ])

    return (
        <div>
            This is a protected route
            <UserButton afterSignOutUrl="/" />
        </div>
    )
}