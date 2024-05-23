import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import logo1 from "./icons8-level-up-your-coding-skills-and-quickly-land-a-job-24.png";
import logo3 from "./icons8-codeforces.-programming-competitions-and-contests,-programming-community.-24.png";
import logo2 from "./icons8-codechef-22.png";
import "./Details.css";
import "./App.css";
import vdo from "./2611250-uhd_3840_2160_30fps.mp4";

function App() {
  const [leet, setLeet] = useState({});
  const [solvedCount, setSolvedCount] = useState(0);
  const [leetcon, setLeetcon] = useState({});
  const [chef, setChef] = useState({});
  const [useri, setUseri] = useState({});
  const [rati, setRati] = useState([]);
  const[er,seter]=useState(false);

  function find() {

    let lc = document.getElementById("lc").value;
    let chefy = document.getElementById("chef").value;
    let force = document.getElementById("force").value;

    if (lc === "" && chefy === "" && force === "") {
      document.getElementsByClassName("error")[0].textContent = 'Please make your accounts on Coding Platform';
      return;
    }

    // document.getElementsByClassName('mbox')[0].style.display='initial';
    const apiUrl = `https://codechef-api.vercel.app/${chefy}`;
    const user = `https://codeforces.com/api/user.info?handles=${force}`;
    const rate = `https://codeforces.com/api/user.rating?handle=${force}`;
    const handle = force;

    if (lc) {
      const sub = localStorage.getItem(lc);
      const con = localStorage.getItem(lc + 'con');

      console.log(JSON.parse(con));

      fetch(`https://alfa-leetcode-api.onrender.com/${lc}/contest`).then(res => {
        if (!res.ok) {
          if (con)
            setLeetcon(JSON.parse(con));
          else {
            seter(true);
            document.getElementById('card1').style.display = 'initial';

          }
        } return res.json()
      }).then(data => {

        setLeetcon(data)
        localStorage.setItem(lc + 'con', JSON.stringify(data));

      }).catch(error => console.log("failed to fetch"))


      fetch(`https://alfa-leetcode-api.onrender.com/${lc}/solved`)
        .then(res => {
          if (!res.ok) {
            if (sub) {
              setLeet(JSON.parse(sub));
              document.getElementById('card1').style.display = 'initial';

            }
            else {
              seter(true);
            }
          }
          return res.json();
        })
        .then(data => {
          setLeet(data);
          localStorage.setItem(lc, JSON.stringify(data));
          document.getElementById('card1').style.display = 'initial';

        })
        .catch(error => console.log("Failed to fetch data"));
      console.log(leet.solvedProblem);

    }


    if (chefy) {
      const csub = localStorage.getItem(chefy);
      fetch(apiUrl)
        .then(res => {
          if (!res.ok) {
            if (csub) {
              setChef(JSON.parse(csub));
              document.getElementById('card2').style.display = 'initial';
            }
            else {
              seter(true);
            }
          }
          return res.json();
        })
        .then(data => {
          setChef(data);
          localStorage.setItem(chefy, JSON.stringify(data));
          document.getElementById('card2').style.display = 'initial';


        })
        .catch(error => console.log("Failed to fetch data"));
    }

    if (force) {
      const cuser = localStorage.getItem(force + 'user');

      fetch(user)
        .then(res => {
          if (!res.ok) {
            if (cuser) {
              setUseri(JSON.parse(cuser));
              document.getElementById('card3').style.display = 'initial';

            }
            else console.log("Try again please by reloading the page or try again later");

          }
          return res.json();
        })
        .then(data => {
          setUseri(data);
          localStorage.setItem(force + 'user', JSON.stringify(data))
          document.getElementById('card3').style.display = 'initial';
        })
        .catch(error => console.log("Failed to fetch data"));


      const crate = localStorage.getItem(force + 'rate');

      fetch(rate)

        .then(res => {
          if (!res.ok) {
            if (crate) {
              setRati(JSON.parse(crate));
              document.getElementById('card3').style.display = 'initial';
            }
          }
          return res.json();
        })
        .then(data => {
          setRati(data)
          localStorage.setItem(force + 'rate', JSON.stringify(data))
          document.getElementById('card3').style.display = 'initial';

        })
        .catch(error => console.log("Failed to fetch data"));
      const csolved = localStorage.getItem(force + 'solved');

      fetch(`https://codeforces.com/api/user.status?handle=${handle}&from=1`)
        .then(res => {
          if (!res.ok) {
            if (csolved) {
              setSolvedCount(JSON.parse(csolved));
              document.getElementById('card3').style.display = 'initial';
            }
          }
          return res.json();
        })
        .then(data => {
          if (data.status === "OK") {
            const solvedProblems = data.result.filter(problem => problem.verdict === "OK");
            setSolvedCount(solvedProblems.length);
            document.getElementById('card3').style.display = 'initial';

          }
        })
        .catch(error => console.log("Failed to fetch data"));
    }
  }

  let contr = useri.contribution ?? 0;
  let rating = Array.isArray(rati.result) && rati.result.length > 0 ? rati.result : 0;
  return (
    <div>
      <Intro />
      <div className="vd">
        <video autoPlay loop muted playsInline>
          <source src={vdo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="d">
        <div className="dh">Enter your Profile Details</div>
        <div className="dh">
          <input
            type="text"
            name="lc"
            id="lc"
            placeholder="Enter your Leetcode Username"
          />
        </div>
        <div className="dh">
          <input
            type="text"
            name="chef"
            id="chef"
            placeholder="Enter your Codechef Username"
          />
        </div>
        <div className="dh">
          <input
            type="text"
            name="force"
            id="force"
            placeholder="Enter your Codeforces Username"
          />
          *If you don't have an account then leave it blank
        </div>
        <div className="btn">
          <button type="button" onClick={find}>
            Find Results
          </button>
        </div>
        <div className="error"></div>
      </div>
      <div className="mbox">
       {!er?(<Card
          dhoka={er}
          platform="Leetcode"
          photo={logo1}
          solved={leet.solvedProblem}
          easy={leet.easySolved}
          medium={leet.mediumSolved}
          hard={leet.hardSolved}
          rating={leetcon.contestRating}
          attended={leetcon.contestAttend}
          rank={leetcon.contestGlobalRanking}
        />):
        (<div>effff</div>)
        }
        <Card2
          platform="Codechef"
          photo={logo2}
          stars={chef.stars}
          current={chef.currentRating}
          highest={chef.highestRating}
          crank={chef.countryRank}
          grank={chef.globalRank}
        />
        <Card3
          platform="Codeforces"
          photo={logo3}
          contr={contr}
          crating={rating}
          solved={solvedCount}
        />
      </div>
    </div>
  );
}

export default App;
