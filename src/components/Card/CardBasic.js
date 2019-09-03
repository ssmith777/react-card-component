import React from "react";
import styled from "styled-components";

// Card component styles
const ActionButton = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-weight: 400;
`;

const Date = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
`;

const Description = styled.p`
  color: #fff;
  font-weight: 300;
`;

const CardBasic = props => (
  <div style={{ color: "#fff", background: "black" }}>
    <Title> Lorem ipsum dolor sit amet.</Title>

    <Date>3/2/2019</Date>
    <Description>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
      possimus corporis, tempora dolore minima tenetur dolorem atque perferendis
      iste rerum, consequuntur voluptates laboriosam tempore enim aliquam hic.
      Exercitationem et illo voluptas distinctio libero non, a odio quam quas
      eos ad obcaecati. Placeat tenetur aliquam architecto ex eum eaque et ab.
    </Description>
    <ActionButton>o Comments</ActionButton>
    <ActionButton>0 Likes</ActionButton>
    <ActionButton>0 Views</ActionButton>
  </div>
);
export default CardBasic;
