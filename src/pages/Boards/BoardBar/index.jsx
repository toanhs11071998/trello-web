import DashboardIcon from "@mui/icons-material/Dashboard";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Button from "@mui/material/Button";
import { Tooltip } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
const MENU_STYLE = {
  color: "primary.main",
  bgcolor: "white",
  border: "none",
  px: "5px",
  borderRadius: "5px",
  "& .MuiSvgIcon-root": { color: "primary.main" },
  "&:hover": { bgcolor: "primary.50" },
};
function BoardBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        borderTop: "1px solid #00bfa5",
        px: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip
          icon={<DashboardIcon />}
          label="MERN Stack"
          onClick={() => {}}
          sx={MENU_STYLE}
        />
        <Chip
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          onClick={() => {}}
          sx={MENU_STYLE}
        />
        <Chip
          icon={<AddToDriveIcon />}
          label="Add to Drive"
          onClick={() => {}}
          sx={MENU_STYLE}
        />
        <Chip
          icon={<BoltIcon />}
          label="Automation"
          onClick={() => {}}
          sx={MENU_STYLE}
        />

        <Chip
          icon={<FilterListIcon />}
          label="Filter"
          onClick={() => {}}
          sx={MENU_STYLE}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon />}>
          Invite
        </Button>

        <AvatarGroup
          max={7}
          sx={{
            "& .MuiAvatar-root": {
              width: 34,
              height: 34,
              fontSize: "16px",
            },
          }}
        >
          <Tooltip title="Toan Tom">
            <Avatar
              alt="Toan Tom"
              src="https://static.topcv.vn/user_avatars/qFHwBXZ38VEGGRyhgPBS_6671a4a82ebb7_av.jpg"
            />
          </Tooltip>
          <Tooltip title="Toan Tom">
            <Avatar
              alt="Toan Tom"
              src="https://static.topcv.vn/user_avatars/qFHwBXZ38VEGGRyhgPBS_6671a4a82ebb7_av.jpg"
            />
          </Tooltip>
          <Tooltip title="Toan Tom">
            <Avatar
              alt="Toan Tom"
              src="https://static.topcv.vn/user_avatars/qFHwBXZ38VEGGRyhgPBS_6671a4a82ebb7_av.jpg"
            />
          </Tooltip>
          <Tooltip title="Toan Tom">
            <Avatar
              alt="Toan Tom"
              src="https://static.topcv.vn/user_avatars/qFHwBXZ38VEGGRyhgPBS_6671a4a82ebb7_av.jpg"
            />
          </Tooltip>
          <Tooltip title="Toan Tom">
            <Avatar
              alt="Toan Tom"
              src="https://static.topcv.vn/user_avatars/qFHwBXZ38VEGGRyhgPBS_6671a4a82ebb7_av.jpg"
            />
          </Tooltip>
          <Tooltip title="Toan Tom">
            <Avatar
              alt="Toan Tom"
              src="https://static.topcv.vn/user_avatars/qFHwBXZ38VEGGRyhgPBS_6671a4a82ebb7_av.jpg"
            />
          </Tooltip>
          <Tooltip title="Toan Tom">
            <Avatar
              alt="Toan Tom"
              src="https://static.topcv.vn/user_avatars/qFHwBXZ38VEGGRyhgPBS_6671a4a82ebb7_av.jpg"
            />
          </Tooltip>
          <Tooltip title="Toan Tom">
            <Avatar
              alt="Toan Tom"
              src="https://static.topcv.vn/user_avatars/qFHwBXZ38VEGGRyhgPBS_6671a4a82ebb7_av.jpg"
            />
          </Tooltip>
          <Tooltip title="Toan Tom">
            <Avatar
              alt="Toan Tom"
              src="https://static.topcv.vn/user_avatars/qFHwBXZ38VEGGRyhgPBS_6671a4a82ebb7_av.jpg"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
