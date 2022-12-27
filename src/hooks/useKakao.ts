import React from "react";

// wtf
type KakaoType = any;

const useKakao = () => {
  const [Kakao, setKakao] = React.useState<KakaoType>();

  React.useEffect(() => {
    if (!window.Kakao.isInitialized())
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    console.log(window.Kakao);
    setKakao(window.Kakao);
  }, []);

  return Kakao;
};

export default useKakao;
