import "./style.css";

import { uploads } from "../../utils/config";

import Message from "../../components/Message";
import { Link, useParams } from "react-router-dom";
import { BsFillEyeFill, BsPencilFill, BsXLg } from "react-icons/bs";

import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getUserDetails } from "../../slices/userSlice";

export function Profile() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetails(id));
  }, [dispatch, id]);

  const { user, loading } = useSelector((state) => state.user);
  const { user: useAuth } = useSelector((state) => state.auth);

  const newPhotoForm = useRef();
  const editPhotoForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="profile">
      <div className="profile-header">
        {/* {user.profileImage && (
          <img src={`${uploads}/users/${user.profileImage}`} alt={user.name} />
        )} */}
        <div className="profile-description">
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
        </div>
      </div>
      {id === useAuth._id && (
        <div className="new-photo" ref={newPhotoForm}>
          <h3>Compratilhe algum momento seu:</h3>
          <form onSubmit={handleSubmit}>
            <label type="text">
              <span>Titulo para foto:</span>
              <input type="text" placeholder="Insira um Titulo" />
            </label>
            <label type="file">
              <span>Image:</span>
              <input type="text" />
            </label>
            <button type="submit">Postar</button>
          </form>
        </div>
      )}
    </div>
  );
}
