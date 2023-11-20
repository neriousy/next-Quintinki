import { logout } from '@/app/lib/authFunctions';
import Logout from '@mui/icons-material/Logout';
import { ListItemIcon, ListItemText, MenuItem } from '@mui/material';

export default function LogoutButton() {
  const handleLogout = async () => {
    await logout();
  };

  return (
    <MenuItem onClick={handleLogout}>
      <ListItemIcon>
        <Logout fontSize="small" />
      </ListItemIcon>

      <ListItemText>Logout</ListItemText>
    </MenuItem>
  );
}
