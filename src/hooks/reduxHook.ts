import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import { AppDispatch, RootState } from "../redux/redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
