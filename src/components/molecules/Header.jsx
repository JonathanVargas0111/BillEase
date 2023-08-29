import { Container, Button } from '@mui/material';
import Typography from '@mui/material/Typography'
const Header = ({ title, text }) => {
    return (
        <Container maxWidth='md'>
            <header >
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                {/* <Typography variant="body2" gutterBottom>
                    {text}
                </Typography> */}
            </header>
        </Container>
    )
}

export default Header