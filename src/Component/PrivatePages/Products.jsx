import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import ProductCard from "./ProductCard";
import CategoryChip from "./CategoryChip";
import NotFound from "./NotFound";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chosenCategory, setChosenCategory] = useState("All");
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    const url =
      chosenCategory === "All"
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/category/${chosenCategory}`;

    axios
      .get(url)
      .then((response) => {
        // console.log("Fetched Products:", response.data);
        setProducts(response.data.products);
        setLoading(false);
        setNotFound(false);
      })
      .catch((error) => {
        alert("Error fetching products:", error);
        setLoading(false);
      });
  }, [chosenCategory]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => {
        // console.log("Fetched Categories:", res.data);
        setCategories(res.data);
        setLoading(false);
        setNotFound(false);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <Loader />
        </div>
      ) : notFound ? (
        <NotFound />
      ) : (
        <div className="p-4">
          {/* Category Chip Selection */}
          <div className="flex gap-4 flex-wrap justify-center mb-6">
            <CategoryChip
              onClick={() => setChosenCategory("All")}
              isChosen={chosenCategory === "All"}
              category={{ slug: "All", name: "All" }}
            />
            {categories.map((category) => (
              <CategoryChip
                onClick={() => setChosenCategory(category.slug)}
                isChosen={category.slug === chosenCategory}
                category={category}
                key={category.slug}
              />
            ))}
          </div>

          <div className="flex flex-wrap m-4">
            {products.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
