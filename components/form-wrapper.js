// components/form-wapper.js

import PageWrapper from "./page-wrapper";

export default function FormWrapper({ children, ...props }) {
  return <PageWrapper {...props}>{children}</PageWrapper>;
}
