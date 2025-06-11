import "./Profile.css";

import { uploads } from "../../utils/config";

import Message from "../../components/Message/Message";

import { Link } from "react-router-dom";
import { BsFillEyeFill, BsPencilFill, BsXLg } from "react-icons/bs";

import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getUserDetails } from "../../slices/userSlice";

const Profile = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.user);
  const { user: userAuth } = useSelector((state) => state.auth);

  //photo

  //load user data
  useEffect(() => {
    dispatch(getUserDetails(id))
  }, [dispatch, id])

  return <div></div>;
};

export default Profile;
