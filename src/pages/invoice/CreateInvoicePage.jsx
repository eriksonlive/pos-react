import {
  Divider,
  Grid2 as Grid,
  MenuItem,
  Select,
  Typography,
  Link as MuiLink,
  useTheme,
  FormGroup,
  Box,
  Button,
  Stack,
  FormHelperText,
} from '@mui/material';
import { CustomField, CustomLabel } from 'components';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { MainCard } from 'ui-component';

const data = [
  { title: 'lorem 1', value: 1 },
  { title: 'lorem 2', value: 2 },
];

export const CreateInvoicePage = () => {
  const theme = useTheme();
  const [select, setSelect] = useState(0);

  const selectClient = ({ target }) => {
    setSelect(target.value);
  };

  const handleChange = ({ target }) => {
    setSelect(target.value);
  };

  return (
    <>
      <MainCard>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Crear Factura
        </Typography>
        <Divider />

        <Grid container spacing={2} sx={{ mt: 1, mb: 1 }}>
          <Grid size={12}>
            <Grid container spacing={2} columns={12}>
              <Grid size={4} sx={{ height: 100 }}>
                <CustomField
                  type="textfield"
                  textfield={{
                    size: 'small',
                    error: true,
                    helperText: 'Esto es un ejemplo del error',
                  }}
                  label={{
                    title: 'Numero de factura',
                    sx: { mb: '5px' },
                  }}
                />
              </Grid>

              <Grid
                size={5}
                sx={{
                  display: 'flex',
                  height: 110,
                }}
              >
                <FormGroup sx={{ p: 0, m: 0 }}>
                  <CustomLabel
                    title="Seleccione un usuario"
                    sx={{ mb: '5px' }}
                  />
                  <Select
                    size="small"
                    id="lorem"
                    value={select}
                    onChange={selectClient}
                    sx={{ width: 180, mr: 0 }}
                    error
                  >
                    <MenuItem value={0}>Seleccione un usuario</MenuItem>
                    <MenuItem value={1}>Example 1</MenuItem>
                    <MenuItem value={2}>Example 2</MenuItem>
                    <MenuItem value={3}>Example 3</MenuItem>
                    <MenuItem value={4}>Example 4</MenuItem>
                  </Select>
                  <FormHelperText>Error</FormHelperText>
                </FormGroup>

                <MuiLink
                  component={RouterLink}
                  to={'#'}
                  variant="button"
                  underline="none"
                  sx={{
                    ...theme.typography.subtitle2,
                    ...theme.typography.button,
                    background: theme.palette.secondary.light,
                    color: theme.palette.secondary.dark,
                    p: '8px',
                    height: '2.9em',
                    transition: 'all .2s ease-in-out',
                    mt: 2.9,
                    '&:hover': {
                      background: theme.palette.secondary.dark,
                      color: theme.palette.secondary.light,
                    },
                  }}
                >
                  Nuevo Cliente
                </MuiLink>
              </Grid>
            </Grid>
          </Grid>

          <Grid size={12} sx={{ m: '10px 0px' }}>
            <Divider />
          </Grid>

          <Grid size={12}>
            <Grid container spacing={2} columns={12}>
              <Grid size={4}>
                <CustomField
                  type="textfield"
                  textfield={{
                    onChange: handleChange,
                  }}
                  label={{
                    title: 'Nombre cliente *',
                  }}
                />
              </Grid>
              <Grid size={4}>
                <CustomField
                  type="textfield"
                  textfield={{
                    onChange: handleChange,
                  }}
                  label={{
                    title: 'Correo Cliente',
                  }}
                />
              </Grid>
              <Grid size={4}>
                <CustomField
                  type="textfield"
                  textfield={{
                    onChange: handleChange,
                  }}
                  label={{
                    title: 'Celular Cliente',
                  }}
                />
              </Grid>
              <Grid size={12}>
                <CustomField
                  type="textfield"
                  textfield={{
                    onChange: handleChange,
                  }}
                  label={{
                    title: 'Dirección',
                  }}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid size={12} sx={{ m: '10px 0px' }}>
            <Divider />
          </Grid>

          <Grid size={12}>
            <Grid container spacing={2} columns={12}>
              <Grid size={6}>
                <CustomField
                  type="date"
                  label={{
                    title: 'Fecha Factura',
                  }}
                />
              </Grid>
              <Grid size={6}>
                <CustomField
                  type="select"
                  select={{
                    onChange: handleChange,
                    data,
                    value: select,
                  }}
                  label={{
                    title: 'Estado',
                  }}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid size={12} sx={{ m: '10px 0px' }}>
            <Divider />
          </Grid>

          <Grid size={12}>
            <Grid container spacing={2} columns={12}>
              <Grid size={4}>
                <CustomField
                  type="select"
                  label={{
                    title: 'Producto',
                  }}
                />
              </Grid>
              <Grid size={4}>
                <CustomField
                  label={{
                    title: 'Cantidad',
                  }}
                  textfield={{
                    type: 'number',
                  }}
                />
              </Grid>
              <Grid size={4}>
                <CustomField
                  label={{
                    title: 'Descuento',
                  }}
                  textfield={{
                    type: 'number',
                  }}
                />
              </Grid>
              <Grid size={12} sx={{ m: '1em 0' }}>
                <Stack
                  spacing={1}
                  direction="row"
                  alignItems="end"
                  justifyContent="end"
                >
                  <Button variant="outlined" color="error">
                    Cancelar
                  </Button>
                  <Button variant="outlined" color="success">
                    Añadir
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          <Grid size={12} sx={{ m: '10px 0px' }}>
            <Divider />
          </Grid>

          <Grid size={12}>
            <Grid container spacing={2} columns={12}>
              <Grid size={12}>
                <Box
                  alignContent="flex-end"
                  justifyContent="end"
                  sx={{
                    border: `1px solid ${
                      theme.palette.mode == 'dark' ? '#545b71' : '#c4c4c4'
                    } `,
                    height: 176,
                    width: '100%',
                    display: 'flex', // Cambia a flex
                    justifyContent: 'flex-end', // Alinea a la derecha
                    p: 1,
                    borderRadius: 2,
                  }}
                >
                  <Box sx={{ width: '30%', display: 'block', height: '100%' }}>
                    <Grid container>
                      <Grid size={7}>
                        <Typography variant="body1" sx={{ m: 1 }}>
                          Sub Total:
                        </Typography>
                      </Grid>
                      <Grid size={5} textAlign="end">
                        <Typography variant="body1" sx={{ m: 1 }}>
                          $0
                        </Typography>
                      </Grid>
                      <Grid size={7}>
                        <Typography variant="body1" sx={{ m: 1 }}>
                          Tax (10%):
                        </Typography>
                      </Grid>
                      <Grid size={5} textAlign="end">
                        <Typography variant="body1" sx={{ m: 1 }}>
                          $0
                        </Typography>
                      </Grid>
                      <Grid size={7}>
                        <Typography variant="body1" sx={{ m: 1 }}>
                          Descuento (5%):
                        </Typography>
                      </Grid>
                      <Grid size={5} textAlign="end">
                        <Typography variant="body1" sx={{ m: 1 }}>
                          $0
                        </Typography>
                      </Grid>
                      <Grid size={12} sx={{ m: '10px 0px' }}>
                        <Divider />
                      </Grid>
                      <Grid size={5}>
                        <Typography variant="body1" sx={{ m: 1 }}>
                          Total:
                        </Typography>
                      </Grid>
                      <Grid size={7} textAlign="end">
                        <Typography variant="body1" sx={{ m: 1 }}>
                          $0
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </MainCard>
    </>
  );
};
