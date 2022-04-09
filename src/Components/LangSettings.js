import React from "react";
import { SettingsContainer } from "./_styles";
import { useSelector, useDispatch } from "react-redux";
import CachedIcon from '@mui/icons-material/Cached';
import { IconButton } from '@mui/material';
import { pickLocale } from "../dictionary";

const LangSettings = () => {
  const locale = useSelector((state) => state.dictionary.locale);
  let dictionary = useSelector((state) => state.dictionary)
  dictionary = dictionary[`${locale}`];

  const dispatch = useDispatch();

  const handlerLang = () => {
      if(locale === 'En') {
        dispatch(pickLocale('Ru'));
      } else {
        dispatch(pickLocale('En'));
      }
  }

    return (
        <SettingsContainer>
            <IconButton aria-label="add an alarm" onClick={handlerLang}>
                <CachedIcon />
            </IconButton>
            {dictionary.language}: {dictionary.localeLn}
        </SettingsContainer>  
    )
};

export default LangSettings;