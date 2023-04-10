import "./style.css";

import { uploads } from "../../utils/config";

import Message from "../../components/Message";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhoto } from "../../slices/photoSlice";
import { PhotoItem } from "../../components/photoItem";

export function Photo() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { photo, loading, error, message } = useSelector(
    (state) => state.photo
  );

  useEffect(() => {
    dispatch(getPhoto(id));
  }, [dispatch, id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="photo">
      <PhotoItem photo={photo} />
    </div>
  );
}
