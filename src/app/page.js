"use client";
import Banner from "@/components/Homepage/Banner";
import FriendsInfo from "@/components/Homepage/FriendsInfo";
import FriendsListing from "@/components/Homepage/FriendsListing";

import { useEffect, useState } from "react";

export default function Home() {
  // const fetchFriends = async () => {
  //   const res = await fetch('/friends.json');
  //   const friendJson = await res.json();
  //   return friendJson;
  // };

  // const friends = fetchFriends();

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      const res = await fetch('/friends.json');
      const data = await res.json();
      console.log(data)
      setFriends(data);
    };
    fetchFriends();
  }, [])



  return <>
    <Banner></Banner>

    <FriendsInfo friends={friends}></FriendsInfo>

    <FriendsListing friends={friends}></FriendsListing>
  </>;
}
