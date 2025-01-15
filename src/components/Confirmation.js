import { useLocation } from "react-router-dom";
export default function Confirmation() {
  const {state} = useLocation();
  return (
    <div className="container">
      <h1>Thank You!</h1>
      
      {state && (
        <>
          <p>{state.name}, you have succesfully registered for {state.course}.</p>
          <p>We have sent additional details to your email at: <strong>{state.email}</strong>.
          </p>
        </>
      )}
    </div>
  );
}
