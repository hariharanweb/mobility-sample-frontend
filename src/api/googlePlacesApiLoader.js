import { useJsApiLoader } from "@react-google-maps/api";

export const GooglePlacesApiLoader = (data) => {
  const result = useJsApiLoader(data);
  return result;
};
