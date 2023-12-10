import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./verification.css";
import { verify } from "../../api/verify";
import { verifyAgain } from "../../api/verifyAgain";
function Verification() {
  const [verificationCode, setVerificationCode] = useState("");
  const [verifyTime, setVerifyTime] = useState(false);
  const [data, setData] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const receivedData = queryParams.get("data");
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setVerifyTime(!verifyTime);
    }, [60000]);
  }, [verifyTime]);

  async function handleVerify() {
    let a = await verify({
      verificationCode: verificationCode,
      email: receivedData,
    });
    setData(a);
    if (a && a.message) {
      navigate("/");
    }
  }
  async function handleVerifyTime() {
    let a = await verifyAgain({
      verificationCode: verificationCode,
      email: receivedData,
    });
  }

  return (
    <div>
      <div className="verification-form-container">
        <h2>Enter Verification Code</h2>
        <input
          type="text"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          placeholder="Enter code"
        />
        <button onClick={handleVerify}>Verify</button>
        <button  onClick={handleVerifyTime}>
          Send Again
        </button>
      {data && data.error && <p style={{ color: "red" }}>{data.error}</p>}
      </div>
    </div>

    // <div>
    //   <h1>Verification Code Page</h1>
    //   {/* verificationSent ? */}
    //    {/* ( */}
    //     <div>
    //       <p>A verification code has been sent to your email.</p>
    //       <input
    //         type="text"
    //         placeholder="Enter verification code"
    //         value={verificationCode}
    //         onChange={(e) => setVerificationCode(e.target.value)}
    //       />
    //       <button onClick={handleVerify}>Verify</button>
    //     </div>
    //   {/* ) */}
    //    {/* :  */}
    // {/* //   (
    // //     <div>
    // //       <p>Click the button below to send a verification code to your email.</p>
    // //       <button onClick={handleSendCode}>Send Verification Code</button>
    // //     </div>
    // //   ) */}

    // </div>
  );
}

export default Verification;
