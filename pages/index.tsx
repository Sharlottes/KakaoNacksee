import { Box, Button, Divider, Grid, Stack, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import type { NextPage } from 'next'
import React from 'react'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Link from 'next/link';
import Image from 'next/image';

const Home: NextPage = () => {
  const [redirectUrl, setRedirectUrl] = React.useState("https://kakao-nacksee.vercel.app/trolled")
  const [duration, setDuration] = React.useState("10분간")
  const [maxMembers, setMaxMembers] = React.useState(2)
  const [Kakao, setKakao] = React.useState<typeof window.Kakao>(null)
  React.useEffect(() => {
    if (!window.Kakao.isInitialized()) window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    console.log(window.Kakao)
    setKakao(window.Kakao);
  }, []);

  const share = React.useCallback(() => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `선착순 선물 게임을 시작합니다! 기회는 단 ${duration}, 선착순 ${maxMembers}명에게!`,
        imageUrl: `https://kakao-nacksee.vercel.app/images/giftTitle.png`,
        imageWidth: 800, imageHeight: 600,
        link: {
          mobileWebUrl: "https://kakao-nacksee.vercel.app/redir?redirect=" + redirectUrl,
          webUrl: "https://kakao-nacksee.vercel.app/redir?redirect=" + redirectUrl,
        },
      },
      buttons: [
        {
          title: '지금 달려가기',
          link: {
            mobileWebUrl: "https://kakao-nacksee.vercel.app/redir?redirect=" + redirectUrl,
            webUrl: "https://kakao-nacksee.vercel.app/redir?redirect=" + redirectUrl,
          },
        },
      ],
    });
  }, [duration, maxMembers, Kakao?.Share, redirectUrl]);

  return (
    <Container>
      <Typography variant="h2" sx={{ fontWeight: 'bold' }}>Kakaolink Sender</Typography>
      <Typography variant="body1" sx={{ marginTop: '10px' }}>순수한 마음으로 선물을 좋아하는 사람들에게 가짜 선착순 선물을 보내고, 기쁜 마음으로 달려들 그들의 뒤통수를 시원하게 후려쳐보세요! </Typography>
      <Button variant="outlined" color="primary" onClick={share} sx={{ margin: '30px', marginLeft: 0 }}>저지르기!</Button>

      <Divider textAlign='left'><Typography sx={{ fontWeight: 'bold' }}>세부설정</Typography></Divider>

      <Grid container spacing={5} style={{ marginTop: '15px' }}>
        <Grid item>
          <Stack direction="column" spacing="10px" sx={{ width: 'max(300px, 30%)' }}>
            <TextField label="Redirect Url" onChange={(e => setRedirectUrl(e.target.value))} value={redirectUrl} variant="standard" />
            <div style={{ display: 'flex' }}>
              <TextField sx={{ marginRight: '5px' }} label="Amount" placeholder={maxMembers.toString()} type='number' onChange={(e => setMaxMembers(Number(e.target.value)))} value={maxMembers || ""} variant="standard" />
              <TextField sx={{ marginLeft: '5px' }} label="Duration" placeholder={duration} onChange={(e => setDuration(e.target.value))} value={duration} variant="standard" />
            </div>
          </Stack>
        </Grid>
        <Grid item>
          <Box sx={{ width: '250px', borderRadius: '15px', marginLeft: '20px' }}>
            <Image src='/images/giftTitle.png' width='250px' height='187.5px' alt='' style={{ borderRadius: '15px 15px 0px 0px' }} />
            <Typography variant='body2' sx={{ marginLeft: '10px', marginRight: '10px', fontSize: 12 }}>선착순 선물 게임을 시작합니다! 기회는 단 {duration}, 선착순 {maxMembers}명에게!</Typography>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <Link target="_blank" href={redirectUrl}>
                <Button color="inherit" sx={{ width: '95%', backgroundColor: "#F5F5F5", color: 'black', border: 'none' }} variant='outlined'>
                  <Typography sx={{ fontSize: 12 }}>지금 달려가기</Typography>
                </Button>
              </Link>
            </div>
            <div style={{ marginTop: '10px', marginLeft: '10px', marginRight: '10px', display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex' }}>
                <Image src='/images/kagift.png' width='12px' height='12px' alt='' style={{ border: 'solid 2px lightGray', borderRadius: '15px' }} />
                <Typography sx={{ color: '#999999', fontSize: 11, marginLeft: '5px' }}>선물 바로가기</Typography>
              </div>
              <ArrowForwardIosRoundedIcon sx={{ color: '#999999', width: '12px', height: '12px' }} />
            </div>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
