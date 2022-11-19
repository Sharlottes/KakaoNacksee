import { useRouter } from 'next/router'
import React from 'react'
import type { NextPage } from 'next'

const RedirectPage: NextPage = () => {
    const router = useRouter();

    React.useEffect(() => {
        router.replace({
            pathname: (
                router.query['redirect'] ||
                router.asPath.match(new RegExp(`[&?]redirect=(.*)(&|$)`))?.[1] ||
                "/"
            ).toString()
        });
    }, [router]);

    return <>리다이렉팅중...</>
}

export default RedirectPage;