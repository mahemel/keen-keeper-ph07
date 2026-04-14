import Banner from "@/components/Homepage/Banner";
import FriendsInfo from "@/components/Homepage/FriendsInfo";
import FriendsListing from "@/components/Homepage/FriendsListing";

import fs from "fs/promises";
import path from "path";

const getFriends = async () => {
  const filePath = path.join(process.cwd(), "public", "friends.json");
  const file = await fs.readFile(filePath, "utf-8");
  return JSON.parse(file);
}



const Home = async () => {
  const friends = await getFriends();

  return <>
    <Banner></Banner>

    <FriendsInfo friends={friends}></FriendsInfo>

    <FriendsListing friends={friends}></FriendsListing>
  </>;
};

export default Home;