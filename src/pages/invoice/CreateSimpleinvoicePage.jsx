import {
  Button,
  Divider,
  Grid2 as Grid,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { CustomDatatable, CustomField } from 'components';
import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { MainCard } from 'ui-component';
import { FacturaSimple } from '.';

export const CreateSimpleinvoicePage = () => {
  const theme = useTheme();

  const [showColumn, setShowColumn] = useState(true);

  const contentPrint = useRef();
  const handlePrint = useReactToPrint({
    content: () => contentPrint.current,
  });

  const handleClick = () => {
    setShowColumn(!showColumn);
  }

  return (
    <MainCard>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Facturar
      </Typography>
      <Divider />

      <Button onClick={handleClick}>Ver Factura</Button>


      <Grid container spacing={2} sx={{ mt: 1, mb: 1 }}>
        <Grid size={ showColumn ? 8: 12} sx={{transition: "all 0.5s ease"}}>
          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }} columns={12}>
            <Grid size={6}>
              <CustomField
                label={{
                  title: "Codigo",
                }}
                textfield={{
                  placeholder: "Example",
                }}
              />
            </Grid>
            <Grid size={6}>
              <CustomField
                label={{
                  title: "Buscar",
                }}
                textfield={{
                  placeholder: "Example",
                }}
              />
            </Grid>

            <Stack component={Grid}>
              <Button>Filtrar</Button>
            </Stack>
          </Grid>

          {/* <CustomDatatable /> */}
        </Grid>

        <Grid size={showColumn ? 4: 0} sx={{transition: "all 0.5s ease"}}>
          <FacturaSimple ref={contentPrint} view
            sx={{
              transition: "opacity 0.5s ease",
              opacity: showColumn ? 1 : 0,
              // height: "100vh",
            }}
          />
          {/* <Button onClick={handlePrint}>Imprimir</Button> */}
        </Grid>
      </Grid>
    </MainCard>
  );
};
