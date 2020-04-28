// src/components/header-hero.js

export default function HeaderHero({ children }) {
  return (
    <div className="header-hero">
      <div className="container">
        <div className="content">{children}</div>
      </div>
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
        }
      `}</style>
    </div>
  );
}
