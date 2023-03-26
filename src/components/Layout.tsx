type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen h-auto">
      <header>
        <h1 className="text-center m-3">This is a Poetry website</h1>
        <hr />
      </header>
      <main className="my-auto flex flex-col justify-center">{children}</main>
      <footer className="mt-auto">
        <hr />
        <p className="text-center">
          I hope you like this, it&apos;s not much but made with love.
        </p>
      </footer>
    </div>
  );
}
