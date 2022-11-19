import React from 'react'

import type { NextPage } from 'next'
import Image from 'next/image'

import LeftArrowIcon from '../components/LeftArrowIcon'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Container from '@mui/system/Container'
import Divider from '@mui/material/Divider'
import GithubIcon from '../components/GithubIcon'
import KalingSendButton from '../components/KalingSendButton'

declare global {
  interface Window {
    Kakao: any;
  }
}

const Home: NextPage = () => {
  const [redirectUrl, setRedirectUrl] = React.useState("https://kakao-nacksee.vercel.app/trolled")
  const [duration, setDuration] = React.useState("10분간")
  const [maxMembers, setMaxMembers] = React.useState(2)

  return (
    <Container>
      <Typography variant="h2" sx={{ fontWeight: 'bold' }}>Kakaolink Sender</Typography>
      <Typography variant="body1" sx={{ marginTop: '10px' }}>순수한 마음으로 선물을 좋아하는 사람들에게 가짜 선착순 선물을 보내고, 기쁜 마음으로 달려들 그들의 뒤통수를 시원하게 후려쳐보세요! </Typography>
      <KalingSendButton duration={duration} maxMembers={maxMembers} redirectUrl={redirectUrl} />

      <Divider textAlign='left' sx={{ fontWeight: 'bold' }}>
        세부설정
      </Divider>

      <div style={{ padding: '15px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ width: 'max(300px, 30%)', margin: '20px' }}>
          <TextField sx={{ width: '100%' }} label="Redirect Url" onChange={(e => setRedirectUrl(e.target.value))} value={redirectUrl} variant="standard" />
          <div style={{ display: 'flex', margin: '10px auto' }}>
            <TextField sx={{ marginRight: '5px' }} label="Amount" placeholder={maxMembers.toString()} type='number' onChange={(e => setMaxMembers(Number(e.target.value)))} value={maxMembers || ""} variant="standard" />
            <TextField sx={{ marginLeft: '5px' }} label="Duration" placeholder={duration} onChange={(e => setDuration(e.target.value))} value={duration} variant="standard" />
          </div>
        </div>
        <div style={{ width: '250px' }}>
          <Image src='/images/giftTitle.png' width='250px' height='187.5px' alt='' style={{ borderRadius: '15px 15px 0px 0px' }} />
          <Typography variant='body2' sx={{ marginLeft: '10px', marginRight: '10px', fontSize: 12 }}>선착순 선물 게임을 시작합니다! 기회는 단 {duration}, 선착순 {maxMembers}명에게!</Typography>
          <div style={{ width: '100%', padding: '10px 0', textAlign: 'center', backgroundColor: "#F5F5F5", fontSize: 12 }}>
            <a href={redirectUrl}>지금 달려가기</a>
          </div>
          <div style={{ margin: '10px 10px', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex' }}>
              <Image src='/images/kagift.png' width='12px' height='12px' alt='' style={{ border: 'solid 2px lightGray', borderRadius: '15px' }} />
              <Typography sx={{ color: '#999999', fontSize: 11, marginLeft: '5px' }}>선물 바로가기</Typography>
            </div>
            <LeftArrowIcon style={{ color: '#999999', width: '12px', height: '12px' }} />
          </div>
        </div>
      </div>

      <Divider textAlign='left' sx={{ marginTop: '30px', fontWeight: 'bold' }}>
        링크
      </Divider>
      <div>
        <a href='https://github.com/sharlottes/kakaonacksee'>
          <GithubIcon />
          <span style={{ padding: '5px' }}>https://github.com/sharlottes/kakaonacksee</span>
        </a>
      </div>
    </Container >
  )
}

export default Home
