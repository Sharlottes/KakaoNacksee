import { Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";

const Trolled: NextPage = () => {
    return (
    <>
       <Head>
            <title>이런! 낚이셨군요!</title>
        </Head>
        <Typography variant="h3" width='100%' sx={{display: 'flex', justifyContent: 'center'}}>하하 낚시지롱!</Typography>
    </>
    )
}
export default Trolled;