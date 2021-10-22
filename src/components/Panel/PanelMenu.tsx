import { Add, Help } from "@mui/icons-material";
import {
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
} from "@mui/material";
import { ReactNode } from "react";
import InfoDialog from "../Dialog/InfoDialog";

export default function PanelMenu({
  title = "",
  description = "",
}: {
  title: string;
  description: JSX.Element | ReactNode | string;
}) {
  return (
    <>
      <Paper sx={{ width: 320, maxWidth: "100%" }}>
        <MenuList dense={true}>
          <MenuItem>
            <ListItemIcon>
              <Add fontSize="small" />
            </ListItemIcon>
            <ListItemText>Add</ListItemText>
          </MenuItem>
          <Divider />
          <InfoDialog
            content={description}
            title={title}
            target={
              <>
                <MenuItem>
                  <ListItemIcon>
                    <Help fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Hint</ListItemText>
                </MenuItem>
              </>
            }
          />
        </MenuList>
      </Paper>
    </>
  );
}
