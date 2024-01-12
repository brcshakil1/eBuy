import SearchIcon from "@mui/icons-material/Search";

const SearchProducts = () => {
  return (
    <form className="border-2 border-gray-500">
      <input type="text" placeholder="Search in eBuy" className="border" />
      <button>
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchProducts;
