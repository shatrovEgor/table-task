import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Title, ImportContainer, BlockContainer, BtnToInput } from './_styles';
import Button from '@mui/material/Button';
import mock from "../mock.json";
import { useDispatch, useSelector } from 'react-redux';
import { addRow } from '../reducer';
import FileInput from './FileInput';

const ImportField = () => {
    const locale = useSelector((state) => state.dictionary.locale);
    let dictionary = useSelector((state) => state.dictionary)
    dictionary = dictionary[`${locale}`];

    const dispatch = useDispatch();
    const rowData = useSelector((state) => state.rowData.data);

    let defaultValue = JSON.stringify(mock);

    const [value, setValue] = useState(defaultValue);
    
    const clearField = () => {
        setValue('');
    };

    const handlerAddRow = () => {
        dispatch(addRow(JSON.parse(value)));
    };

    const handleChange = event => {
        setValue(event.target.value);
    };

    const handlerDataToInput = () => {
        setValue(JSON.stringify(rowData));
    };

    return (
        <>
        <ImportContainer>
            <BlockContainer>
                <Title>
                    {dictionary.importJson}
                </Title>
                <FileInput />
            </BlockContainer>
                
            <BlockContainer>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                >
                <TextField
                  fullWidth 
                  id="outlined-multiline-static"
                  label={dictionary.yourJson}
                  multiline
                  rows={6}
                  value={value}
                  onChange={handleChange}
                />
                </Box>
                <Box sx={{ '& button': { m: 1 }, display: 'flex', justifyContent: 'end' }}>
                    <Button variant="contained" size="medium" onClick={handlerAddRow}>
                      {dictionary.add}
                    </Button>
                    <Button variant="outlined" size="medium" onClick={clearField}>
                      {dictionary.clear}
                    </Button>
                </Box> 
            </BlockContainer>     
      </ImportContainer> 
      <BtnToInput>
          <Button onClick={handlerDataToInput}>
            {dictionary.toInput}
          </Button>
      </BtnToInput>
      </>
    )
};

export default ImportField;