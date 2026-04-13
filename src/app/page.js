import Banner from "@/components/Homepage/Banner";
import FriendsInfo from "@/components/Homepage/FriendsInfo";
import FriendsListing from "@/components/Homepage/FriendsListing";
import { Suspense } from "react";

export default function Home() {
  const fetchFriends = async () => {
    const res = await fetch('http://localhost:3000/friends.json');
    const friendJson = await res.json();
    return friendJson;
  };

  const friends = fetchFriends();


  return <>
    <Banner></Banner>

    <FriendsInfo></FriendsInfo>

    <Suspense fallback={<div className="flex justify-center"><span className="loading loading-spinner loading-xl"></span></div>}>
      <FriendsListing friends={friends}></FriendsListing>
    </Suspense>
  </>;
}
