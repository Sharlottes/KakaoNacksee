import React from "react";
import Button from "@mui/material/Button";
import useKakao from "hooks/useKakao";
import type { KalingSettingType } from "pages";

const KalingSendButton: React.FC<KalingSettingType> = ({
  redirectUrl,
  duration,
  maxMembers,
}) => {
  const Kakao = useKakao();

  const share = () => {
    Kakao?.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `선착순 선물 게임을 시작합니다! 기회는 단 ${duration}, 선착순 ${maxMembers}명에게!`,
        imageUrl: `https://kakao-nacksee.vercel.app/images/giftTitle.png`,
        imageWidth: 800,
        imageHeight: 600,
        link: {
          mobileWebUrl:
            "https://kakao-nacksee.vercel.app/redir?redirect=" + redirectUrl,
          webUrl:
            "https://kakao-nacksee.vercel.app/redir?redirect=" + redirectUrl,
        },
      },
      buttons: [
        {
          title: "지금 달려가기",
          link: {
            mobileWebUrl:
              "https://kakao-nacksee.vercel.app/redir?redirect=" + redirectUrl,
            webUrl:
              "https://kakao-nacksee.vercel.app/redir?redirect=" + redirectUrl,
          },
        },
      ],
    });
  };

  return (
    <Button
      fullWidth
      variant="outlined"
      color="primary"
      onClick={share}
      sx={{ margin: "30px 0" }}
    >
      {Kakao ? "저지르기!" : "로딩중..."}
    </Button>
  );
};

export default KalingSendButton;
