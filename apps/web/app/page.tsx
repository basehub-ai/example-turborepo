/* eslint-disable @typescript-eslint/explicit-function-return-type -- rsc */
import { basehub } from "basehub";

export default async function Page() {
  const q = await basehub({ next: { revalidate: 60 } }).query({
    __typename: true,
  });

  return (
    <main>
      <p>{JSON.stringify(q, null, 2)}</p>
    </main>
  );
}
