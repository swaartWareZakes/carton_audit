import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";

import { skuReports } from "../../data/skuReports";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Audits = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "sku", headerName: "Sku" },
    {
      field: "skuDescription",
      headerName: "Sku Description",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "printLable",
      headerName: "Print Lable",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "scannedDateTime",
      headerName: "Scanned Date Time",
      flex: 1,
    },
   
  ];

  return (
    <Box m="20px">
      <Header
        title="AUDITS"
        subtitle="List Of All Reports"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={skuReports}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Audits;
