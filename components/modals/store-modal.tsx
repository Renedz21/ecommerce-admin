"use client"

import { useStoreModal } from "@/hooks/use-store-modal"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod'
import axios from "axios"

import Modal from "@/components/common/modal"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import toast from "react-hot-toast"



const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required." }),
})

export const StoreModal = () => {

    const storeModal = useStoreModal()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    })

    const isLoading = form.formState.isSubmitting

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            await axios.post("/api/stores", data)
            toast.success("Store created successfully.")
        } catch (error) {
            toast.error("Something went wrong.")

        } finally {
            form.reset()
            storeModal.onClose()
        }
    }

    return (
        <Modal
            title="Create Store"
            description="Create a new store."
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            <div className="">
                <div className="space-y-4 pb-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Name
                                        </FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="Enter your store name" disabled={isLoading} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex items-center justify-end w-full pt-6 space-x-2">
                                <Button
                                    variant='destructive'
                                    onClick={storeModal.onClose}
                                    disabled={isLoading}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                >
                                    Create Store
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </Modal>
    )
}