// pages/feedback.js

import { FEEDBACK_FORM } from "../utils/constants";

export default function () {
  return (
    <div>
      <p>
        Redirecting you to <a href={FEEDBACK_FORM}>{FEEDBACK_FORM}</a>
      </p>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.location.href = "${FEEDBACK_FORM}";
        `,
        }}
      ></script>
    </div>
  );
}
