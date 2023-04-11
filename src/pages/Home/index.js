import "./style.css";

import LikeContainer from "../../components/LikeContainer";
import PhotoItem from "../../components/photoItem";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhotos, like, restMessage } from "../../slices/photoSlice";

export function Home() {
  const dispatch = useDispatch();

  const resetMenssage = useReset;

  const { user } = useSelector((state) => state.auth);
  const { photos, loading } = useSelector((state) => state.photo);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  const handleLike = () => {
    dispatch(like(photo._id));

    resetMenssage();
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
