"use client";

function error({ error }) {
  return <div>{error.message}</div>;
}

export default error;
