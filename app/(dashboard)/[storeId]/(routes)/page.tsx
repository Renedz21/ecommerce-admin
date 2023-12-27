import prismadb from "@/lib/prismadb";
import { IStoreIdParamsProps } from "@/types";

export default async function DashboardPage({ params }: IStoreIdParamsProps) {

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