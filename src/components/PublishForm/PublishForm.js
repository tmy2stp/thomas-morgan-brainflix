import './PublishForm.scss';
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import publishBtn from '../../assets/icons/publish.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PublishForm = () => {
    const [message, setMessage] = useState('');
    const { handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const API_KEY = "?api_key=test";
    const API_ALL_VIDEO_URL = "http://localhost:8000/videos";
    const sleep = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    const onSubmit = async (data, e) => {
        e.preventDefault();
        axios.post((API_ALL_VIDEO_URL + API_KEY), {
            title:e.target[0].value,
            channel:'tmy2stp',
            description:e.target[1].value,
            timestamp:Date.now()
        })
        .then(response => {
            console.log(response);
        })
        .catch (function (error) {
            console.log(error);
        });
        setMessage("Your video has been successfully published! You will now be redirect to the home page in 5 seconds");
        reset();
        //await sleep(5000);
        //navigate("/");
    };

    return (
        <form className="publish__form" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="form__title" className="upload__label">Title your video</label>
            <input type="text" id="form__title" className="upload__text-input-box" placeholder="Add a title to your video"></input>
            <label className="upload__label">Add a video description</label>
            <textarea id="form__video-description" className="upload__text-input-box-large" placeholder="Add a description to your video"></textarea>
            <div className="upload__margin-tablet"></div>
            {message}
            <button type="submit" className="upload__publish-btn">
                <img src={publishBtn} alt="publish button icon" className="upload__btn-icon" />PUBLISH
            </button>
            <Link to="/" className="upload__cancel-link"><button className="upload__cancel-btn">
                CANCEL
            </button></Link>
        </form>
    );
};

export default PublishForm