import { createSlice } from '@reduxjs/toolkit'

export const dictionary = createSlice({
  name: 'dictionary',
  //хардкод для примера
  initialState: {
    En: { firstName: "First name",
          lastName: "Last name", 
          age: "Age", 
          salary: "Salary",
          edit: "Edit",
          delete: "Delete",
          language: "Language",
          localeLn: "English",
          pickFile: "Select a file",
          editRow: "Edit row",
          close: "Close",
          yourJson: "Your JSON",
          importJson: "Import a file from your computer (JSON file format)",
          add: "Add",
          clear: "Clear",
          toInput: "Move to textAria"
        },
    Ru: { firstName: "Имя", 
          lastName: "Фамилия", 
          age: "Возраст", 
          salary: "Зарплата",
          edit: "Редактировать",
          delete: "Удалить",
          language: "Язык",
          localeLn: "Русский",
          pickFile: "Выберите файл",
          editRow: "Редактировать строку",
          close: "Закрыть",
          yourJson: "Ваш JSON",
          importJson: "Импорт файла c вашего компьютера(фомат файла JSON)",
          add: "Добавить",
          clear: "Очистить",
          toInput: "Перенести в textAria"
        },
    locale: 'Ru'
  },
  reducers: {
    pickLocale: (state, action) => {
      state.locale = action.payload;
    }
  },
})

export const { pickLocale } = dictionary.actions

export default dictionary.reducer