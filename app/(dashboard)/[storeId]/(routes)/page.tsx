import prismadb from "@/lib/prismadb";
import { DashboardPageProps } from "@/types";

export default async function DashboardPage({ params }: DashboardPageProps) {

    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId,
        },
    })

    return (
        <div>
            Active store is {store?.name}
        </div>
    )
}