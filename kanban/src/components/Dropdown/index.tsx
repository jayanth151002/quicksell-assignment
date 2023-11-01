import { groupByEnum } from "../../constants/groupBy";
import Button from "../Button";
import { Dispatch, SetStateAction } from "react";

const Dropdown = ({
  setGroupBy,
}: {
  setGroupBy: Dispatch<SetStateAction<groupByEnum>>;
}) => {
  return (
    <div>
      <Button
        text="Priority"
        handleClick={() => {
          setGroupBy(groupByEnum.priority);
        }}
      />
      <Button
        text="Status"
        handleClick={() => {
          setGroupBy(groupByEnum.status);
        }}
      />
      <Button
        text="User"
        handleClick={() => {
          setGroupBy(groupByEnum.user);
        }}
      />
    </div>
  );
};

export default Dropdown;
