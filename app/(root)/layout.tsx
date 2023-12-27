import prismadb from "@/lib/prismadb";
import { IMainLayoutProps } from "@/types";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function SetupLayout({ children }: IMainLayoutProps) {

    const { userId } = auth()

    if (!userId) {
        redirect("/sign-in")
    }

    const store = await prismadb.store.findFirst({
        where: {
            userId,
        },
    })

    if (store) {
        redirect(`/${store.id}`)
    }

    return (
        <>
            {children}
        </>
    )
}