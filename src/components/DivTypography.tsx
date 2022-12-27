import Divider from "@mui/material/Divider";

export interface DivTypographyProps {
  title?: string | undefined;
}

const DivTypography: React.FC<DivTypographyProps> = ({ title }) => (
  <Divider textAlign="left" sx={{ fontWeight: "bold" }}>
    {title}
  </Divider>
);

export default DivTypography;
