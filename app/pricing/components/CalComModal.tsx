import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function CalComModal() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <button
      data-cal-namespace=""
      data-cal-link="jay-philip-camillo-1p3val/secret"
      data-cal-config='{"layout":"month_view"}'
      className="font-bold border-b border-primary inline-block leading-none"
    >
      Schedule a call
    </button>
  );
}
