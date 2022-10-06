import { useRouter } from 'next/router';
import { useEffect } from 'react';
import type { NextPage } from 'next'

const RedirectPage: NextPage = () => {
    const router = useRouter();

    useEffect(()=>{
        router.replace({pathname: (
            router.query['redirect'] || 
            router.asPath.match(new RegExp(`[&?]redirect=(.*)(&|$)`))?.[1] || 
            "/").toString()});
    }, []);

    return <>리다이랙팅중...</>
}

export default RedirectPage;