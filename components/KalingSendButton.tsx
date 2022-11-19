import React from 'react'
import Button from '@mui/material/Button'

export interface KalingSendButtonProps {
  redirectUrl: string,
  duration: string,
  maxMembers: number
}

const KalingSendButton: React.FC<KalingSendButtonProps> = ({
  redirectUrl,
  duration,
  maxMembers
}) => {
  const [Kakao, setKakao] = React.useState<typeof window.Kakao>(null)

  React.useEffect(() => {
    if (!window.Kakao.isInitialized()) window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    console.log(window.Kakao)
    setKakao(window.Kakao);
  }, []);

  const share = React.useCallback(() => {
    Kakao?.Share.sendDefault({
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
    <Button
      fullWidth
      variant="outlined"
      color="primary"
      onClick={share}
      sx={{ margin: '30px 0' }}
    >
      {Kakao ? "저지르기!" : "로딩중..."}
    </Button>
  )
}

export default KalingSendButton;