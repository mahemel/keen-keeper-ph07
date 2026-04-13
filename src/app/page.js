import Banner from "@/components/Homepage/Banner";
import FriendsInfo from "@/components/Homepage/FriendsInfo";
import FriendsListing from "@/components/Homepage/FriendsListing";

export default function Home() {
  return <>
    <Banner></Banner>
    <FriendsInfo></FriendsInfo>
    <FriendsListing></FriendsListing>
  </>;
}
