import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";


function BookEditForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({});
  console.log(formData);

  const fetchSingleBook = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://jubi-back-end.onrender.com/books/${id}`
      );
      const bookData = res.data.matchBook;
      setBook(bookData);

      setFormData(bookData);
      console.log(formData);

      console.log(bookData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleBook();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // let set what we need to update on our server

    const payload = {
      title: formData.title ?? book?.title,
      author: formData.author || book?.author,
      genre: formData.genre ?? book?.genre,
      description: formData.description ?? book?.description,
      year: formData.year ?? book?.year,
      imageUrl: formData.imageUrl ?? book?.imageUrl,
      isAvailable: formData.isAvailable ?? book?.isAvailable,
    };

    try {
      const response = axios.put(
        `https://jubi-back-end.onrender.com/books/${id}`,
        payload
      );
      console.log(response);
      alert("Book has been updated succesfully");

      //navigate back to booklist page
      navigate("/book-card");
    } catch (error) {
      console.log(error);
    }
  };

  // if (loading) return <p>Loading...</p>;

  return (
    <div className="bg-[#9e9c9cee] p-3 min-h-screen flex items-center justify-center">
      {/* {!loading? (
        <p>Loading...</p>
      ) : (
        <form
          className="bg-white p-6  //shadow-md m-20 w-200"
          onSubmit={handleSubmit}
        >
          <h3 className="text-xl font-semibold mb-4 text-[#fa7f0d] flex">
            Edit New Book
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, title: e.target.value }))
                }
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, author: e.target.value }))
                }
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Genre</label>
              <input
                type="text"
                name="genre"
                value={formData.genre}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, genre: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Year</label>
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, year: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows="5"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Cover Image URL</label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, imageUrl: e.target.value }))
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="isAvailable"
              className="mr-4"
              checked={formData.isAvailable}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  isAvailable: e.target.checked,
                }))
              }
            />

            <label className="text-gray-700">Available for borrowing</label>
          </div>

          <button
            type="submit"
            className="bg-amber-600 hover:bg-amber-300 text-white px-6 py-2 rounded-md"
            onChange={() => navigate(`/book-card`)}
          >
            Update Book
          </button>
        </form>
      )} */}

      {(!loading || book.id) && (
        <form
          className="bg-white p-6  //shadow-md m-20 w-200"
          onSubmit={handleSubmit}
        >
          <h3 className="text-xl font-semibold mb-4 text-[#fa7f0d] flex">
            Edit New Book
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, title: e.target.value }))
                }
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, author: e.target.value }))
                }
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Genre</label>
              <input
                type="text"
                name="genre"
                value={formData.genre}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, genre: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Year</label>
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, year: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows="5"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Cover Image URL</label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, imageUrl: e.target.value }))
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="isAvailable"
              className="mr-4"
              checked={formData.isAvailable}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  isAvailable: e.target.checked,
                }))
              }
            />

            <label className="text-gray-700">Available for borrowing</label>
          </div>

          <button
            type="submit"
            className="bg-amber-600 hover:bg-amber-300 text-white px-6 py-2 rounded-md"
            onChange={() => navigate(`/book-card`)}
          >
            Update Book
          </button>
        </form>
      )}
    </div>
  );
}

export default BookEditForm;
