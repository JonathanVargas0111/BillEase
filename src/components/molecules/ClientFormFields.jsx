import { FormControl } from '@mui/material';
import TextFieldWithIcon from '../atoms/TextFieldWithIcon';
import Person from '@mui/icons-material/Person';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Typography from '@mui/material/Typography';

const ClientFormFields = ({ formik }) => {
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Client
            </Typography>

            <FormControl>
                <TextFieldWithIcon

                    id={'nameClient'}
                    name={'nameClient'}
                    label='Name Client'
                    value={formik.values.nameClient}
                    onChange={formik.handleChange}
                    error={formik.touched.nameClient && Boolean(formik.errors.nameClient)}
                    helperText={formik.touched.nameClient && formik.errors.nameClient}
                    icon={<Person />}
                />
            </FormControl>
            <FormControl>
                <TextFieldWithIcon
                    id={'emailClient'}
                    name={'emailClient'}
                    label='Email Client'
                    value={formik.values.emailClient}
                    onChange={formik.handleChange}
                    error={formik.touched.emailClient && Boolean(formik.errors.emailClient)}
                    helperText={formik.touched.emailClient && formik.errors.emailClient}
                    icon={<ContactMailIcon />}
                />
            </FormControl>

        </>
    )
}

export default ClientFormFields