import { NextPage } from "next";
import { useSession } from "next-auth/react"

const ProtectedPage: NextPage = () => {

    const { data: session, status } = useSession()

    if (!session) {
        return (
            <div>
                <p>Access Denied</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Protected Page</h1>
        </div>
    )
}

export default ProtectedPage