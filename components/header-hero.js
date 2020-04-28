// src/components/header-hero.js

export default function HeaderHero({ children }) {
  return (
    <div className="header-hero">
      <div className="content">{children}</div>
      <style jsx>{`
        .header-hero {
          background-image: url("/images/hero-bk.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          width: 100%;
          color: #fff;
          height: 512px;

          display: flex;
          align-items: center;
        }

        .content {
          max-width: 620px;
          margin: 0 230px;
        }

        @media (max-width: 800px) {
          .content {
            margin: 0 36px;
            max-width: unset;
          }
        }
      `}</style>
    </div>
  );
}
