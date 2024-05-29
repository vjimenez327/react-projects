import { createContext, useEffect, useState } from "react";
import featureFlagDataServiceCall from "../data";


export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }){
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  const fetchFeatureFlags = async () => {
    try {
      setLoading(true);
      const response = await featureFlagDataServiceCall();
      console.log(response);
      setEnabledFlags(response);
      setLoading(false);
    } catch(e) {
      console.log(e.message);
      setLoading(false);
      throw new Error(e);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, [])

  return <FeatureFlagContext.Provider value={{ loading, enabledFlags }}>
    {children}
  </FeatureFlagContext.Provider>
}
