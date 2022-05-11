import logo from './logo.svg';
import './App.css';
import { Greet } from './Greet';
import { GreetAll } from './Greet'
import GreetComponent from './GreetComponent';
import ErrorHandler from './ErrorHandler';
import PureComponentParent from './PureComponentParent';
import AddCounterCartButtonClickTracker from './CartButtonClickTracker'
import AddCounterItemButtonClickTracker from './ItemButtonClickTracker'
import C1 from './C1';
import { Provider } from './RContext'
import ButtonClicker from './ButtonClicker';
import HooksButtonClicker from './HooksButtonClicker'
import HooksContext from './HooksContext';
import StudentDashboard from './StudentDashboard';
import Counter from './Counter';
import LibraryHome from './LibraryHome';
import BookCounter from './BookCounter';
import LibraryHomeCls from './LibraryHomeCls';
import BookCountercls from './BookCountercls';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Greet /> */}
      {/* <GreetAll name="Siva" course='Java' msg="Click button to say hello from props" /> */}
      {/* <GreetAll name="Murugesan" course='ReactJS' /> */}

      {/* <ErrorHandler>
        <GreetComponent name="Murugesan" course='ReactJS' msg="Click button to say hello from props" />
      </ErrorHandler> */}
      {/* <PureComponentParent /> */}
      {/* <ErrorHandler>
        <GreetComponent name="Credo" course='ReactJS' msg="Click button to say hello from props" />
      </ErrorHandler>
      <ErrorHandler>
        <GreetAll name="Murugesan" course='ReactJS' />
      </ErrorHandler> */}
      {/*  <AddCounterCartButtonClickTracker />
      <AddCounterItemButtonClickTracker /> */}
      {/* <Provider value={<><h1>This is a message for H1/H3</h1> <h2>This is a message for H2</h2> </>}>
        <C1 />
        <HooksContext />
      </Provider> */}
      {/*  <StudentDashboard /> */}
      {/* <Counter />  */}
      {/* <GreetComponent /> */}
      {/* <ButtonClicker /> */}
      {/* <HooksButtonClicker /> */}
      {/*  <LibraryHome />
      <BookCounter /> */}
      <LibraryHomeCls />
      <BookCountercls />
    </div>
  );
}

export default App;
