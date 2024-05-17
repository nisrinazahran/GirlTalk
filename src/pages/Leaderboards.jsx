import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetLeaderboards } from '../states/leaderboard/action';
import LeaderboardList from '../components/LeaderboardList';

function Leaderboards() {
  const leaderboards = useSelector((state) => state.leaderboards);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetLeaderboards());
  }, [dispatch]);

  if (!leaderboards) {
    return null;
  }

  return (
    <>
      <h2 className="title-leaderboards">Klasesmen Pengguna Aktif</h2>
      <div className="leaderboards">
        <LeaderboardList leaderboards={leaderboards} />
      </div>
    </>
  );
}

export default Leaderboards;
