import React from "react";
const images = "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
const PostCard = ({ username, caption, likes, comments }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="font-bold">{username}</h3>
      <img src={images} alt="Post" className="w-full h-auto rounded my-2" />
      <p>{caption}</p>
      <div className="flex justify-between text-sm text-gray-600">
        <span>{likes} likes</span>
        <span>{comments} comments</span>
      </div>
    </div>
  );
};

export default PostCard;
