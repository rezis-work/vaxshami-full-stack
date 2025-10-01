import Quote from "@/components/shared/quote";
import {
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  paragraph5,
} from "@/constants/postsDats";
import React from "react";

const Article = () => {
  return (
    <article>
      <p>{paragraph2}</p>
      <p>{paragraph1}</p>
      <Quote>{paragraph2}</Quote>
      <p>{paragraph4}</p>
      <p>{paragraph3}</p>
      <p>{paragraph5}</p>
    </article>
  );
};

export default Article;
