import { Container, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useState } from 'react';

import BillFormFields from '../molecules/BillFormFields';
import CompanyFormFields from '../molecules/CompanyFormFields';
import ClientFormFields from '../molecules/ClientFormFields';
import BillTable from '../molecules/BillTable';

const validationSchema = Yup.object({
  nameCompany: Yup.string().required('Enter Name Company'),
  nitCompany: Yup.string().required('Enter Nit'),
  telephoneCompany: Yup.string().required('Enter telephone Company'),
  emailCompany: Yup.string().required('Enter Email Company'),
  addressCompany: Yup.string().required('Enter Addres Company'),
  dateBill: Yup.date().required('Enter Date Bill'),
  numberBill: Yup.number().required('Enter Number Bill'),
  nameClient: Yup.string().required('Enter Name Client'),
  emailClient: Yup.string().required('Enter Email Client'),
})


const InformationForm = () => {
  const [listProducts, setListProducts] = useState([]);
  const formik = useFormik({
    initialValues: {
      nameCompany: '',
      nitCompany: '',
      telephoneCompany: '',
      emailCompany: '',
      addressCompany: '',
      dateBill: null,
      numberBill: '',
      nameClient: '',
      emailClient: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      console.log(listProducts);
    },

  })

  return (
    <Container maxWidth='md'>
      <form onSubmit={formik.handleSubmit}>
        <BillFormFields formik={formik} />
        <CompanyFormFields formik={formik} />
        <ClientFormFields formik={formik} />
        <BillTable
            listProducts={listProducts} // Pasa el estado
            setListProducts={setListProducts} // Pasa la función para actualizar el estado
        ></BillTable>
        <Button color='primary' variant='contained' fullWidth type='submit'>
          Save
        </Button>
      </form>
    </Container>
  )
}

export default InformationForm