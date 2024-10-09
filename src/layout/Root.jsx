import { Outlet } from "react-router";

export default function Root() {
  return (
    <div className="max-w-4xl mx-auto">
      <Outlet />
    </div>
  );
}
