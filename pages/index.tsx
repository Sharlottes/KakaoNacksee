import { Box, Button, Typography } from '@mui/material'
import { Container } from '@mui/system'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const [Kakao, setKakao] = useState<typeof window.Kakao>(null)
  const router = useRouter()
  useEffect(()=>{
    setKakao(window.Kakao);
  }, []);

  const share = () => {
    Kakao.Share.createDefaultButton({
      container: '#kakaotalk-sharing-btn',
      objectType: 'feed',
      content: {
        title: '선착순 선물 게임을 시작합니다! 기회는 단 10분간, 선착순 2명에게!',
        imageUrl: `${router.pathname}/images/giftTitle.png`,
        link: {
          mobileWebUrl: `${router.pathname}/trolled`,
          webUrl: `${router.pathname}/trolled`,
        },
      },
      buttons: [
        {
          title: '지금 달려가기',
          link: {
            mobileWebUrl: `${router.pathname}/trolled`,
            webUrl: `${router.pathname}/trolled`,
          },
        },
      ],
    });
  }

  return (
  <Container>
    <Typography variant="h3" width='100%' sx={{display: 'flex', justifyContent: 'center'}}>Kakaolink Sender</Typography>
    <Box sx={{marginTop: '30px'}}>
      <Button id="kakaotalk-sharing-btn" variant="outlined" color="primary" onClick={share}>저지르기!</Button>
    </Box>
  </Container>
  )
}

export default Home
