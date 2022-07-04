import { useState } from "react";
import debounce from 'debounce';
import { styles } from './signIn.styles';
import GoogleIcon from '@mui/icons-material/Google';
import { TextField, Box, Typography, Checkbox, Button } from '@mui/material';
type Props = { initialEmail?: string, initialPassword?: string }

export default function SignInForm({ initialEmail, initialPassword }: Props) {
    const [state, setState] = useState({ email: '', password: '' });
    const [validateState, setValidateState] = useState({ errEmail: initialEmail || '', errPassword: initialPassword || '' });
    console.log(initialEmail)

    const validateEmail = debounce(({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, email: value });
        let errorMessage = '';
        if (value.length === 0) {
            errorMessage = 'required';
        } else if (!value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) {
            errorMessage = 'invalid E-mail';
        }
        setValidateState({ ...validateState, errEmail: errorMessage });
    }, 300);

    const validatePassword = debounce(
        ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
            setState({ ...state, password: value });
            let errorMessage = '';
            if (value.length === 0) {
                errorMessage = 'required';
            } else if (value.length < 5) {
                errorMessage = 'password is too short';
            }
            setValidateState({ ...validateState, errPassword: errorMessage });
        },
        300
    );
    return (
        <Box sx={styles.signInFormContainer}>
            <Box sx={styles.signInFormCard}>
                <Box sx={styles.signInFormTitle}>
                    <Typography variant="h3">Welcome</Typography>
                </Box>
                <Typography color="text.secondary" variant="h6" sx={styles.signInNotification}>
                    Please, enter your email and password
                </Typography>
                <Box sx={styles.signInInputContainer}>
                    <Typography color="text.secondary">Email</Typography>
                    <TextField
                        defaultValue={initialEmail}
                        onChange={validateEmail}
                        error={!!validateState.errEmail}
                        helperText={validateState.errEmail}
                        id="outlined-error"
                        type="text"
                        placeholder="Enter your email"
                        fullWidth
                    ></TextField>
                </Box>
                <Typography color="text.secondary">Password</Typography>
                <Box sx={styles.signInInputContainer}>
                    <TextField
                        defaultValue={initialPassword}
                        type="password"
                        placeholder="password"
                        fullWidth
                        onChange={validatePassword}
                        error={!!validateState.errPassword}
                        helperText={validateState.errPassword}
                    ></TextField>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '15px',
                    }}
                >
                    <Box sx={styles.signInCheckbox}>
                        <Checkbox size="small" />
                        <Typography>Remember for 30 days</Typography>
                    </Box>
                    <Typography sx={styles.signInNotificationPassword}>Forgot password</Typography>
                </Box>
                <Box>
                    <Button
                        sx={styles.signInBtn}
                        fullWidth
                        variant="contained"
                        disabled={
                            !state.email ||
                            !state.password ||
                            !!validateState.errEmail ||
                            !!validateState.errPassword
                        }
                    >
                        sign in
                    </Button>
                </Box>
                <Box>
                    <Button
                        sx={styles.signInGoogleBtn}
                        fullWidth
                        variant="outlined"
                        startIcon={<GoogleIcon sx={styles.signInGoogleIcon} />}
                    >
                        Sign in with Google
                    </Button>
                </Box>
                <Box sx={styles.signInFooterContainer}>
                    <Typography>Don`t have an account? </Typography>
                    <Typography sx={styles.signUpLink}>Sign Up</Typography>
                </Box>
            </Box>
        </Box>
    )
}