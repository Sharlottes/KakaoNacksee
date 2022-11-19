import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import type { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link';

const Trolled: NextPage = () => (
    <>
        <Head>
            <title>이런! 낚이셨군요!</title>
        </Head>
        <Typography variant="h3" width='100%' sx={{ display: 'flex', justifyContent: 'center' }}>하하 낚시지롱!</Typography>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Link href='/'>
                <Button variant="contained" color="primary" sx={{ marginTop: '30px' }}>나만 당할 순 없지!</Button>
            </Link>
        </div>
    </>
)

export default Trolled;