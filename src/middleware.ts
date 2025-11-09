export const middleware = async () => {
  console.log("Hello from middleware");
};

export const config = {
  matcher: ["/about"],
};
