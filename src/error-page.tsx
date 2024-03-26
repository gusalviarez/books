import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError(); // Type the return value of useRouteError

  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>you got an error</i>
      </p>
    </div>
  );
}
