"use client"

import { IModalProps } from "@/types"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const Modal = ({
    description,
    isOpen,
    onClose,
    title,
    children
}: IModalProps) => {

    const onChange = (open: boolean) => {
        if (!open) {
            onClose()
        }
    }

    return (
        <>
            <Dialog
                open={isOpen}
                onOpenChange={onChange}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {title}
                        </DialogTitle>
                        <DialogDescription>
                            {description}
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        {children}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Modal