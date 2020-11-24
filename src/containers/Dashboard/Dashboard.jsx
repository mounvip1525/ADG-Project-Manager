import React from "react";
import { useState } from "react";
import styles from "./Dashboard.module.css";

const Dashboard = (props) => {
  // USER AS PROPS
  // const [boards, setBoards] = useState;

  // Verify User
  // FETCH ALL BOARDS

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
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.boardMenu}>
          <h1>board menu</h1>
          <div className={styles.boardCollection}>
            <div className={styles.recentBoards}>
              <h3>Recent Boards</h3>
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
                <div className={styles.boardAvatar}>All 1</div>
                <div className={styles.boardAvatar}>All 2</div>
                <div className={styles.boardAvatar}>All 3</div>
                <div className={styles.boardAvatar}>All 4</div>
                <div className={styles.boardAvatar}>All 5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
