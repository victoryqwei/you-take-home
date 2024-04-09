import { Select } from "@chakra-ui/react";
import { Site } from "../constants";

const SiteSelect: React.FC<{
  setType: (type: Site) => void;
}> = ({ setType }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value as Site);
  };

  return (
    <Select w="5xs" onChange={handleChange}>
      {Object.values(Site).map((site) => (
        <option key={site} value={site}>
          {site}
        </option>
      ))}
    </Select>
  );
};

export default SiteSelect;
