import { ReactNode, MouseEvent, useState } from "react";
import { Card, CardHeader, IconButton, Popover } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import PanelMenu from "./PanelMenu";

export default function Panel({
  title = "Sample",
  avatar = null,
  description = "",
}: {
  title: string;
  avatar: JSX.Element | ReactNode | null;
  description: JSX.Element | ReactNode | string;
}) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <Popover open={open} anchorEl={anchorEl} onClose={handleClose}>
        <PanelMenu title={title} description={description} />
      </Popover>
      <Card sx={{ width: "100%", height: "100%", minHeight: 250 }}>
        <CardHeader
          avatar={avatar}
          action={
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVert />
            </IconButton>
          }
          title={`${title}`}
        />
      </Card>
    </>
  );
}
