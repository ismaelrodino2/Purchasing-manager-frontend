import React, { Component } from "react";
import * as Styled from "./styles";

export const LoadingDots = ({text}) => {
  return (
    <Styled.DotWrapper>
        <h1>{text}</h1>
      <Styled.Dot delay="0s" />
      <Styled.Dot delay=".1s" />
      <Styled.Dot delay=".2s" />
    </Styled.DotWrapper>
  );
};
