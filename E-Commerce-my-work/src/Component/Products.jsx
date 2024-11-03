import React, { useEffect, useState } from "react";
import ProductCards from "./ProductCards";
import LoadingCard from "./Loadings/LoadingCard";
import CategoryChip from "./CategoryChip";
import LoadingChips from "./Loadings/LoadingChips";
import { Pagination } from "antd";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(20);
  const [skip, setSkip] = useState(20);
  const [total, setTotal] = useState(0);

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchProducts = async () => {
      setError(null);
      try {
        const url =
          selectedCategory === "All"
            ? `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
            : `https://dummyjson.com/products/category/${selectedCategory}`;
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data.products);
        setProducts(data.products);
        setTotal(data.total);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory, limit, skip]);

  useEffect(() => {
    const fetchCategory = async () => {
      setError(null);
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories"
        );
        const data = await response.json();
        // console.log(data);
        setCategories(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, []);
  // console.log("res total =>", total);
  console.log(selectedCategory)
  console.log(products)
  return (
    <>
      {loading ? (
        <div className="container mx-auto  p-6">
          <div className="container  flex mb-6 flex-wrap gap-3  ">
            {Array.from({ length: 24 }).map((_, index) => (
              <LoadingChips key={index} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <LoadingCard key={index} />
            ))}
          </div>
        </div>
      ) : error ? (
        <div className="container flex h-screen justify-center text-center items-center w-full mx-auto p-6">
          <p className="text-red-500 font-semibold">Error: {error}</p>
        </div>
      ) : (
        <div>
          <div className="container mx-auto p-6  cursor-pointer mt-4 gap-3 font-semibold  flex flex-wrap">
            <CategoryChip
              isSelected={selectedCategory === "All"}
              category={{ slug: "All", name: "All" }}
            />
            {categories.map((category) => (
              // console.log(category)
              <CategoryChip
                onCLick={() => setSelectedCategory(category.slug)}
                isSelected={category.slug === selectedCategory}
                key={category.slug}
                category={category}
              />
            ))}
          </div>
          <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCards
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto p-6 flex justify-center">
        <Pagination
          onChange={(num) => {
            setSkip((num - 1) * limit);
            window.scrollTo(0, 0);
          }}
          onShowSizeChange={(_, pageSize) => {
            setLimit(pageSize);
            window.scrollTo(0, 0);
          }}
          defaultCurrent={1}
          total={total}
        />
      </div>
    </>
  );
}
