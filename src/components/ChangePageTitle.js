import { useEffect } from "react";
export default function ChangePageTitle({ pageTitle })  {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = pageTitle;
    return () => {
      document.title = prevTitle;
    };
  });
}