import { useMemo } from "react";
import { bindActionCreators } from "redux";
import { useAppDispatch } from "shared/hooks/redux";
import { actions } from "./slice";

export const useCartActions = () => {
  const dispatch = useAppDispatch();
  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};
