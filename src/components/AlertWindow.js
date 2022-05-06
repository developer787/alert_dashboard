import IconButton from "@mui/material/IconButton";
import { Alert } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Card, Box, Link } from "@mui/material";
import Typography from "@mui/material/Typography";

export const AlertComponent = ({ alert, dispatch }) => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      {alert?.alertLink ? (
        <Alert
          sx={{
            mb: 2,
          }}
          severity={alert.alertType || "info"}
          action={
            <IconButton
              aria-label="close"
              size="small"
              onClick={() =>
                dispatch({
                  type: "REMOVE_ALERT",
                  payload: `${alert.id}`,
                })
              }
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <Link
            sx={{
              cursor: "pointer",
            }}
            href={alert.alertLink}
            target="_blank"
            rel="noopener"
          >
            {alert.alertText}
          </Link>
        </Alert>
      ) : (
        <Box
          sx={{
            width: "90%",
          }}
        >
          {alert && (
            <Alert
              sx={{
                mb: 2,
                width: "100%",
              }}
              severity={alert.alertType || "info"}
              action={
                <IconButton
                  aria-label="close"
                  size="small"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_ALERT",
                      payload: `${alert.id}`,
                    })
                  }
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {alert.alertText}
            </Alert>
          )}
        </Box>
      )}
    </Box>
  );
};

const AlertWindow = ({ alerts, dispatch }) => {
  return (
    <Card
      sx={{
        p: 3,
        m: 3,
        width: "100%",
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "5px",
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
        alignItems: "center",
      }}
    >
      <h5>Alerts</h5>

      {alerts?.length > 0 ? (
        alerts.map((alert) => (
          <AlertComponent
            alert={alert}
            dispatch={dispatch}
            id={alert.id}
            key={`${alert.id}`}
          />
        ))
      ) : (
        <Typography> No alerts </Typography>
      )}
    </Card>
  );
};

export default AlertWindow;
