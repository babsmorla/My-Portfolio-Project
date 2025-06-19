import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

const baseUrl = "https://jubi-back-end.onrender.com/books";

const UseSingleBookData = () => {
  const { id } = useParams();
  const [singleBook, setSingleBook] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSingleBook = async () => {
    try {
      const res = await axios.get(`${baseUrl}/${id}`);
      const singleBook = res.data.matchBook;

      setSingleBook(singleBook);
      console.log(singleBook);
      
      setLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleBook();
  }, []);

  return { singleBook, loading };
};

export default UseSingleBookData;
