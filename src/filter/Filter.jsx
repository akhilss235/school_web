import React, { useState } from "react";
import { GoFilter } from "react-icons/go";
import { IconContext } from "react-icons";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Form from 'react-bootstrap/Form';

function Filter({ filterOptions, onApply }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState(
        filterOptions.reduce((acc, option) => {
            acc[option.label] = "All";
            return acc;
        }, {})
    );

    const toggleDropdown = () => {
        setShowDropdown((prevState) => !prevState);
    };

    const handleFilterChange = (label, value) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            [label]: value,
        }));
    };

    const handleApply = () => {
        onApply(selectedFilters);  
        setShowDropdown(false);    
    };

    const handleReset = () => {
        const resetFilters = filterOptions.reduce((acc, option) => {
            acc[option.label] = "All";
            return acc;
        }, {});
        setSelectedFilters(resetFilters);
        onApply(resetFilters);     
    };

    return (
        <div className="filter-container" style={{ position: "relative" }}>
            <div
                className="card d-flex align-items-center justify-content-center filterbody p-2"
                style={{ height: "39.6px", cursor: "pointer" }}
                onClick={toggleDropdown}
            >
                <IconContext.Provider value={{ className: "react-icons", size: "1.5em" }}>
                    <div className="d-flex align-items-center">
                        <GoFilter className="Filteric" />
                        <span className="Filteric p-1">
                            Filter {showDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </span>
                    </div>
                </IconContext.Provider>
            </div>

            {showDropdown && (
                <div className="dropdown-menu" style={dropdownStyles}>
                    <h6>Filter</h6>
                    <div className="row">
                    {filterOptions.map(({ label, options }) => (
                        <div className="filter-option col-sm-6" key={label}>
                            <Form.Label>{label}</Form.Label>
                            <Form.Select
                                value={selectedFilters[label]}
                                onChange={(e) => handleFilterChange(label, e.target.value)}
                            >
                                {options.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </Form.Select>
                        </div>
                    ))} </div>
                    <hr></hr>
                    <div className="button-group">
                        <button className="btn btn-secondary mx-3" onClick={handleReset}>
                            Reset
                        </button>
                        <button className="btn btn-primary" onClick={handleApply}>
                            Apply
                        </button>
                    </div>
                </div>
            )}
           
        </div>
    );
}

const dropdownStyles = {
    position: "absolute",
    top: "100%", 
    left: 0,
    width: "320px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0,0,1,0.4)",
    padding: "15px",
    zIndex: 1000,
    borderRadius: "4px",
    display: "block",
};

export default Filter;
