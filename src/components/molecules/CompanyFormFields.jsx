import { FormControl } from '@mui/material';
import TextFieldWithIcon from '../atoms/TextFieldWithIcon';
import StoreIcon from '@mui/icons-material/Store';
import AbcIcon from '@mui/icons-material/Abc';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';





const CompanyFormFields = ({ formik }) => {
    return (
        <>


            <Typography variant="h6" gutterBottom>
                Company
            </Typography>
            <FormControl>
                <TextFieldWithIcon
                    id={'nameCompany'}
                    name={'nameCompany'}
                    label='Name company'
                    value={formik.values.nameCompany}
                    onChange={formik.handleChange}
                    error={formik.touched.nameCompany && Boolean(formik.errors.nameCompany)}
                    helperText={formik.touched.nameCompany && formik.errors.nameCompany}
                    icon={<StoreIcon />}
                />
            </FormControl>
            <FormControl>
                <TextFieldWithIcon
                    id={'nitCompany'}
                    name={'nitCompany'}
                    label='Nit company'
                    value={formik.values.nitCompany}
                    onChange={formik.handleChange}
                    error={formik.touched.nitCompany && Boolean(formik.errors.nitCompany)}
                    helperText={formik.touched.nitCompany && formik.errors.nitCompany}
                    icon={<AbcIcon />}
                />
            </FormControl>
            <FormControl>
                <TextFieldWithIcon
                    id={'telephoneCompany'}
                    name={'telephoneCompany'}
                    label='Telephone Company'
                    value={formik.values.telephoneCompany}
                    onChange={formik.handleChange}
                    error={formik.touched.telephoneCompany && Boolean(formik.errors.telephoneCompany)}
                    helperText={formik.touched.telephoneCompany && formik.errors.telephoneCompany}
                    icon={<CallIcon />}
                />
            </FormControl>
            <FormControl>
                <TextFieldWithIcon
                    id={'emailCompany'}
                    name={'emailCompany'}
                    label='Email Company'
                    value={formik.values.emailCompany}
                    onChange={formik.handleChange}
                    error={formik.touched.emailCompany && Boolean(formik.errors.emailCompany)}
                    helperText={formik.touched.emailCompany && formik.errors.emailCompany}
                    icon={<EmailIcon />}
                />
            </FormControl>
            <FormControl>
                <TextFieldWithIcon
                    id={'addressCompany'}
                    name={'addressCompany'}
                    label='Addres Company'
                    value={formik.values.addressCompany}
                    onChange={formik.handleChange}
                    error={formik.touched.addressCompany && Boolean(formik.errors.addressCompany)}
                    helperText={formik.touched.addressCompany && formik.errors.addressCompany}
                    icon={<LocationOnIcon />}
                />
            </FormControl>
        </>
    );
};

export default CompanyFormFields;
