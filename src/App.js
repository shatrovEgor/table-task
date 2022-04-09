import './App.css';
import ImportField from './Components/ImportField';
import LangSettings from './Components/LangSettings';
import BasicTable from './Components/Table';
import { MainContainer, TableContainer, LangContainer, MainContainerScroll } from './Components/_styles';

function App() {
  return (
    <div className="App">
      <LangContainer>
        <LangSettings />
      </LangContainer>

      <MainContainerScroll>
        <ImportField />
      </MainContainerScroll>
      
      <MainContainer>
        <TableContainer>
          <BasicTable/>
        </TableContainer>
      </MainContainer>
    </div>
  );
}

export default App;
