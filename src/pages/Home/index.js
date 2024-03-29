import "./style.css";

import { LikeContainer } from "../../components/LikeContainer";
import { PhotoItem } from "../../components/photoItem";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage";
import { getPhotos, like } from "../../slices/photoSlice";

export function Home() {
  const dispatch = useDispatch();

  const restMessage = useResetComponentMessage(dispatch);

  const { user } = useSelector((state) => state.auth);
  const { photos, loading } = useSelector((state) => state.photo);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  const handleLike = (photo) => {
    dispatch(like(photo._id));

    restMessage();
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="home">
      {photos &&
        photos.map((photo) => (
          <div key={photo._id}>
            <PhotoItem photo={photo} />
            <LikeContainer photo={photo} user={user} handleLike={handleLike} />
            <Link className="btn" to={`/photos/${photo._id}`}>
              Ver mais
            </Link>
          </div>
        ))}
      {photos && photos.length === 0 && (
        <h2 className="no-photos">
          ainda não há publicações
          <Link to={`/users/${user._id}`}>Faça um post</Link>
        </h2>
      )}
    </div>
  );
}
