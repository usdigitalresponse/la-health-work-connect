// pages/index.js

import PageWrapper from "../components/page-wrapper";
import HeaderHero from "../components/header-hero";
import Button from "../components/button";
import { useState } from "react";

// Content ---------------------------------------------------------------------
const HERO =
  "Louisiana Health Work Connect is an initiative organized by the State of Louisiana Department of Health in response to COVID-19 to help facilities with acute healthcare staffing shortages fill those vacancies with qualified candidates who are otherwise out of work.";

const HOW_IT_WORKS = [
  "Interested healthcare workers submit their information and qualifications.",
  "Participating healthcare facilities regularly update the Louisiana Department of Health (LDH) on their staffing needs.",
  "LDH provides a list of candidates to facilities tailored to their staffing needs.",
  "A participating facility then contacts a healthcare worker to begin the hiring process.",
];

const CANDIDATE_FAQ = [
  {
    question: "What workers can participate?",
    answer:
      "Licensed or retired, furloughed, and out-of-work healthcare workers willing to work in Louisiana can submit their information to be considered for employment.",
  },
  {
    question: "I’m an interested healthcare worker. How do I participate?",
    answer: <span>Please fill in this form to submit your information.</span>,
  },
  {
    question: "I don’t live in Louisiana but want to help. Can I participate?",
    answer:
      "Yes. We hope to find jobs for our furloughed neighbors so we will be prioritizing filling open positions with qualified Louisiana residents. However, if we aren’t able to fill a critical hospital need with in-state providers, we will be expanding the reach beyond state lines.",
  },
  {
    question: "Do I need to have an active license?",
    answer:
      "No. Facilities are prioritizing workers who can begin immediately, but will also consider recently retired individuals who are in good standing with their respective licensing board.",
  },
  {
    question: "How much will I get paid? Do I have to travel?",
    answer:
      "The specific conditions of your employment, like pay and location, will be negotiated between you and the individual facilities. Before being hired, you will have an opportunity to discuss details like this with your potential future employer.",
  },
  {
    question:
      "I’m not looking for a job, but I want to help. What should I do?",
    answer: (
      <span>
        Please sign up to be a volunteer through the Louisiana Volunteers in
        Action registry. Medical and non-medical volunteers 18 years of age and
        older are welcome.
      </span>
    ),
  },
];

const FACILITY_FAQ = [
  {
    question: "What facilities can participate?",
    answer: (
      <span>
        The program is currently being piloted in Baton Rouge, LA. Any licensed
        nursing home or hospital (both Tier 1 and 2) in Louisiana Department of
        Health Region 2 (Baton Rouge area) can participate in Louisiana Health
        Work Connect. Coming soon: any hospital or nursing home in the state of
        Louisiana.
      </span>
    ),
  },
  {
    question:
      "I’m an interested Louisiana healthcare facility. How do I participate?",
    answer: (
      <span>
        In recognition of the pressure many facilities are facing, this program
        is being rolled out as quickly as possible. It will initially launch as
        a pilot in the DoH Region 2 (Baton Rouge area) for Tier 1 and Tier 2
        hospitals, and nursing homes. Based on the lessons learned during the
        pilot, it will transition to a statewide program as rapidly as possible.
        If you are a Human Resources representative with a hospital or nursing
        home in Region 2 and have not received information about this program,
        please first contact your internal LDH emergency preparedness liaison.
        For all other inquiries, please use the feedback form.
      </span>
    ),
  },
  {
    question: "How do I receive information about interested applicants?",
    answer:
      "If you are a validated participating member of Louisiana Health Work Connect, a tailored spreadsheet of applicants will be emailed to the Human Resources representative designated on the intake form.",
  },
];

const BUTTON_CONTENT = (
  <>
    Healthcare Workers -
    <br />
    Apply Now!
  </>
);

// Helper Components -----------------------------------------------------------
function HowNumber({ index, children }) {
  return (
    <div className="section">
      <div className="num">
        <h3>{index}</h3>
      </div>
      <p>{children}</p>
      <style jsx>
        {`
          h3 {
            font-size: 28px;
            display: block;
            width: 52px;
            height: 52px;
            background-color: #169ca3;
            border-radius: 26px;
            text-align: center;
            color: #fff;
            line-height: 52px;
            margin: 0 auto 18px auto;
          }

          p {
            max-width: 260px;
            font-size: 1rem;
          }

          @media (max-width: 800px) {
            .section {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              margin-top: 20px;
            }

            h3 {
              margin: none;
            }

            p {
              margin-left: 24px;
              max-width: unset;
            }
          }
        `}
      </style>
    </div>
  );
}

function Plus() {
  return (
    <span>
      <style jsx>
        {`
          span {
            margin-right: 12px;
          }

          span:before {
            content: "＋";
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 20px;
            height: 20px;
            color: #169ca3;
            border-radius: 50%;
            border: 2px solid #169ca3;
            font-size: 18px;
            color: #169ca3;
          }
        `}
      </style>
    </span>
  );
}

function Minus() {
  return (
    <span>
      <style jsx>
        {`
          span {
            margin-right: 12px;
          }

          span:before {
            content: "−";
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 20px;
            height: 20px;
            color: #169ca3;
            border-radius: 50%;
            border: 2px solid #169ca3;
            font-size: 18px;
            color: #169ca3;
          }
        `}
      </style>
    </span>
  );
}

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <div>
      <h5 onClick={toggle}>
        {isOpen ? <Minus /> : <Plus />}
        <span>{question}</span>
      </h5>
      <p className={isOpen ? "open" : "closed"}>{answer}</p>
      <style jsx>
        {`
          div {
            margin-top: 20px;
          }

          h5 {
            font-weight: 400;
            cursor: pointer;
            display: flex;
          }

          p {
            margin-left: 32px;
          }

          p.open {
            display: block;
          }

          p.closed {
            display: none;
          }
        `}
      </style>
    </div>
  );
}

function FaqList({ title, list }) {
  return (
    <>
      <h4>{title}</h4>
      {list.map((item, index) => (
        <FaqItem key={index} {...item} />
      ))}
      <style jsx>
        {`
          h4 {
            display: block;
            text-align: center;
            text-decoratin: none;
            border: none;
            font-size: 20px;
          }
        `}
      </style>
    </>
  );
}

// Main ------------------------------------------------------------------------
export default function Home() {
  return (
    <PageWrapper
      metaTitle="Louisiana Health Work Connect"
      contentTitle="Louisiana Health Work Connect"
    >
      <HeaderHero>
        <h1>
          Louisiana Health
          <br />
          Work Connect
        </h1>
        <p>{HERO}</p>
        <Button href="/candidate-intake?source=Louisiana%20Health%20Work%20Connect%20Website">
          {BUTTON_CONTENT}
        </Button>
        <style jsx>
          {`
            h1,
            p {
              color: #fff;
              text-decoration: none;
              border: none;
              margin: 0;
              padding: 0;
            }

            p {
              margin: 24px 0;
            }
          `}
        </style>
      </HeaderHero>
      <div>
        <main>
          <div className="lead">
            <div className="container">
              <div className="how">
                <h2>How does it work?</h2>

                <div className="list">
                  {HOW_IT_WORKS.map((content, index) => (
                    <HowNumber key={index} index={index}>
                      {content}
                    </HowNumber>
                  ))}
                </div>
              </div>

              <div className="product-shot">
                <img src="/images/laptop.png" alt="Product Form Image"></img>
                <div className="cta">
                  <p className="jumbo">
                    Apply to a healthcare facility in need in under 5 minutes
                  </p>
                  <Button
                    href="/candidate-intake?source=Louisiana%20Health%20Work%20Connect%20Website"
                    style={{ textAlign: "center" }}
                  >
                    {BUTTON_CONTENT}
                  </Button>
                </div>
              </div>
            </div>
            <style jsx>
              {`
                .lead {
                  background-color: #efefef;
                  padding: 36px 0 48px 0;
                }

                .product-shot {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-top: 36px;
                }

                .list {
                  display: flex;
                  justify-content: space-between;
                  margin-top: 36px;
                }

                .jumbo {
                  font-size: 1.6rem;
                  margin-bottom: 24px;
                }

                h2 {
                  display: block;
                  text-align: center;
                  border: none;
                }

                img {
                  margin-right: 48px;
                }

                img,
                .cta {
                  max-width: 350px;
                }

                @media (max-width: 800px) {
                  .list {
                    display: flex;
                    flex-direction: column;
                  }

                  img {
                    display: none;
                  }

                  a {
                    margin: 0;
                  }

                  .jumbo {
                    text-align: center;
                    max-width: unset;
                  }

                  .cta {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                  }
                }
              `}
            </style>
          </div>

          <div className="container">
            <div className="faq">
              <h2>Frequently Asked Questions</h2>

              <div className="grid">
                <div className="col">
                  <FaqList title="Healthcare Workers" list={CANDIDATE_FAQ} />
                </div>
                <div className="col">
                  <FaqList title="Healthcare Facilities" list={FACILITY_FAQ} />
                </div>
              </div>
            </div>

            <div className="contact">
              <p>
                If you have any additional questions or feedback, let us know at
                this <a href="/feedback">feedback form</a>.{" "}
              </p>

              <p>
                For press inquiries, email
                <a
                  href="mailto:kelly.zimmerman@la.gov?subject=Louisiana Health Work Connect"
                  target="_blank"
                >
                  {" "}
                  kelly.zimmerman@la.gov
                </a>
                .
              </p>
            </div>
            <style jsx>
              {`
                h2 {
                  display: block;
                  text-align: center;
                  border: none;
                }

                .grid {
                  display: grid;
                  grid-template-columns: 50% 50%;
                  grid-column-gap: 60px;
                }

                @media (max-width: 800px) {
                  .grid {
                    display: block;
                  }

                  .col:nth-child(2) {
                    margin-top: 24px;
                  }
                }

                .contact {
                  margin-top: 56px;
                }

                .contact p {
                  text-align: center;
                }
              `}
            </style>
          </div>
        </main>
      </div>
    </PageWrapper>
  );
}
