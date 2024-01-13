import SearchIcon from "@mui/icons-material/Search";

const SearchProducts = () => {
  return (
    <form className="hidden md:flex justify-between rounded-full overflow-hidden items-center lg:w-[550px] border-2 hover:border-slate-400 md:w-[390px] bg-neutral">
      <input
        type="text"
        placeholder="Search in eBuy"
        className="border-none lg:w-[500px] px-3 py-2 outline-none"
      />
      <button className="lg:w-[50px] group border-none ">
        <SearchIcon className="text-xl mx-auto text-slate-400 group-hover:text-primary " />
      </button>
    </form>
  );
};

export default SearchProducts;
