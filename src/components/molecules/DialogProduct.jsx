import { useState, useEffect } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    Button,
    FormControl,
    ButtonGroup,
    Stack
} from '@mui/material';

function generateRandomId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let randomId = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters.charAt(randomIndex);
    }

    return randomId;
}

const DialogProduct = ({ openDialog, closePopup, titleDialog, handler, product }) => {
    const [id, setId] = useState(generateRandomId(8));
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [unitPrice, setUnitPrice] = useState(0);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        // Cuando se pasa un producto, actualiza los estados con los datos del producto
        if (product) {
            setId(product.id);
            setName(product.name);
            setAmount(product.amount);
            setUnitPrice(product.unitPrice);
            setSubtotal(product.subtotal);
        } else {
            // Si no se pasa un producto, reinicia los estados
            setId(generateRandomId(8));
            setName('');
            setAmount(0);
            setUnitPrice(0);
            setSubtotal(0);
        }
    }, [product]);

    useEffect(() => {
        //Se reincian los estados cuando se abre o cierra el dialog
        if (!openDialog) {
            setId(generateRandomId(8));
            setName('');
            setAmount(0);
            setUnitPrice(0);
            setSubtotal(0);
        }
    }, [openDialog]);

    const handletButton = () => {
        const _object = {
            id,
            name,
            amount,
            unitPrice,
            subtotal: parseInt(amount) * parseFloat(unitPrice)
        };
        handler(_object);
        closePopup();
    };

    return (
        <Dialog open={openDialog} onClose={closePopup} fullWidth maxWidth="sm">
            <DialogTitle>
                <span>{titleDialog}</span>
            </DialogTitle>
            <DialogContent>
                <Stack spacing={2} margin={2}>
                    <TextField value={name} onChange={(e) => setName(e.target.value)} variant="outlined" label="Product Name" />
                    <TextField value={amount} onChange={(e) => setAmount(e.target.value)} variant="outlined" label="Amount" type="number" />
                    <TextField value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} variant="outlined" label="Unit Price" />
                    <FormControl>
                        <ButtonGroup>
                            <Button variant="contained" color="success" onClick={handletButton}>
                                {product ? 'Update' : 'Add'}
                            </Button>
                            <Button variant="contained" color="error" onClick={closePopup}>
                                Cancel
                            </Button>
                        </ButtonGroup>
                    </FormControl>
                </Stack>
            </DialogContent>
        </Dialog>
    );
};

export default DialogProduct;
