import { PostCategory } from "@/models/post-category";
import Link from "next/link";

interface CategoryList {
  categories: PostCategory[];
}

const CategoryList = ({ categories }: CategoryList) => {
  return (
    <div className="min-h-72 bg-white px-5 py-5">
      <h3 className="mb-2 font-lato text-lg text-gray-500">Categories</h3>
      <hr className="mb-4 border-gray-300" />
      <div>
        <ul>
          {categories.map((c) => (
            <li className="group inline-block py-3 pr-2">
              <Link
                href={`/categories/${c.code}`}
                className="rounded-full border-2 border-gray-300 px-3 py-2 text-gray-500 group-hover:border-orange-300 group-hover:text-orange-500"
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryList;
