import { FormControl } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TagIcon from '@mui/icons-material/Tag';
import DateFieldWrapper from '../atoms/DateFieldWrapper';
import TextFieldWithIcon from '../atoms/TextFieldWithIcon';
import Typography from '@mui/material/Typography';

const BillFormFields = ({ formik }) => {
  return (
    <>

      <Typography variant="h6" gutterBottom>
        Bill
      </Typography>
      <FormControl>
        <TextFieldWithIcon
          id={'numberBill'}
          name={'numberBill'}
          label='Number Bill'
          type='number'
          value={formik.values.numberBill}
          onChange={formik.handleChange}
          error={formik.touched.numberBill && Boolean(formik.errors.numberBill)}
          helperText={formik.touched.numberBill && formik.values.numberBill.toString()}
          icon={<TagIcon />}
        />
      </FormControl>
      <FormControl>

        <DateFieldWrapper
          id={'dateBill'}
          name={'dateBill'}
          label="Date Bill"
          value={formik.values.dateBill}
          onChange={(date) => formik.setFieldValue('dateBill', date)}
          error={formik.touched.dateBill && Boolean(formik.errors.dateBill)}
          helperText={formik.touched.dateBill && formik.errors.dateBill}
          icon={<CalendarTodayIcon />}
        />
      </FormControl>

    </>
  )
}

export default BillFormFields