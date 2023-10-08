import React from "react";

const SearchData = (props) => {
  const link = `https://source.unsplash.com/random/${props.img}`;
  return (
    <>
      <div>
        <img src={link} alt="anytype of iamge" />
      </div>
    </>
  );
};
export default SearchData;
