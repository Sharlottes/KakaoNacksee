import { useRouter } from 'next/router';
import { useEffect } from 'react';
import type { NextPage } from 'next'

const RedirectPage: NextPage = () => {
    const router = useRouter();

    useEffect(()=>{
        window.open(router.query['redirect']?.toString());
    }, []);

    return <>리다이랙팅중...</>
}

export default RedirectPage;
