import { useRef } from "react";
import "./styles.css";
import desktop from "./images/bg-intro-desktop.png";
import mobile from "./images/bg-intro-mobile.png";

function Home() {

  const emailRef = useRef();
  const passwordRef = useRef();

  function submit(e) {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  }

  return (
    <div className="container">
      <div className="text">
        <div className="title">Learn to code by watching others</div>
        <div className="description">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</div>
      </div>
      <div className="login">
        <div className="cards">
          <div className="try shadow"><span className="bold">Try it free 7 days</span> then $20/mo. thereafter</div>
          <form onSubmit={submit} className="form shadow">
            <input placeholder="First Name"></input>
            <input placeholder="Last Name"></input>
            <input ref={emailRef} placeholder="Email Address" type="email"></input>
            <input ref={passwordRef} placeholder="Password" type="password"></input>
            <button type="submit">CLAIM YOUR FREE TRIAL</button>
            <div className="tos">By clicking the button, you are agreeing to our <a className="red" href="/tos">Terms and Services</a></div>
          </form>
        </div>
      </div>

      <style>{`
        @media (min-width: 736px) {
          .container {
            background-image: url(${desktop});
          }
        }

        @media (max-width: 736px) {
          .container {
            background-image: url(${mobile});
          }
        }
      `}</style>
    </div>
  )
}

export default Home;