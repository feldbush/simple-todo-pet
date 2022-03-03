import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { RootState } from "../reducers";

export const useTypedDispatch : Dispatch<RootState> = useDispatch; 