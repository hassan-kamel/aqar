import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  // Type assertion to ensure TypeScript recognizes 'statusText' and 'message'
  const typedError = error as { statusText?: string; message?: string };

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{typedError.statusText || typedError.message}</i>
      </p>
    </div>
  );
}
