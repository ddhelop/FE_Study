import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("./05-02-static-routing-move");
  };

  return <button onClick={onClickMove}></button>;
}
