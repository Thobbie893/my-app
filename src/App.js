import logo from './logo.svg';
import './App.css';

import Sidebar from './components/Sidebar';
import Invoicesfilled from './components/Invoicesfilled';
import Invoicecard from './components/database/Invoicecard';
import Invoicesempty from './components/Invoicesempty';
import Realinvoice from './components/Realinvoice';
import Editinvoice from './components/Editinvoice';
import Editmode from './components/Editmode';
import Deletecomponent from './components/Deletecomponent';


function App() {
  return (
    <>
    <Deletecomponent/>
  <div className='invoice-app-container'>
    <Sidebar/>
    <main>
    {/* <Invoicesfilled/> */}
    </main>
    
    {/* <Invoicesempty/> */}
    {/* <Realinvoice/> */}
    {/* <Editinvoice/> */}
    {/* <Editmode/> */}
    
  </div>
  
  </>
  );
}
export default App;
