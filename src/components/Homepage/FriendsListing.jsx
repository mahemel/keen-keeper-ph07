import UserImg from "@/assets/friend.png";
import Image from "next/image";

const FriendsListing = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold text-dark-black mb-4">
                Your Friends
            </h2>

            <div className="grid grid-cols-4 gap-6">
                <div className="card bg-base-100 text-center shadow-sm">
                    <div className="card-body items-center gap-3">
                        <Image
                            src={UserImg}
                            alt="User Image"
                            width={80}
                            height={80}
                            className="rounded-full"
                        />
                        <div className="flex flex-col items-center gap-2">
                            <h2 className="text-xl font-semibold text-dark-black">
                                David Kim
                            </h2>
                            <h3 className="text-[12px] text-light-gray">
                                62d ago
                            </h3>
                            <div className="flex gap-2 flex-wrap">
                                <div className="badge rounded-full bg-[#CBFADB] text-dark-green font-medium uppercase text-[12px] border-0 px-2">
                                    Work
                                </div>
                                <div className="badge rounded-full bg-[#CBFADB] text-dark-green font-medium uppercase text-[12px] border-0 px-2">
                                    Work
                                </div>
                            </div>
                            <div className="badge rounded-full bg-[#EFAD44] text-white font-medium text-[12px] border-0 px-2">
                                Almost Due
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsListing;
