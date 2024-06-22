import { ComponentProps, useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function CalComModal({ className }: ComponentProps<"button">) {
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
      data-cal-link="jeremy-ellsworth-uwa6in/design-consultation"
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      Schedule a call
    </button>
  );
}

// import { getCalApi } from "@calcom/embed-react";

// import { useEffect } from "react";

// export default function MyApp() {

// useEffect(()=>{

//   (async function () {

//   const cal = await getCalApi({});

//   cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});

//   })();

// }, [])

// return <button data-cal-namespace=""

//   data-cal-link="jeremy-ellsworth-uwa6in/design-consultation"

//   data-cal-config='{"layout":"month_view"}'

//   >Click me</button>;

// };
