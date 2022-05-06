import { Button } from "@mui/material";
import { TextField, Select, MenuItem } from "@mui/material";
import { Card } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import { useId } from "react";
import { useState } from "react";

const AlertCreator = ({ dispatch }) => {
  const [alertTitle, setAlertTitle] = useState("");
  const [alertType, setAlertType] = useState("");
  const [alertText, setAlertText] = useState("");
  const [alertLink, setAlertLink] = useState("");
  const [alertTimeLimit, setAlertTimeLimit] = useState("");
  const [alertId, setAlertId] = useState("");
  const newId = useId();

  const handleSubmit = () => {
    dispatch({
      type: "ADD_ALERT",
      payload: {
        id: alertId || newId + alertTitle,
        alertTitle: alertTitle,
        alertType: alertType,
        alertText: alertText,
        alertLink: alertLink,
        alertTimeLimit: +alertTimeLimit,
      },
    });
    dispatch({
      type: "SET_ACTIVE_ALERT",
      payload: {
        id: alertId || newId + alertTitle,
        alertTitle: alertTitle,
        alertType: alertType,
        alertText: alertText,
        alertLink: alertLink,
        alertTimeLimit: +alertTimeLimit,
      },
    });
    setAlertTitle("");
    setAlertType("");
    setAlertText("");
    setAlertLink("");
    setAlertTimeLimit("");
    setAlertId("");

    setTimeout(() => {
      dispatch({
        type: "DELETE_ACTIVE_ALERT",
        payload: `${alertId}`,
      });
    }, alertTimeLimit * 1000);
  };

  return (
    <Card
      sx={{
        p: 3,
        m: 3,
        width: "100%",
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "5px",
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
      }}
    >
      <h5>Create Alert</h5>

      <TextField
        id="alertId"
        label="Alert ID"
        value={alertId}
        onChange={(e) => setAlertId(String(e.target.value))}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Alert Title"
        value={alertTitle}
        onChange={(event) => setAlertTitle(event.target.value)}
        sx={{
          mb: 3,
          width: "100%",
          borderRadius: "5px",
        }}
      />
      <FormControl fullWidth>
        <InputLabel id="select">Choose alert type</InputLabel>
        <Select
          id="select"
          labelId="select"
          value={alertType}
          variant="filled"
          sx={{
            mb: 3,
            width: "100%",
            borderRadius: "5px",
          }}
          onChange={(event) => setAlertType(event.target.value)}
        >
          <MenuItem value="error">Error</MenuItem>
          <MenuItem value="warning">Warning</MenuItem>
          <MenuItem value="info">Info</MenuItem>
          <MenuItem value="success">Success</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Alert Text"
        value={alertText}
        onChange={(event) => setAlertText(event.target.value)}
        sx={{
          mb: 3,
          width: "100%",
          borderRadius: "5px",
        }}
      />
      <TextField
        label="Alert Link"
        value={alertLink}
        onChange={(event) => setAlertLink(event.target.value)}
        sx={{
          mb: 3,
          width: "100%",
          borderRadius: "5px",
        }}
      />
      <TextField
        type={"number"}
        label="Alert Time Limit"
        value={alertTimeLimit}
        onChange={(event) => setAlertTimeLimit(event.target.value)}
        sx={{
          mb: 3,
          width: "100%",
          borderRadius: "5px",
        }}
      />
      <Button
        disabled={alertType === ""}
        variant="contained"
        width="25%"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Card>
  );
};

export default AlertCreator;
