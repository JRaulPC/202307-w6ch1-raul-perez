import React, { PropsWithChildren } from "react";
const FilmsContextProvider = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  return <FilmsContextProvider>{children}</FilmsContextProvider>;
};
export default FilmsContextProvider;
