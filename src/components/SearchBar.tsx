import { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type SearchbarProps = {
  setFilter: (filter: string) => void;
};

const Searchbar = ({ setFilter }: SearchbarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleSearch = () => {
    setFilter(searchQuery);
  };

  const handleAddTable = () => {
    console.log("Ajouter une table pour le : ", selectedDate);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setFilter(e.target.value);
  };

  return (
    <div className="flex justify-evenly items-center mt-10 max-md:flex-col max-md:mt-20 ">
      <div className="w-1/4 flex items-center bg-[#F4F4F4] border shadow rounded-md py-2 px-4 max-md:w-full">
        <input
          type="text"
          placeholder="Search a dish"
          className="w-full bg-[#F4F4F4] focus:outline-none"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <FaSearch className="mr-2" />
      </div>
      <div className="flex max-md:flex-col max-md:w-full">
        <div className=" ml-4 max-md:ml-0 max-md:mt-2">
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            className="w-full  focus:outline-none border bg-[#F4F4F4] shadow rounded-md py-2 px-4"
            placeholderText={Date().toString().slice(0, 21)}
          />
        </div>
        <div className=" ml-4 max-md:w-full max-md:ml-0">
          <button className="shadow flex max-md:mx-auto max-md:mt-2 items-center  hover:scale-105 transition ease-linear delay-50 bg-buy text-white font-semibold py-2 px-4 rounded-md ">
            <FaPlus className="mr-2" onClick={handleAddTable} />
            Add a table
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
