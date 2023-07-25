import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {

    const { login } = useAuth()

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ color: 'white' }}>
                        Iniciá sesión
                    </Typography>

                    <Formik initialValues={{
                        email: "",
                        password: "",
                    }}
                        validate={(values) => {
                            const errors = {};
                            const regexpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

                            if (!values.email) {
                                errors.email = "El email es obligatorio"
                                //test método que me permite validar las expresiones regulares
                            } else if (!regexpEmail.test(values.email)) {
                                errors.email = "Email inválido";
                            }

                            if (!values.password) {
                                errors.password = "Contraseña requerida";
                            }
                            return errors;
                        }}
                        //setSubmiting Es para poder gestionar un spinner mientras se espera la respuesta
                        onSubmit={(values) => {
                            login(values)
                        }}
                    >
                        {
                            ({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                            }) => (
                                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        email="email"
                                        label="Email"
                                        type="email"
                                        id="email"
                                        autoFocus
                                        value={values.email}
                                        error={errors.email && touched.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={errors.email && touched.email & errors.email}
                                        variant="outlined"
                                        InputProps={{
                                            style: { color: 'white', borderColor: 'white', borderWidth: '1px', borderStyle: 'solid' },
                                        }}
                                        InputLabelProps={{
                                            style: { color: 'white' },
                                        }}
                                    />
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        password="password"
                                        label="Contraseña"
                                        type="password"
                                        id="password"
                                        autoFocus
                                        value={values.password}
                                        error={errors.password && touched.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={errors.password && touched.password & errors.password}
                                        variant="outlined"
                                        InputProps={{
                                            style: { color: 'white', borderColor: 'white', borderWidth: '1px', borderStyle: 'solid' },
                                        }}
                                        InputLabelProps={{
                                            style: { color: 'white' },
                                        }}
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Iniciar sesión
                                    </Button>
                                    <Grid>
                                        <Grid item>
                                            <Link to="/register" variant="body2">
                                                {"¿No tenés cuenta? Registrate"}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            )
                        }
                    </Formik>
                </Box>
            </Container>
        </ThemeProvider>
    );
}