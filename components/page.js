// components/page.js

export default function Page({ children }) {
  return (
    <div className="page">
      <style jsx>
        {`
          .page {
            min-height: 100vh;
          }
        `}
      </style>
      {children}
    </div>
  );
}
