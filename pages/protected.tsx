import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { getSession, useSession } from "next-auth/react"

export const getServerSideProps: GetServerSideProps = async (context) => {

    const currentSession = await getSession(context)

    return {
        props: {
            session: currentSession
        }
    }
}

const ProtectedPage: NextPage = ({session}:InferGetServerSidePropsType<typeof getServerSideProps>) => {


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