import React from "react";
import styled from "styled-components";
import { FaCommentAlt, FaThumbsUp, FaRegEye } from "react-icons/fa";
import Card from "../Card";

const StyledRoot = styled.div`
  padding: 50px 12px;
`;
const StyledContainer = styled.div`
  max-width: 550px;
  width: 100%;
  margin: auto;
`;
const CardGen = props => {
  const date = new Date().toLocaleDateString();
  const onCommentClick = () => alert("You clicked comments");
  const onLikesClick = () => alert("You clicked comments");
  const onViewsClick = () => alert("You clicked comments");
  const buttons = [
    {
      id: 1,
      label: (
        <>
          <FaCommentAlt /> 0 Comments
        </>
      ),
      onClick: onCommentClick
    },
    {
      id: 2,
      label: (
        <>
          <FaThumbsUp /> 242 Likes
        </>
      ),
      onClick: onLikesClick
    },
    {
      id: 3,
      label: (
        <>
          <FaRegEye /> 187288 Views
        </>
      ),
      onClick: onViewsClick
    }
  ];
  return (
    <StyledRoot>
      <StyledContainer>
        <Card
          image={props.image}
          title={props.title}
          date={date}
          description={props.desc}
          actions={buttons}
        />
      </StyledContainer>
    </StyledRoot>
  );
};
export default CardGen;
