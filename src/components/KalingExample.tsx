import Image from "next/image";

import LeftArrowIcon from "assets/icons/LeftArrowIcon";
import Typography from "@mui/material/Typography";
import type { KalingSettingType } from "../pages";

const KalingExample: React.FC<KalingSettingType> = ({
  duration,
  maxMembers,
  redirectUrl,
}) => (
  <div style={{ width: "250px" }}>
    <Image
      src="/images/giftTitle.png"
      width={250}
      height={187.5}
      alt=""
      style={{ borderRadius: "15px 15px 0px 0px" }}
    />
    <Typography variant="body2" sx={{ margin: "0 10px", fontSize: 12 }}>
      선착순 선물 게임을 시작합니다! 기회는 단 {duration}, 선착순 {maxMembers}
      명에게!
    </Typography>
    <div
      style={{
        width: "100%",
        padding: "10px 0",
        textAlign: "center",
        backgroundColor: "#F5F5F5",
        fontSize: 12,
      }}
    >
      <a href={redirectUrl}>지금 달려가기</a>
    </div>
    <div
      style={{
        margin: "10px 10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex" }}>
        <Image
          src="/images/kagift.png"
          width={12}
          height={12}
          alt=""
          style={{ border: "solid 2px lightGray", borderRadius: "15px" }}
        />
        <Typography sx={{ color: "#999999", fontSize: 11, marginLeft: "5px" }}>
          선물 바로가기
        </Typography>
      </div>
      <LeftArrowIcon
        style={{ color: "#999999", width: "12px", height: "12px" }}
      />
    </div>
  </div>
);

export default KalingExample;
