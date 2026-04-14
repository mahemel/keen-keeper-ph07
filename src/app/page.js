import Banner from "@/components/Homepage/Banner";
import FriendsInfo from "@/components/Homepage/FriendsInfo";
import FriendsListing from "@/components/Homepage/FriendsListing";
import friends from "@/../public/friends.json";

export default function Home() {
  // const fetchFriends = async () => {
  //   const res = await fetch('/friends.json');
  //   const friendJson = await res.json();
  //   return friendJson;
  // };

  // const friends = fetchFriends();


  return <>
    <Banner></Banner>

    <FriendsInfo friends={friends}></FriendsInfo>

    <FriendsListing friends={friends}></FriendsListing>
  </>;
}
