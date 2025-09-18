import client from "../lib/honoClient";

export default async function Home() {
  const res = await client.api.test.$get();

  const data = await res.json();

  return <></>;
}
