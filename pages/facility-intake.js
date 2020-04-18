// pages/facility-intake.js

import FormWrapper from "../components/form-wrapper";

export default function FacilityIntake() {
  return (
    <FormWrapper
      metaTitle="Louisiana Health Work Connect | Facility Intake"
      contentTitle="Louisiana Health Work Connect"
      contentSubtitle="Facility Intake"
    >
      <>
        <iframe
          className="airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/shr2K9CGevKIAjE8X?backgroundColor=blue"
          frameBorder="0"
          width="100%"
          height="2427"
        ></iframe>
        <style jsx>
          {`
            iframe {
              background: transparent;
              border: 1px solid #ccc;
            }
          `}
        </style>
      </>
    </FormWrapper>
  );
}
