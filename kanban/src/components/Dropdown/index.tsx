import { useState } from "react";
import { groupByEnum } from "../../constants/groupBy";
import Button from "../Button";
import { Dispatch, SetStateAction } from "react";
import "./styles.css";
import { sortByEnum } from "../../constants/sortBy";

const Dropdown = ({
  groupBy,
  setGroupBy,
  sortBy,
  setSortBy,
}: {
  groupBy: groupByEnum;
  setGroupBy: Dispatch<SetStateAction<groupByEnum>>;
  sortBy: sortByEnum;
  setSortBy: Dispatch<SetStateAction<sortByEnum>>;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="dropdown-main">
      <Button
        text="Display"
        handleClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      />
      {isMenuOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-group-heading">Group By</div>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="groupby"
                value={groupByEnum.priority}
                checked={groupBy === groupByEnum.priority}
                onChange={() => {
                  localStorage.setItem("groupBy", groupByEnum.priority);
                  setGroupBy(groupByEnum.priority);
                  setIsMenuOpen(!isMenuOpen);
                }}
              />
              Priority
            </label>

            <label>
              <input
                type="radio"
                name="groupby"
                value={groupByEnum.user}
                checked={groupBy === groupByEnum.user}
                onChange={() => {
                  localStorage.setItem("groupBy", groupByEnum.user);
                  setGroupBy(groupByEnum.user);
                  setIsMenuOpen(!isMenuOpen);
                }}
              />
              User
            </label>

            <label>
              <input
                type="radio"
                name="groupby"
                value={groupByEnum.status}
                checked={groupBy === groupByEnum.status}
                onChange={() => {
                  localStorage.setItem("groupBy", groupByEnum.status);
                  setGroupBy(groupByEnum.status);
                  setIsMenuOpen(!isMenuOpen);
                }}
              />
              Status
            </label>
          </div>
          <div className="dropdown-group-heading">Sort By</div>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="sortby"
                value={sortByEnum.priority}
                checked={sortBy === sortByEnum.priority}
                onChange={() => {
                  localStorage.setItem("sortBy", sortByEnum.priority);
                  setSortBy(sortByEnum.priority);
                  setIsMenuOpen(!isMenuOpen);
                }}
              />
              Priority
            </label>

            <label>
              <input
                type="radio"
                name="sortby"
                value={sortByEnum.title}
                checked={sortBy === sortByEnum.title}
                onChange={() => {
                  localStorage.setItem("sortBy", sortByEnum.title);
                  setSortBy(sortByEnum.title);
                  setIsMenuOpen(!isMenuOpen);
                }}
              />
              Title
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
