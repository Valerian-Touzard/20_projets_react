import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall, { FeatureFlagsResponse } from "../data";

export const FeatureFlagContext = createContext({});

export const FeatureFlagGlobalState = ({
  children,
}: React.PropsWithChildren) => {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  const fetchFeatureFlags = async () => {
    try {
      setLoading(true);
      // Appelle original du service
      const response: FeatureFlagsResponse =
        await featureFlagsDataServiceCall();
      setEnabledFlags(response);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      throw new Error(error as string);
    }
  };

  return (
    <FeatureFlagContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagContext.Provider>
  );
};
