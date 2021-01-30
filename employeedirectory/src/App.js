import Header from './components/Header/Header'
import Subheader from './components/Subheader/Subheader.js'
import EmployeeTable from './components/EmployeeTable/EmployeeTable.js'

function App() {
  return (
    <div className='container'>
     <Header />
     <Subheader />
     <EmployeeTable />
    </div>
  );
}

export default App;
