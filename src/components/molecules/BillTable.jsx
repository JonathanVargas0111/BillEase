import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from 'react';
import DialogProduct from './DialogProduct';


const BillTable = ({ listProducts, setListProducts }) => {

  const collumns = [
    { id: 'name', name: 'Name' },
    { id: 'amount', name: 'Amount' },
    { id: 'unitPrice', name: 'Unit Price' },
    { id: 'totalPrice', name: 'Total Price' },
    { id: 'actions', name: 'Actions' },
  ]


  const [totalPrice, setTotalPrice] = useState(0)

  const [openDialog, openDialogChange] = useState(false)
  const [titleDialog, titleDialogChange] = useState('Create Product');
  const [isEdit, setIsEdit] = useState(false)
  const [product, setProduct] = useState(null)

  useEffect(() => {
    calculateTotalPrice()
  }, [listProducts])


  const closePopup = () => {
    openDialogChange(false)
  }
  const openPopup = () => {
    openDialogChange(true)
  }

  const functionAddProduct = () => {
    setIsEdit(false)
    setProduct(null)
    titleDialogChange('Create Product');
    openPopup();
  }

  const functionEditProduct = (product) => {
    setIsEdit(true)
    titleDialogChange('Edit Product');
    setProduct({ ...product });
    openPopup();
  }


  const handleAddProduct = (newProduct) => {
    setListProducts([...listProducts, newProduct]); // Usa la función pasada desde InformationForm
  };

  const handleEditProduct = (updateProduct) => {
    const updatedListProducts = listProducts.map((product) =>
      product.id === updateProduct.id ? updateProduct : product
    );
    setListProducts(updatedListProducts); // Usa la función pasada desde InformationForm
    openPopup();
  };

  const handleRemoveProduct = (code) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      const newListProduct = listProducts.filter((product) => product.id !== code);
      setListProducts(newListProduct); // Usa la función pasada desde InformationForm
    }
  };

  const calculateTotalPrice = () => {
    const initialValue = 0
    const totalPrice = listProducts.reduce((totalPrice, product) => totalPrice + product.subtotal, initialValue)
    setTotalPrice(totalPrice)
  }

  return (
    <div>
      <Paper sx={{ margin: '1%' }} style={{ height: 350, width: '100%' }}>
        <div style={{ maring: '1%' }}>
          <div style={{ maring: '1%' }}>
            <Button onClick={functionAddProduct} variant="contained" aria-label="outlined"> Add product (+) </Button>
          </div>
        </div>
        <div style={{ maring: '1%' }}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow style={{ background: 'black' }}>
                  {
                    collumns.map((collumn) =>
                      <TableCell align="left" style={{ color: 'white' }} key={collumn.id}>{collumn.name}</TableCell>
                    )
                  }
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  listProducts.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.amount}</TableCell>
                      <TableCell>{row.unitPrice}</TableCell>
                      <TableCell>{row.subtotal}</TableCell>
                      <TableCell>
                        <Button sx={{ m: 1 }} onClick={() => { functionEditProduct(row) }} variant='contained' color="primary" startIcon={<EditIcon />}>
                          Edit
                        </Button>
                        <Button sx={{ m: 1 }} onClick={() => { handleRemoveProduct(row.id) }} variant="contained" color="error" startIcon={<DeleteIcon />} >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                }
                <TableRow>
                  <TableCell>Total Price</TableCell>
                  <TableCell>{ }</TableCell>
                  <TableCell>{ }</TableCell>
                  <TableCell>{ }</TableCell>
                  <TableCell>{totalPrice}</TableCell>
                  <TableCell>{ }</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Paper>

      <DialogProduct
        openDialog={openDialog}
        closePopup={closePopup}
        titleDialog={titleDialog}
        handler={isEdit ? handleEditProduct : handleAddProduct}
        product={product || null}
      />
    </div>
  )
}

export default BillTable