import React from "react";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";

import GithubIcon from "assets/icons/GithubIcon";
import { KalingSendButton, KalingExample, DivTypography } from "components";
import { Box } from "@mui/material";

export interface KalingSettingType {
  duration: string;
  maxMembers: number;
  redirectUrl: string;
}

const defaultState: KalingSettingType = {
  redirectUrl: "https://kakao-nacksee.vercel.app/trolled",
  duration: "10분간",
  maxMembers: 2,
};

const Home: React.FC = () => {
  const [states, setStates] = React.useState<KalingSettingType>(defaultState);

  const onChangeState =
    (key: keyof KalingSettingType) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setStates((prev) => ({
        ...prev,
        [key]: e.currentTarget.value,
      }));

  return (
    <Container>
      <Typography variant="h2" sx={{ fontWeight: "bold" }}>
        Kakaolink Sender
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "10px" }}>
        순수한 마음으로 선물을 좋아하는 사람들에게 가짜 선착순 선물을 보내고,
        기쁜 마음으로 달려들 그들의 뒤통수를 시원하게 후려쳐보세요!{" "}
      </Typography>
      <KalingSendButton {...states} />
      <DivTypography title="세부설정" />
      <div
        style={{
          padding: "15px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            margin: "20px",
            gap: "10px",
            display: "grid",
            gridTemplateRows: "50px",
            "& :nth-of-type(1)": {
              gridColumnStart: "span 3",
            },
          }}
        >
          <TextField
            label="Redirect Url"
            placeholder={defaultState.redirectUrl}
            onChange={onChangeState("redirectUrl")}
            value={states.redirectUrl}
            variant="standard"
          />
          <TextField
            label="Amount"
            type="number"
            placeholder={defaultState.maxMembers.toString()}
            onChange={onChangeState("maxMembers")}
            value={states.maxMembers <= 0 ? "" : states.maxMembers}
            variant="standard"
          />
          <TextField
            label="Duration"
            placeholder={defaultState.duration}
            onChange={onChangeState("duration")}
            value={states.duration}
            variant="standard"
          />
        </Box>
        <KalingExample {...states} />
      </div>
      <DivTypography title="링크" />
      <GithubIcon />
      <a
        href="https://github.com/sharlottes/kakaonacksee"
        style={{ margin: "5px" }}
      >
        https://github.com/sharlottes/kakaonacksee
      </a>
    </Container>
  );
};

export default Home;
