import { useMemo } from "react";
import { bindActionCreators } from "redux";
import { useAppDispatch } from "shared/hooks/redux";
export const cartActions = () => {
  const dispatch = useMemo(() => useAppDispatch(), []);
};
