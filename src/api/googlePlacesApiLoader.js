import { useJsApiLoader } from '@react-google-maps/api';

const GooglePlacesApiLoader = (data) => {
  const result = useJsApiLoader(data);
  return result;
};
export default GooglePlacesApiLoader;
