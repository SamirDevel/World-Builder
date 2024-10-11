import { trpc } from "@client/app/trpc";

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: 'Samir' });
  return <div className="bg-black" >{greeting}</div>;
}