import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div 
    className="flex flex-col gap-y-10
    min-h-[100vh] items-center justify-center
  text-black text-center sm:text-2xl text-lg">
      <h1 className="sm:text-3xl text-xl">Упс!</h1>
      <p>К сожалению, произошла непредвиденная ошибка.</p>
      <p> {"Ошибка: "}
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}