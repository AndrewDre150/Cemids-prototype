import React, { useContext } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { MdOutlineMenu } from "react-icons/md";
import { SidebarContext } from "../../context/SidebarContext";

function DescriptionAlerts() {
    const { openSidebar } = useContext(SidebarContext);

  return (
    <div>
        <div className="chatbot-l">
                <button
                    className="chatbot-menu-btn"
                    type="button"
                    onClick={openSidebar}
                >
                    <MdOutlineMenu size={24} />
                </button>
                <h2 className="chatbot-title">Alerts</h2>
            </div>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="success">
                    <AlertTitle>Normal CO2 Levels</AlertTitle>
                    The CO2 levels are within the normal range.
                </Alert>
                <Alert severity="info">
                    <AlertTitle>Information</AlertTitle>
                    This is an informational alert about CO2 levels.
                </Alert>
                <Alert severity="warning">
                    <AlertTitle>Elevated CO2 Levels</AlertTitle>
                    Warning: CO2 levels are above the recommended range.
                </Alert>
                <Alert severity="error">
                    <AlertTitle>High CO2 Levels</AlertTitle>
                    Critical alert: CO2 levels are dangerously high.
                </Alert>
                </Stack>

    </div>
  );
}

export default DescriptionAlerts;
