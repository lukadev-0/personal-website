import { onCLS, onFCP, onFID, onLCP, onTTFB, type Metric } from "web-vitals";

const vitalsUrl = "https://vitals.vercel-analytics.com/v1/vitals";

function getConnectionSpeed() {
  return "connection" in navigator &&
    navigator["connection"] &&
    typeof navigator["connection"] === "object" &&
    "effectiveType" in navigator["connection"]
    ? navigator["connection"]["effectiveType"]
    : "";
}

function sendToAnalytics(metric: Metric, options: VitalsOptions) {
  const body = {
    dsn: options.analyticsId,
    id: metric.id,
    page: location.pathname,
    href: location.href,
    event_name: metric.name,
    value: metric.value.toString(),
    speed: getConnectionSpeed(),
  };

  if (options.debug) {
    console.log("[Analytics]", metric.name, JSON.stringify(body, null, 2));
  }

  const blob = new Blob(
    [new URLSearchParams(body as Record<string, string>).toString()],
    {
      // This content type is necessary for `sendBeacon`
      type: "application/x-www-form-urlencoded",
    }
  );
  if (navigator.sendBeacon) {
    navigator.sendBeacon(vitalsUrl, blob);
  } else
    fetch(vitalsUrl, {
      body: blob,
      method: "POST",
      credentials: "omit",
      keepalive: true,
    });
}

interface VitalsOptions {
  analyticsId: string;
  debug?: boolean;
}

export function webVitals(options: VitalsOptions) {
  try {
    onFID((metric) => sendToAnalytics(metric, options));
    onTTFB((metric) => sendToAnalytics(metric, options));
    onLCP((metric) => sendToAnalytics(metric, options));
    onCLS((metric) => sendToAnalytics(metric, options));
    onFCP((metric) => sendToAnalytics(metric, options));
  } catch (err) {
    console.error("[Analytics]", err);
  }
}
