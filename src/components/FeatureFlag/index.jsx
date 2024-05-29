import { useContext } from "react"
import Accordian from "../Accordian"
import ColorChanger from "../ColorChanger"
import LightDarkMode from "../LightDarkMode"
import TreeView from "../TreeView"
import menus from '../TreeView/data'
import { FeatureFlagContext } from "./context"


export default function FeatureFlags(){

  const {loading, enabledFlags} = useContext(FeatureFlagContext);

  const componentsToRender = [
    {
      key: 'showLightAndDarkMode',
      component: <LightDarkMode />
    },
    {
      key: 'showRandomColorGenerator',
      component: <ColorChanger />
    },
    {
      key: 'showAccordian',
      component: <Accordian />
    },
    {
      key: 'showTreeView',
      component: <TreeView menus={menus}/>
    },
  ]

  const checkEnabledFlags = (getCurrentKey) => {
    return enabledFlags[getCurrentKey]
  }

  if(loading) <h1>Loading...Please wait.</h1>

  return <div>
    <h1> Feature Flags </h1>
    {
      componentsToRender.map(component => checkEnabledFlags(component.key) ? component.component: null)
    }
  </div> 
}