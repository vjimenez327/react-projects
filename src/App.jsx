
import './App.css'
import GitHubProfileFinder from './components/GithubFinder';
import Accordian from './components/Accordian';
import ColorChanger from './components/ColorChanger';
// import SearchAutocomplete from './components/SearchAutocomplete;
import ImageSlider from './components/ImageSlider';
import LoadMoreData from './components/LoadMoreData';
import TreeView from './components/TreeView';
import menus from './components/TreeView/data';
import QRCodeGenerator from './components/QRGenerator'; 
import LightDarkMode from './components/LightDarkMode'
import ScrollIndicator from './components/ScrollIndicator'
import FeatureFlagGlobalState from './components/FeatureFlag/context'
import FeatureFlags from './components/FeatureFlag'
import TicTacToe from './components/TicTacToe';

function App() {

  return (
    <>
      <div className="App">
      {/* <Accordian /> 
          <ColorChanger /> 
          <GitHubProfileFinder />
          <ImageSlider url={`https://picsum.photos/v2/list`} limit={'7'} page={'10'}/>
          <LoadMoreData />
          <TreeView menus={menus}/>
        <QRCodeGenerator />
          <LightDarkMode />
          <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />
          <FeatureFlagGlobalState>
          <FeatureFlags />
          </FeatureFlagGlobalState>
        */}
        <TicTacToe />
      </div>
    </>
  )
}

export default App
