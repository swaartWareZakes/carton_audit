import { Box, Button, TextField} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

import Select, { SelectChangeEvent } from '@mui/material/Select';

const Settings = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="SETTINGS" subtitle="Drop down facility and printer" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
      
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
           
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Facility"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.facility}
                name="facility"
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Printer"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.printer}
                name="printer"
            
                sx={{ gridColumn: "span 4" }}
              />

            </Box>
            <Box display="flex" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Print
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};


const initialValues = {

  facility: "",
  printer: "",
};

export default Settings;
