const url = {
  base: "http://localhost:9519/api/",
  get: (address) => {
    return url.base + address;
  },
};

export { url };
