import Image from "next/image";
import SignInCSR from "./signin-csr";

export default function SignInSSR() {
  return (
    <>
      <div
        className="d-flex flex-column flex-justify-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="d-flex flex-justify-center">
          <div className="p-2">
            <Image src="/github.svg" alt="GitHub" width={75} height={75} />
          </div>
          <div className="p-2">
            <Image
              src="/salesforce.svg"
              alt="Salesforce"
              priority={true}
              width={115}
              height={80}
            />
          </div>
        </div>
        <div className="p-2">
          <div className="d-flex flex-justify-center">
            <p className="h1">GitHub Self Service Portal</p>
          </div>
        </div>
        <div className="p-2">
          <div className="d-flex flex-justify-center">
            <div className="flex-column">
              <SignInCSR />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
