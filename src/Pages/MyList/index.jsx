import React from "react";
import MyListItem from "./MyListItem";
import MyAccountSideBar from "../../components/MyAccountSideBar";

const MyList = () => {
  return (
    <section className="w-full py-5 bg-[#f9f9f9] min-h-[80vh]">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <MyAccountSideBar />
        </div>

        <div className="col2 w-[70%]">
          <div className="shadow-md rounded-md  bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2 className="text-[rgba(0,0,0,0.87)] font-semibold">
                Your List
              </h2>
              <p className="mt-0">
                There are <span className="font-bold text-[#ff5252]">6 </span>
                products in your List
              </p>
            </div>

            <div className="mb-1 mt-1 scroll max-h-[670px] overflow-y-scroll overflow-x-hidden p-2 mr-1">
              <MyListItem />
              <MyListItem />
              <MyListItem />
              <MyListItem />
              <MyListItem />
              <MyListItem />
              <MyListItem />
              <MyListItem />
              <MyListItem />
              <div className="text-center p-6">
                <p className="text-gray-500 text-sm mb-3">
                  Add products to your list to track them easily.
                </p>

                <a
                  href="/products"
                  className="text-[#ff5252] text-sm font-medium hover:underline"
                >
                  Explore trending products →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyList;
