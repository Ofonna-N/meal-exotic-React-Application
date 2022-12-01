
import './App.module.css';
import CartContextProvider from './Components/cart-ctx/cart-context-provider';
import CartModalToggleContextProvider from './Components/cart-modal-toggle-ctx/cart-modal-toggle-provider';
import CartPanel from './Components/cart-panel/cart-panel';
import Header from './Components/header/header';
import Menu from './Components/menu/menu';
import Modal from './Components/modal/modal';
import NavBar from './Components/nav-bar/nav-bar';
import Summary from './Components/summary/summary';

function App() {
  return (
    <div className="App">
      <CartModalToggleContextProvider>
        <CartContextProvider>
          <NavBar />
          <Header />
          <Summary />
          <Menu />
          <Modal>
            <CartPanel />
          </Modal>
        </CartContextProvider>
      </CartModalToggleContextProvider>
    </div>
  );
}

export default App;
