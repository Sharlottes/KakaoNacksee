import { useRouter } from 'next/router';
import { useEffect } from 'react';
import type { NextPage } from 'next'

const RedirectPage: NextPage = () => {
    const router = useRouter();
    if(router.query['redirect']) router.push({pathname: router.query['redirect'].toString()});

    useEffect(()=>{
        if(router.query['redirect']) router.push({pathname: router.query['redirect'].toString()});
    }, []);

    return <>리다이렉팅중...</>
}

export default RedirectPage;