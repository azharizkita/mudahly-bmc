import { ReactNode } from "react";
import { Card, CardHeader, IconButton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";

export default function Panel({
  title = "Sample",
  avatar = null,
}: {
  title: string;
  avatar: JSX.Element | ReactNode | null;
}) {
  return (
    <Card sx={{ width: "100%", height: "100%", minHeight: 250 }}>
      <CardHeader
        avatar={avatar}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={`${title}`}
      />
    </Card>
  );
}
