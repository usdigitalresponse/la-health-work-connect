// src/components/button.js
import { logClick } from "../utils/analytics"

export default function Button({ children, href, style = {} }) {
  return (
    <>
    <a href={href} style={style} onClick={()=>{logClick()}}>
        {children}
      </a>
      <style jsx>
        {`
          a {
            display: block;
            width: 270px;
            background-color: #169ca3;
            color: #fff;
            border-radius: 8px;
            font-weight: bold;
            font-size: 18px;
            text-align: center;
            padding: 8px 18px;
            opacity: 1;
            transition: opacity 0.24s ease-out;
          }

          a:hover {
            opacity: 0.85;
            color: #fff;
          }
        `}
      </style>
    </>
  );
}
