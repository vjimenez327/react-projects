
import './App.css'
import GitHubProfileFinder from './components/GithubFinder'
import Accordian from './components/Accordian'
import ColorChanger from './components/ColorChanger'
import SearchAutocomplete from './components/SearchAutocomplete'
import ImageSlider from './components/ImageSlider'
import LoadMoreData from './components/LoadMoreData'
import TreeView from './components/TreeView'
import menus from './components/TreeView/data'
import LightDarkMode from './components/LightDarkMode'
import ScrollIndicator from './components/ScrollIndicator'
import Products from './components/ProductsDisplay'

function App() {

  return (
    <>
      <div className="App">
      {/* <Accordian /> 
          <ColorChanger /> 
          <GitHubProfileFinder />
          <SearchAutocomplete />
          ---- NEED TO CREATE AGAIN

          <ImageSlider url={`https://picsum.photos/v2/list`} limit={'7'} page={'10'}/>
          <LoadMoreData />
          <TreeView menus={menus}/>
          <LightDarkMode />
          <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />
          <SearchAutocomplete />
        */}
        <Products />
      </div>
    </>
  )
}

export default App
