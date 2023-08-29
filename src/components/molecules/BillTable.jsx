import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from 'react';

const products = [
  {
    id: 0,
    name: 'Porduct 1',
    amount: 1,
    unitPrice: 500,
    subtotal: 500,
  },
  {
    id: 1,
    name: 'Porduct 2',
    amount: 1,
    unitPrice: 500,
    subtotal: 500,
  },
]

const BillTable = () => {

  const collumns = [
    { id: 'id', name: 'Id' },
    { id: 'name', name: 'Name' },
    { id: 'amount', name: 'Amount' },
    { id: 'unitPrice', name: 'Unit Price' },
    { id: 'totalPrice', name: 'Total Price' },
    { id: 'actions', name: 'Actions' },
  ]

  const [listProducts, setListProducts] = useState(products);
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    calculateTotalPrice()
  }, [listProducts])

  const functionAddProduct = () => {
    handleAddProduct()
    openpopup();
  }

  const handleAddProduct = () => {

    const productNew = {
      id: 2,
      name: 'Porduct 3',
      amount: 1,
      unitPrice: 100,
      subtotal: 100,
    }
    setListProducts([...listProducts, productNew]);
  }

  const handleEditProduct = (code) => {
    console.log("Editando product" + code);
  }

  const handleRemoveProduct = (code) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      const newListProduct = listProducts.filter((product) => product.id !== code);
      setListProducts(newListProduct);
    }
  };

  const calculateTotalPrice = () => {
    const initialValue = 0
    const totalPrice = listProducts.reduce((totalPrice, product) => totalPrice + product.subtotal, initialValue)
    setTotalPrice(totalPrice)
  }

  const closepopup = () => {
    console.log("Close popups");
  }

  const openpopup = () => {
    console.log("Open popups");
  }


  return (
    <div>
      <Paper sx={{ margin: '1%' }} style={{ height: 700, width: '100%' }}>
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
                  listProducts.map((row, i) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.amount}</TableCell>
                      <TableCell>{row.unitPrice}</TableCell>
                      <TableCell>{row.subtotal}</TableCell>
                      <TableCell>
                        <Button sx={{ m: 1 }} onClick={() => { handleEditProduct(row.id) }} variant='contained' color="primary" startIcon={<EditIcon />}>
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
    </div>
  )
}

export default BillTable