// Redux
import { restMessage } from "../slices/photoSlice";

export const useResetComponentMessage = (dispatch) => {
  return () => {
    setTimeout(() => {
      dispatch(restMessage());
    }, 2000);
  };
};
