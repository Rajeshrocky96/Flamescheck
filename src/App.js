import React, { useState } from "react";
import "./App.css";


export default function App() {
  const [set, setinput] = useState({ name1: "", name2: "" });
  const [fl, setfl] = useState("");

  function chan(event) {
    const { value, name } = event.target;
    setinput((values) => ({ ...values, [name]: value }));
  }

  function handle() {
    const a = set.name1;
    const b = set.name2;
    const p = a.replaceAll(" ", "").toLowerCase();
    const q = b.replaceAll(" ", "").toLowerCase();
    let p1 = p.split('');
    let q1 = q.split('');
    let count = 0;

    for (let i = 0; i < p1.length; i++) {
      for (let j = 0; j < q1.length; j++) {
        if (p1[i] === q1[j] && p1[i] !== " " && q1[j] !== " ") {
          p1[i] = ' ';
          q1[j] = ' ';
          break;
        }
      }
    }

    for (const v of p1) {
      if (v !== ' ') {
        count = count + 1;
      }
    }

    for (const v of q1) {
      if (v !== ' ') {
        count = count + 1;
      }
    }

    let flames = "FLAMES";
    var c=0;
while(flames.length!==1){

 
for(var i=0;i<count;i++){

  if(c>=flames.length){
    c=0;
  }c++;

}flames=flames.substring(0,c-1)+flames.substring(c);
flames=flames.trim();
}



    // while (flames.length > 1) {
    //   const index = (count % flames.length);
    //   flames = flames.substring(index) + flames.substring(0, index);
    // }

    switch (flames) {
      case 'F':
        setfl("The relationship is Friends");
        break;
      case 'L':
        setfl("The relationship is Love ");
        break;
      case 'A':
        setfl("The relationship is Marriage ");
        break;
      case 'E':
        setfl("The relationship is Enemy");
        break;
      case 'S':
        setfl("The relationship is Sister");
        break;
      default:
        setfl("you entered wrong one");
    }

    
  }
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      
      <h1 style={{margin: "0% 0%" ,position:"relative",left:"33%"}} className="gfg1">Flames Calculator</h1>
    
      <div className="o">
        <div className="heart"></div><input type="text" name="name1" placeholder="Enter your name" onChange={chan} />
      </div>

      <div className="o">
        <div className="heart"></div><input type="text" name="name2" placeholder="Enter your partner name" onChange={chan} />
      </div>

      <button style={{ position: "relative", left: "45%", border: "2px solid yellow", color: "red", padding: "20px", width: "110px", height: "50px", backgroundColor: "grey" }} onClick={handle}>
        <span style={{ fontSize: "20px" }}><abbr title="Check">Check</abbr></span>
      </button>
      <div>
      <button onClick={refreshPage} style={{backgroundColor: "rgb(181, 255, 218)" ,position: "relative",left:"70%",  padding: "2px 1px",width:"5%",height:"5%"}}><abbr title="Refresh"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAACOCAMAAADQI8A6AAAAZlBMVEX///8UFBQAAAAQEBD7+/sLCwv09PTt7e2np6fw8PCzs7Ph4eHMzMwGBgZCQkL4+PguLi7V1dVvb2/FxcWLi4u6urp0dHReXl49PT0eHh6Dg4OamppMTEw0NDRjY2NoaGgnJydVVVX5T1H7AAAEtklEQVR4nO1a26KiOgzVFEQpiAgCchH5/588oDOScpltk7p9OF2PM5u4yGUlLdlsLCwsLCwsLCwsLCwsLCwstOF4Mvar7Nze2nNZ+bH0nK9xiZL03ICK5pwm32Ak/Xr4eXerwh3+sb7I3yUTZFeA7QoEwD2Lf42L4xcAYo3MX0bF5XfIXBoI/8nliT6PfiGL4m6WL2twIf9wyHbpesoseijdfZCNPP6QM1MIOH6uyCot1/x10P4zZKJ0xTXiITbgrvwvpNEH2OxuC655EAmLvG1vefEgtcAJWvN8vHrGpheXJq8CL4r6gnacKPKCND8tBBS6g2E2h276K71jzok3+0OZtPPWAbnZAouKCZu+ZPZrIhftj1NCUJhURCeDCZnQ/5f/D76YJBGUBvmUKhuA6qfkjKZ6CakxNv7Ecv2O9sdqfAWYaqlyKxS75Xt1G5VKwNytGX12lBIXGiq7V/hAZyR99iobHZ9fVD6+ATYeNulCoPVwgh8WYEANcY3r56OP+UDJZhMo9vS7c6W8DXscw3kMGcFAjg10TDYxMuY28xb1M7wTahhc95yBbSvg+neERJkDZ6KRduQjgOLgF1Jk6U5VVXlF71Rx6DRj3Bk9EHXg8MhgE4Sv9+JoGFJSIfR0VAESDdaAgNzDiJZTv06/ImS8FS4uqMlWPEMx32yQ9gB5bE6M+HgAjnpCNYJDzpPT2EQSju3GPfJmA+/4iha0RBu7erTBE3fcbMKamDzy9JILZupgeXcborrHYqTDPQaMhxHhEtMwMZbJai4TFeyCTHCnXMmvdEyHcCWywyl7QLaIgUcnGiA8LvHwuEO2iOcbJh2vuI5ZYoAOOpoD4QAZ5TDqg8eng3OHIl1nEK97FMnPHUyHIl1Dy4P6WZMBv9ATZnE+lBiax6/7fA2Lx5GbdDn8LAUIh1cZJwxxJTYJrxhbKOV0/SfYAlIHnfTdI/Fs43Sv2RRygg6+GgOcDzkyRWODpwIhCK80Fjec7mPcybPKnpnL4+PoAwH90gm3YcoMt/hBhaQZD0RjaYkrIVrXhQ9x7pXKRrn5ovh4/hmDN+Yi8Qpr/baVLdFhzJUevnvQT+ZqTkecODcq6CaNcC28n9PhHUlQ2yJkz2WBzo3zKekwHtd67dB9OlnKHWqPeAD7W9vRqAcjK4JzSFKulTUNoXMjgsv5GICrw9VUVBxqBMH41uYd0cKFZuDRSDAJWE5OIKU84KY1aOSLXWuwU5A7l2ITOp1CbdfobEOyOqv1ATcNP5erdPoEol6KqOIKGrPugiw/uQjXBXICqa0wFG8X6lSW/2xrwPbeFHWeEQt+d5989G3ffK/H/Cbc8LU4d++ydO8ngWTdiMjJIAXb6i178kGhd8SwVBjInalP+8FkaWDYeXjjsajyk1h65jeckulWRZ8FKecinonLbDNHAHRlYCwAmkjm63liyNG63H9ie+lHBPclFRkoNeR7fQ6804qqAf+DNAVOurLCCPVX4rW5XJcdRD9a8nAoF3cHjS3naCPolnbfvkanj1g9Ww/8VrCeCNqrktSGNoXokNV1XC3/UqFPGWWn59hQ
      fLF5YXjSL2+Z/8mdZAsLCwsLCwsLCwsLCwuL/w/+AzSUMSUq4sljAAAAAElFTkSuQmCC" alt="no img"  width="40%" height="30%"/></abbr></button>
    </div>
      <div className="box1" style={{ position:"absolute" ,margin: "20px", width: "40%",  left:"30%",height: "60px"  ,backgroundColor:"rgb(255, 199, 199)"}}><h1 style={{position:"relative", top:"-20%",textAlign: "center", color: "rgb(87, 187, 182)" }}>{fl}</h1></div>
    </div>
  );
}
