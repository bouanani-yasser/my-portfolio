import {
   createContext,
   Dispatch,
   ReactNode,
   SetStateAction,
   useContext,
   useState,
} from 'react';

type Props = {
   children: ReactNode;
};

// type appContextType = {
//    dark: boolean;
//    setDark: () => Dispatch<SetStateAction<boolean>> | null;
// };

const defaultVal: any = {
   dark: false,
   setDark: () => null,
};
const AppContext = createContext(defaultVal);

export function AppWrapper({ children }: Props) {
   const [dark, setDark] = useState<boolean>(false);
   let value = {
      dark,
      setDark,
   };

   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
   return useContext(AppContext);
}
