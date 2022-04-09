import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRow, currentRow } from '../reducer';
import TransitionsModal from './Modal/ModalView';

export default function BasicTable() {
  const locale = useSelector((state) => state.dictionary.locale);
  let dictionary = useSelector((state) => state.dictionary)
  dictionary = dictionary[`${locale}`];

  const rows = useSelector((state) => state.rowData.data)
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = index => {
      dispatch(currentRow(index));
      setOpenModal(true);
  };

  const handleClose = () => setOpenModal(false);



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{dictionary.firstName}
            </TableCell>
            <TableCell>{dictionary.lastName}</TableCell>
            <TableCell align="right">{dictionary.age}</TableCell>
            <TableCell align="center">{dictionary.salary}</TableCell>
            <TableCell align="center" padding='none'>{dictionary.edit}</TableCell>
            <TableCell align="center">{dictionary.delete}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firsName}
              </TableCell>
              <TableCell>{row.LastName}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="center">{row.salary}</TableCell>
              <TableCell align="center" >
                  <IconButton color="primary" onClick={() => handleOpen(index)}>
                      <EditIcon />
                  </IconButton>
              </TableCell>
              <TableCell align="center" padding='none'>
                  <IconButton color="error" onClick={() => dispatch(deleteRow(index))}>
                      <DeleteIcon />
                  </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {openModal && <TransitionsModal openModal={openModal} handleClose={handleClose}/>}
    </TableContainer>
  );
}