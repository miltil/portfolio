import './App.css';
// import RequestFlow from './components/RequestFlow/RequestFlow';
// import Button from './components/Button/Button';
// import {useState} from 'react';
import PatientRegistration from './pages/PatientRegistration/PatientRegistration';

function App() {
  return (
    <PatientRegistration />
  );
}
//   const totalPages = 4;
//   const [currentPage, setCurrentPage] = useState(1);

//   const nextPage = () => {
//     setCurrentPage(currentPage + 1);
//   }

//   const prevPage = () => {
//     setCurrentPage(currentPage - 1);
//   }

//   return (
//     <div className="container">
//       <header className="header">
//         <h1 className="title">Rainy Days Health App</h1>
//         <h2 className="subtitle">Frontend Development Demo, Coded in React</h2>
//       </header>
//       <div className="phone-container">
//         <div className="phone-display">
//           <div className="inner-display">
//             <RequestFlow currentPage={currentPage} totalPages={totalPages} />
//             <div className="button-container">
//               <Button onClick={nextPage}>Next</Button>
//               <Button onClick={prevPage}>Back</Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
