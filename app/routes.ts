import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("contact", "routes/contact.tsx"),
  route("about", "routes/about.tsx"),
  route("services", "routes/services.tsx"),
  route("our-initiatives", "routes/our-initiatives.tsx"),
] satisfies RouteConfig;
