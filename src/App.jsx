
import AppMainFetchApi from './components/fetchdataApi/AppMainFetchApi';
import MainJsonServerApi from './components/fetchjsonserverapi/MainJsonServerApi';
import Footer from './components/Footer';
import Header from './components/Header';
import MainProps from './components/propsandinput/MainProps';

const App = () => {

  return (
    <div className={`flex justify-center items-center`}>
      <Header title="REACT JS Learning" />
      <MainJsonServerApi/>
      {/* <AppMainFetchApi/> */}
      {/* <ListAndKeys /> */}
      {/* <MainProps/> */}
      <Footer />
    </div>
  );
}

export default App;
