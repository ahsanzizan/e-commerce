import { TouchableOpacity, Text } from "react-native";
import { fontFamilies } from "../styles/base";

interface CategoryTagProps {
  category: string;
}

export default function CategoryTag({ category }: CategoryTagProps) {
  return (
    <TouchableOpacity className="px-3 py-2 border border-[#FE3A30] rounded-full m-2">
      <Text
        className="font-medium text-[#FE3A30]"
        style={{ fontFamily: fontFamilies.medium }}
      >
        {category.replace(category[0], category[0].toUpperCase())}
      </Text>
    </TouchableOpacity>
  );
}