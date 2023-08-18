import { useDispatch, useSelector } from "react-redux";
import { RooteState, AppDispatch } from "@/components/store";
const Dispatch = useDispatch<AppDispatch>();
const state = useSelector((state : RooteState) => state);

export {Dispatch, state} ;
