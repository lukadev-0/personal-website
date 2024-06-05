import { useEffect, useState } from "react";

export function NotFoundTypewriter() {
  const [text] = useState(
    () => `HTTP/1.1 404 Not Found
Date: ${new Date().toUTCString()}
Server: GitHub.com
Content-Length: 14
Content-Type: text/plain; charset=utf-8

page not found`,
  );

  const [max, setMax] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const step = () => {
      setMax((max) => {
        const newMax = max + 1;

        if (newMax >= text.length) {
          return newMax;
        }

        if (text[newMax] === "\n") {
          timeout = setTimeout(step, 600);
        } else if (text[newMax].match(/[^a-zA-Z0-9]/)) {
          timeout = setTimeout(step, 200);
        } else {
          timeout = setTimeout(step, 100);
        }

        return newMax;
      });
    };

    setTimeout(step, 800);

    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <>
      {text.slice(0, max)}
      <span
        className={`inline-block h-3 w-2 bg-current ${max >= text.length ? "cursor-blink" : ""}`}
      ></span>
    </>
  );
}
