import { AppBar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Snackbar from "@mui/material/Snackbar";
import { Paper, Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { Badge } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useAlertReducer } from "./hooks/AlertManager";
import AlertWindow, { AlertComponent } from "./components/AlertWindow";
import AlertCreator from "./components/AlertCreator";

function AlertExample({ state, dispatch }) {
  return (
    <>
      <AlertCreator dispatch={dispatch} />
      <AlertWindow alerts={state.alerts} dispatch={dispatch} />
    </>
  );
}

function App() {
  const [state, dispatch] = useAlertReducer();
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Alert Dashboard</Typography>
          <Badge badgeContent={state.alerts.length} color="secondary">
            <NotificationsIcon />
          </Badge>
        </Toolbar>
      </AppBar>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={state.alert.id ? true : false}
        autoHideDuration={state.alert.alertTimeLimit * 1000}
        onClose={() =>
          dispatch({
            type: "DELETE_ACTIVE_ALERT",
            payload: `${state.alert.id}`,
          })
        }
      >
        <Box
          sx={{
            m: 2,
          }}
        >
          <AlertComponent alert={state.alert} dispatch={dispatch} />
        </Box>
      </Snackbar>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AlertExample state={state} dispatch={dispatch} />
      </Paper>
    </Box>
  );
}

export default App;
