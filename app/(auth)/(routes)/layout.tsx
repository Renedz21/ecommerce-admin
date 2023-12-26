import { IMainLayoutProps } from "@/types";

export default function AuthLayout({ children }: IMainLayoutProps) {
    return (
        <div className="h-full flex items-center justify-center">
            {children}
        </div>
    )
}