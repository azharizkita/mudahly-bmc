import { Paper, Typography, Box } from "@mui/material";

export default function PanelItem({ title = "" }: { title: string }) {
  return (
    <Paper elevation={2}>
      <Box sx={{ p: 2 }}>
        <Typography sx={{ fontSize: 14 }}>{title}</Typography>
      </Box>
    </Paper>
  );
}
