import React, {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { SmallTitle } from '../_styles';
import { editRow } from '../../reducer';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal(props) {
  const locale = useSelector((state) => state.dictionary.locale);
  let dictionary = useSelector((state) => state.dictionary);
  dictionary = dictionary[`${locale}`];

  const { openModal, handleClose } = props;
  const dispatch = useDispatch();

  const rowValue =  useSelector((state) => state.rowData.currentRow)
  const rowID = useSelector((state) => state.rowData.currentID)

  const parseRow = JSON.stringify(rowValue)

  const [value, setValue] = useState(parseRow)

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleRowEdit = () => {
      const data = JSON.parse(value);
      dispatch(editRow({data, id: rowID}));
  };

  return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <SmallTitle>
              {dictionary.editRow}
            </SmallTitle>
            <TextField
              fullWidth 
              id="outlined-multiline-static"
              label={dictionary.yourJson}
              multiline
              rows={4}
              value={value}
              onChange={handleChange}
            />
            <Box sx={{ '& button': { m: 1 }, display: 'flex', justifyContent: 'end' }}>
                <Button variant="contained" size="medium" onClick={handleRowEdit}>
                  {dictionary.edit}
                </Button>
                <Button variant="outlined" size="medium" onClick={handleClose}>
                  {dictionary.close}
                </Button>
            </Box> 
          </Box>
        </Fade>
      </Modal>
  );
}