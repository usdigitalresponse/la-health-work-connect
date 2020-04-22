// components/page-wrapper.js

import Head from "next/head";
import Page from "./page";

export default function PageWrapper({
  metaTitle = "Louisiana Health Work Connect",
  metaDescription = "The Louisiana Department of Health protects and promotes health and ensures access to medical, preventive and rehabilitative services for all citizens of the State of Louisiana.",
  searchKeywords = "health, louisiana, LDH",
  googleTagManagerId = "GTM-PHQ8XH2",
  contentTitle,
  children,
}) {
  return (
    <Page>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name={searchKeywords} content="health, louisiana, LDH" />
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,700,600|Playfair+Display:400"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link href="/css/styles.css" rel="stylesheet" type="text/css" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
              });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
              j.async = true;
              j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', '${googleTagManagerId}');
            `,
          }}
        ></script>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      </Head>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
          height="0"
          width="0"
        ></iframe>
        <style jsx>
          {`
            iframe {
              display: none;
              visibility: hidden;
            }
          `}
        </style>
      </noscript>
      <header id="header" className="subhome accent-purple">
        <div className="container">
          <div className="logo-bar">
            <div className="row">
              <div className="col-sm-8 col-xs-6 mob-wdth">
                <div className="logo-wrap">
                  <div className="seal">
                    <a href="http://gov.la.gov">
                      <img
                        src="/images/state-seal.png"
                        alt="Louisiana State Seal"
                      />
                    </a>
                  </div>
                  <div className="logo">
                    <a href="/">
                      <img
                        src="/images/dhh-logo.png"
                        alt="Department of Health and Hospitals logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6 mob-wdth">
                <div className="rt-content">
                  <div className="wrapper">
                    <div className="sec-bar pull-right">
                      <div className="sec-title">Secretary</div>
                      <div className="sec-name">
                        <span>Dr. Courtney N. Phillips</span>
                      </div>
                    </div>
                  </div>
                  <div className="wrapper">
                    <a className="pull-right" href="http://ldh.la.gov">
                      <div className="btn dhh">
                        <i
                          className="fa fa-chevron-left"
                          aria-hidden="true"
                        ></i>{" "}
                        Back to LDH
                      </div>
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-header">
          <div className="container">
            <div className="wrapper">
              <div>
                <div>
                  <div className="title">
                    <h1>{contentTitle}</h1>
                    <style jsx>
                      {`
                        h1 {
                          color: #fff;
                          text-align: center;
                          text-decoration: none;
                          border: none;
                          margin-bottom: 0;
                        }

                        @media (max-width: 600px) {
                          h1 {
                            font-size: 20px;
                          }
                        }
                      `}
                    </style>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="content">{children}</div>
      <footer id="footer">
        <style jsx>
          {`
            table {
              height: 39px;
              width: 192.5px;
              margin-left: auto;
              margin-right: auto;
            }

            tbody {
              height: 40px;
            }

            td {
              width: 10px;
              vertical-align: middle;
              height: 40px;
            }

            img.fb {
              display: block;
              margin-left: auto;
              margin-right: auto;
            }

            td.blog {
              width: 34px;
              vertical-align: middle;
              height: 40px;
            }

            td.blog > img {
              display: block;
              margin-left: auto;
              margin-right: auto;
            }

            td.twitter {
              width: 10px;
              vertical-align: middle;
              height: 40px;
            }

            td.twitter > img {
              display: block;
              margin-left: auto;
              margin-right: auto;
            }
          `}
        </style>
        <div className="footer-top">
          <div className="container">
            <div className="txt">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <a
                        title="LDH Facebook"
                        href="https://www.facebook.com/LaDeptHealth/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="fb"
                          src="/images/blue-facebook-social-icon.png"
                          alt="LDH Facebook"
                          width="34"
                        />
                      </a>
                    </td>
                    <td className="blob">
                      <a
                        title="LDH Blog"
                        href="http://ladepthealth.blogspot.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/images/blog-icon.png"
                          alt="LDH Blog"
                          width="34"
                        />
                      </a>
                    </td>
                    <td className="twitter">
                      <a
                        title="LDH Twitter"
                        href="https://twitter.com/LADeptHealth"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/images/Twitter-PNG-Photo.png"
                          alt="LDH Twitter"
                          width="34"
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <strong>Mailing Address:</strong> Louisiana Department of Health |
            P. O. Box 629 | Baton Rouge, LA 70821-0629
            <br />
            <address>
              <strong>Physical Address:</strong> 628 N. 4th Street | Baton
              Rouge, LA 70802 | PHONE: 225-342-9500 | FAX: 225-342-5568
              <br /> <strong>Medicaid Customer Service</strong>
              <em>1-888-342-6207</em> | <strong>Healthy Louisiana</strong>{" "}
              <em>1-855-229-6848</em>
            </address>
          </div>
        </div>
      </footer>
    </Page>
  );
}
