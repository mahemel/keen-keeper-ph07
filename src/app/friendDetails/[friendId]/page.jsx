import FriendCard from "@/components/Homepage/FriendCard";
import { notFound } from "next/navigation";

const fetchFriends = async () => {
    const res = await fetch("/friends.json");
    const friendJson = await res.json();
    return friendJson;
};

const FriendsDetail = async ({ params }) => {
    const { friendId } = await params;

    const friends = await fetchFriends();

    const friend = friends.find(
        (friendData) => friendData.id === parseInt(friendId),
    );
    if (!friend) {
        notFound();
    }

    return (
        <div>
            <FriendCard friend={friend}></FriendCard>
        </div>
    );
};

export default FriendsDetail;
