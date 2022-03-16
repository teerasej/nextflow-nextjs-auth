import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            
        }
    }
}

const ProtectedPage: NextPage = ({ }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    const router = useRouter()

    const onSignOut = () => {
       
    }

    return (
        <div>
            <h1>Protected Page</h1>
            <a onClick={onSignOut}>Sign out</a>
        </div>
    )
}

export default ProtectedPage