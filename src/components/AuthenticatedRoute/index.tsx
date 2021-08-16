import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { toast } from "../../components/Toast";
interface Props {
    children: React.ReactNode;
}

const AuthenticatedRoute: React.FC<Props> = ({ children }) => {
    const router = useRouter()
    const authenticated = localStorage && JSON.parse(localStorage?.getItem('authenticated'))

    useEffect(() => {
        if (!authenticated) {
            toast.warn('User is not authenticated', null)
            router.push('/login')
        }

    }, [authenticated])


    return (<> {children}</>)
}
export default AuthenticatedRoute