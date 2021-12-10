import dynamic from "next/dynamic";
const SignUpComponent = dynamic(() => import("@components/signup"), {
  ssr: false,
});

export default function SignUp() {
  return (
    <div>
      <SignUpComponent />
    </div>
  );
}
