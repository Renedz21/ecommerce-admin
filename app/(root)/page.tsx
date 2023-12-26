import { UserButton } from "@clerk/nextjs";

export default function SetupPage() {
    return (
        <div>
            This is a protected route
            <UserButton afterSignOutUrl="/" />
        </div>
    )
}