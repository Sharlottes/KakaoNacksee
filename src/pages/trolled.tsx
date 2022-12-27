import Link from "next/link";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styled from "@mui/system/styled";

const PageContainer = styled("div")(({ theme }) =>
  theme.unstable_sx({
    textAlign: "center",
    "& button": {
      mt: "30px",
    },
  })
);

const Trolled: React.FC = () => (
  <PageContainer>
    <Typography variant="h3">하하 낚시지롱!</Typography>
    <Link href="/">
      <Button variant="contained">나만 당할 순 없지!</Button>
    </Link>
  </PageContainer>
);
export default Trolled;
