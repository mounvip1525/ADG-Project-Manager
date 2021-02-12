import React, { useEffect } from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import axios from "axios";
import Logout from "../Logout/Logout";
import styles from "./Dashboard.module.css";

const Dashboard = (props) => {
  // USER AS PROPS
  // Verify User

  // FETCH ALL BOARDS
  let [boards, setBoards] = useState([]);
  useEffect(() => {
    let config = {
      method: "GET",
      url: "https://adg-project-manager.herokuapp.com/api/board/allBoards",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };
    axios(config)
      .then((res) => {
        console.log("data", res.data.allBoards);
        setBoards(res.data.allBoards);
        console.log("first", boards);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("second", boards);
  }, [boards]);

  // uncomment lines 146 if this works out

  // function getAllBoards() {

  // }

  const [add, show] = useState(false);

  const [response, setResponse] = useState("");

  function showAddBoardForm() {
    show((add) => !add);
  }

  function addBoard(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const desc = document.getElementById("desc").value;

    const data = JSON.stringify({
      boardName: name,
      boardDesc: desc,
    });

    var config = {
      method: "post",
      url: "https://adg-project-manager.herokuapp.com/api/board/create",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      data: data,
    };

    axios(config)
      .then((res) => {
        console.log("response", res);
        setResponse(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const isLoggedIn = sessionStorage.getItem("token");
  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.userMenu}>
          <h1>user menu</h1>
          <div className={styles.userInfo}>
            <div className={styles.avatar}>
              <div className={styles.avatarImg}>To be \img\ </div>
              <div>
                <p>user name</p>
              </div>
            </div>
            <hr />
            <div className={styles.userRecents}>
              <h4>Recent activities</h4>
              <ul>
                <li>
                  1. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt qui quidem laboriosam unde totam aspernatur accusamus
                  itaque perferendis vitae, ipsum, sed nostrum mollitia
                  laudantium illum facere, ab quibusdam ad distinctio.
                </li>
                <li>
                  2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  tenetur, ab atque asperiores, excepturi nemo assumenda,
                  inventore commodi soluta facilis repellendus ullam ipsa
                  obcaecati repellat unde ipsam! Praesentium, reprehenderit
                  officiis?
                </li>
                <li>
                  3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit distinctio eligendi facere laudantium provident
                  temporibus enim ducimus. Ad vel enim eius eum, temporibus at,
                  veniam quibusdam molestiae, non nemo odit.
                </li>
              </ul>
            </div>
          </div>
          <Logout />
        </div>
        <div className={styles.boardMenu}>
          <h1>board menu</h1>
          <div className={styles.boardCollection}>
            <div className="addBoard" onClick={showAddBoardForm}>
              <h3 className={styles.boardAvatar}>add board</h3>
            </div>
            {add ? (
              <form>
                Board Name: <input id="name" name="board" type="text"></input>
                Board description:{" "}
                <input id="desc" name="desc" type="text"></input>
                <button onClick={addBoard}>add</button>
              </form>
            ) : null}
            <div className={styles.recentBoards}>
              Recent Boards
              <div className={styles.boardContainer}>
                <div className={styles.boardAvatar}>recent 1</div>
                <div className={styles.boardAvatar}>recent 2</div>
                <div className={styles.boardAvatar}>recent 3</div>
              </div>
            </div>
            <div className={styles.favouriteBoards}>
              <h3>Favourite boards</h3>
              <div className={styles.boardContainer}>
                <div className={styles.boardAvatar}>favourite 1</div>
                <div className={styles.boardAvatar}>favourite 2</div>
              </div>
            </div>
            <div className={styles.allBoards}>
              <h3>All Boards</h3>
              <div className={styles.boardContainer}>
                {/* <div className={styles.boardAvatar}>All 1</div>
                <div className={styles.boardAvatar}>All 2</div>
                <div className={styles.boardAvatar}>All 3</div>
                <div className={styles.boardAvatar}>All 4</div>
                <div className={styles.boardAvatar}>All 5</div> */}
                {boards.forEach((board) => {
                  return (
                    <div className={styles.boardAvatar}>{board.boardName}</div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
