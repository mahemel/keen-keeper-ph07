import Image from "next/image";
import Link from "next/link";

const FriendCard = ({ friend }) => {
    const { name, picture, days_since_contact, status, tags } = friend;
    let statusStyle = "#244D3F";

    if (status === "Overdue") {
        statusStyle = "#EF4444";
    } else if (status === "Almost Due") {
        statusStyle = "#EFAD44";
    }

    return (
        <Link
            href={`/friendDetails/${friend.id}`}
            className="card bg-base-100 text-center shadow-sm"
        >
            <div className="card-body items-center gap-3">
                <Image
                    src={picture}
                    alt="User Image"
                    width={80}
                    height={80}
                    className="rounded-full"
                />
                <div className="flex flex-col items-center gap-2">
                    <h2 className="text-xl font-semibold text-dark-black">
                        {name}
                    </h2>
                    <h3 className="text-[12px] text-light-gray">
                        {days_since_contact}d ago
                    </h3>
                    <div className="flex gap-2 flex-wrap">
                        {tags.map((tag, index) => (
                            <div
                                key={index}
                                className="badge rounded-full bg-[#CBFADB] text-dark-green font-medium uppercase text-[12px] border-0 px-2"
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                    <div
                        className={`badge rounded-full bg-[${statusStyle}]  text-white font-medium text-[12px] border-0 px-2`}
                    >
                        {status}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default FriendCard;
