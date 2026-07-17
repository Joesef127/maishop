import {SearchIcon} from "lucide-react";
import {useSearchStore} from "@/stores/search-store";

interface SearchBarProps {
    fullWidth?: boolean;
}


const SearchBar = ({fullWidth = false}: SearchBarProps) => {
    const query = useSearchStore((s) => s.query);
    const setQuery = useSearchStore((s) => s.setQuery);

    return (
        <div
            className={`bg-input rounded-full px-4 py-2 flex items-center ${fullWidth ? 'w-full' : 'w-full min-w-0 xl:min-w-md'}`}>
            <SearchIcon className="w-4 sm:w-6 h-4 sm:h-6 text-gray-500 mr-2"/>
            <input
                type="text"
                placeholder="Search for products..."
                className="bg-transparent border-none outline-none w-full text-sm"
                value={query} onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;