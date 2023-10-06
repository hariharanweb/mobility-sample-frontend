const getCurrentLocation = () => new Promise((resolve) => {
  navigator?.geolocation?.getCurrentPosition(
    ({ coords: { latitude: lat, longitude: lng } }) => {
      const pos = { lat, lng };
      resolve(pos);
    },
  );
});

export default {
  getCurrentLocation,
};
