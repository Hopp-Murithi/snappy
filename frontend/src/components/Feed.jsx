import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchQuery,feedQuery } from "../utils/data";
import { client } from "../client";
import { MasonryLayout, Spinner } from "./index";

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery)
      .then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if (loading) return <Spinner message="Hi there,just a moment..." />;

  <div>{pins && <MasonryLayout pins={pins}/>}</div>;
};

export default Feed;
