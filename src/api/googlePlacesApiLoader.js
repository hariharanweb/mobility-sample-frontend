import { useJsApiLoader } from "@react-google-maps/api";
import React from "react";

export const GooglePlacesApiLoader = (data) => {
  const result = useJsApiLoader(data);
  return result;
};
