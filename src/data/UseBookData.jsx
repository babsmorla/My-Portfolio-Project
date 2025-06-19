import React, { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "https://jubi-back-end.onrender.com/books";

const UseBookData = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBook = async () => {
    try {
      const res = await axios.get(`${baseUrl}`);
      const data = res.data.books;
      setBooks(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return { books, loading };
};

export default UseBookData;
