import { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleSearch = () => {
    // Gérer la recherche
    console.log("Recherche : ", searchQuery);
  };

  const handleAddTable = () => {
    // Gérer l'ajout de table
    console.log("Ajouter une table pour le : ", selectedDate);
  };

  return (
    <div className="flex justify-evenly items-center mt-10 max-md:flex-col max-md:mt-20 ">
      <div className="w-1/4 flex items-center bg-[#F4F4F4] border rounded-md py-2 px-4 max-md:w-full">
  
        <input
          type="text"
          placeholder="Rechercher une table"
          className="w-full bg-[#F4F4F4] focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FaSearch className="mr-2" />
      </div>
      <div className="flex max-md:flex-col max-md:w-full">
        <div className=" ml-4 max-md:ml-0 max-md:mt-2">
            <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            className="w-full bg-transparent focus:outline-none border rounded-md py-2 px-4"
            placeholderText={Date().toString().slice(0, 21)}
            />
        </div>
        <div className=" ml-4 max-md:w-full max-md:ml-0">
            <button
            className="flex max-md:mx-auto max-md:mt-2 items-center bg-black hover:bg-[#151515] text-white font-semibold py-2 px-4 rounded-md "
            onClick={handleAddTable}
            >
            <FaPlus className="mr-2" />
            Ajouter une table
            </button>
        </div>
      </div>
     
    </div>
  );
};

export default Searchbar;
