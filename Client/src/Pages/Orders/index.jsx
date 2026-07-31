import React from "react";
import MyAccountSideBar from "../../components/MyAccountSideBar";
import { Divider } from "@mui/material";
import Button from "@mui/material/Button";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Badge from "../../components/Badge";

const Orders = () => {
  const [isOpenShowProductDetails, setIsOpenShowProductDetails] = React.useState(null);

  const showDetails = (index) => {
    if (isOpenShowProductDetails === index) {
      setIsOpenShowProductDetails(null);
    } else {
      setIsOpenShowProductDetails(index);
    }
  };

  return (
    <section className="w-full py-5 bg-[#f9f9f9] min-h-[80vh]">
      <div className="container mx-auto px-3 sm:px-4 flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-[20%]">
          <MyAccountSideBar />
        </div>

        <div className="w-full lg:w-[80%]">
          <div className="shadow-md p-3 rounded-md bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2 className="text-[rgba(0,0,0,0.87)] font-semibold">
                Your Orders
              </h2>
              <p className="mt-0 text-sm sm:text-base">
                There are <span className="font-bold text-[#ff5252]">2 </span>
                Orders
              </p>
            </div>

            <Divider />

            <div className="relative overflow-x-auto mt-2 rounded-md">
              <table className="w-full min-w-[1100px] text-sm text-left rtl:text-right text-body">
                <thead className="text-sm text-heading bg-[#f1f1f1]">
                  <tr>
                    <th scope="col" className="px-6 py-3 font-semibold">&nbsp;</th>
                    <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">
                      Order ID
                    </th>
                    <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">
                      Payment ID
                    </th>
                    <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">
                      Phone Number
                    </th>
                    <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">
                      Pincode
                    </th>
                    <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">
                      Total Amount
                    </th>
                    <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">
                      User ID
                    </th>
                    <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">
                      Order Status
                    </th>
                    <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">
                      Date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="bg-neutral-primary">
                    <td className="px-6 py-4 text-[#666] font-medium">
                      <Button
                        className="w-8! h-8! min-w-8! rounded-full! bg-[#f1f1f1]!"
                        onClick={() => showDetails(0)}
                      >
                        {isOpenShowProductDetails === 0 ? (
                          <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                        ) : (
                          <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                        )}
                      </Button>
                    </td>
                    <td className="px-6 py-4 text-[#666] font-medium">
                      <span className="text-[#ff5252]">order101dec222025d</span>
                    </td>
                    <td className="px-6 py-4 text-[#666] font-medium">
                      <span className="text-[#ff5252]">102277744549</span>
                    </td>
                    <td className="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                      Ankit Prabhavak
                    </td>
                    <td className="px-6 py-4 text-[#666] font-medium">
                      8965236984
                    </td>
                    <td className="px-6 py-4 text-[#666] font-medium">
                      <span className="block w-[350px]"></span>
                      Flat 204, Shanti Residency, Boring Rd
                    </td>
                    <td className="px-6 py-4 text-[#666] font-medium">841440</td>
                    <td className="px-6 py-4 text-[#666] font-medium">$2999</td>
                    <td className="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                      username@example.com
                    </td>
                    <td className="px-6 py-4 text-[#666] font-medium">
                      <span className="text-[#ff5252]">66user7898789pqridhjh</span>
                    </td>
                    <td className="px-6 py-4 text-[#666] font-medium">
                      <Badge status={"pending"} />
                    </td>
                    <td className="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                      22-12-2025
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={12}>
                      <Divider />
                    </td>
                  </tr>

                  {isOpenShowProductDetails === 0 && (
                    <tr>
                      <td className="pl-4 sm:pl-20" colSpan={12}>
                        <div className="relative overflow-x-auto">
                          <table className="w-full min-w-[700px] text-sm text-left rtl:text-right text-body">
                            <thead className="text-sm text-heading">
                              <tr>
                                <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">
                                  Product ID
                                </th>
                                <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">
                                  Product Title
                                </th>
                                <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">
                                  Image
                                </th>
                                <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">
                                  Quantity
                                </th>
                                <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">
                                  Price
                                </th>
                                <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">
                                  Subtotal
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="bg-neutral-primary">
                                <td className="px-6 py-4 text-[#313030] font-medium whitespace-nowrap">
                                  46sfrhjp4525bn
                                </td>
                                <td className="px-6 py-4 text-[#666] font-medium">
                                  <span className="block w-[250px]">
                                    Dettol Original Bathing Soap Bar
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                                  <img
                                    src="https://m.media-amazon.com/images/I/61j4tjFr47L._SL1000_.jpg"
                                    alt="product img"
                                    className="w-20 h-20 object-cover rounded-md"
                                  />
                                </td>
                                <td className="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                                  2
                                </td>
                                <td className="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                                  $2999
                                </td>
                                <td className="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                                  $9954
                                </td>
                              </tr>

                              <tr className="bg-neutral-primary">
                                <td className="px-6 py-4 text-[#313030] font-medium whitespace-nowrap">
                                  46sfrhjp4525bn
                                </td>
                                <td className="px-6 py-4 text-[#666] font-medium">
                                  <span className="block w-[250px]">
                                    Dettol Original Bathing Soap Bar
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                                  <img
                                    src="https://m.media-amazon.com/images/I/61j4tjFr47L._SL1000_.jpg"
                                    alt="product img"
                                    className="w-20 h-20 object-cover rounded-md"
                                  />
                                </td>
                                <td className="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                                  2
                                </td>
                                <td className="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                                  $2999
                                </td>
                                <td className="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                                  $9954
                                </td>
                              </tr>

                              <tr>
                                <td colSpan={12} className="px-6 py-4">
                                  <div className="flex items-center gap-3">
                                    <span className="flex-1 h-px bg-[#e5e5e5]" />
                                    <span className="text-[12px] text-[#888] whitespace-nowrap">
                                      End of order
                                    </span>
                                    <span className="flex-1 h-px bg-[#e5e5e5]" />
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  )}

                  <tr className="bg-neutral-primary">
                    <td className="px-6 py-4 text-[#666] font-medium">
                      <Button
                        className="w-8! h-8! min-w-8! rounded-full! bg-[#f1f1f1]!"
                        onClick={() => showDetails(1)}
                      >
                        {isOpenShowProductDetails === 1 ? (
                          <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                        ) : (
                          <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                        )}
                      </Button>
                    </td>
                    <td className="px-6 py-4 text-[#666] font-medium">
                      <span className="text-[#ff5252]">order101dec222025d</span>
                    </td>
                    <td className="px-6 py-4 text-[#666] font-medium">
                      <span className="text-[#ff5252]">102277744549</span>
                    </td>
                    <td className="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                      Ankit Prabhavak
                    </td>
                    <td className="px-6 py-4 text-[#666] font-medium">
                      8965236984
                    </td>
                    <td className="px-6 py-4 text-[#666] font-medium">
                      <span className="block w-[350px]"></span>
                      Flat 204, Shanti Residency, Boring Rd
                    </td>
                    <td className="px-6 py-4 text-[#666] font-medium">841440</td>
                    <td className="px-6 py-4 text-[#666] font-medium">$2999</td>
                    <td className="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                      username@example.com
                    </td>
                    <td className="px-6 py-4 text-[#666] font-medium">
                      <span className="text-[#ff5252]">66user7898789pqridhjh</span>
                    </td>
                    <td className="px-6 py-4 text-[#666] font-medium">
                      <Badge status={"delivered"} />
                    </td>
                    <td className="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                      22-12-2025
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={12}>
                      <Divider />
                    </td>
                  </tr>

                  {isOpenShowProductDetails === 1 && (
                    <tr>
                      <td className="pl-4 sm:pl-20" colSpan={12}>
                        <div className="relative overflow-x-auto">
                          <table className="w-full min-w-[700px] text-sm text-left rtl:text-right text-body">
                            <thead className="text-sm text-heading">
                              <tr>
                                <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">
                                  Product ID
                                </th>
                                <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">
                                  Product Title
                                </th>
                                <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">
                                  Image
                                </th>
                                <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">
                                  Quantity
                                </th>
                                <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">
                                  Price
                                </th>
                                <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">
                                  Subtotal
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="bg-neutral-primary">
                                <td className="px-6 py-4 text-[#313030] font-medium whitespace-nowrap">
                                  46sfrhjp4525bn
                                </td>
                                <td className="px-6 py-4 text-[#666] font-medium">
                                  <span className="block w-[250px]">
                                    Dettol Original Bathing Soap Bar
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                                  <img
                                    src="https://m.media-amazon.com/images/I/61j4tjFr47L._SL1000_.jpg"
                                    alt="product img"
                                    className="w-20 h-20 object-cover rounded-md"
                                  />
                                </td>
                                <td className="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                                  2
                                </td>
                                <td className="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                                  $2999
                                </td>
                                <td className="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                                  $9954
                                </td>
                              </tr>

                              <tr className="bg-neutral-primary">
                                <td className="px-6 py-4 text-[#313030] font-medium whitespace-nowrap">
                                  46sfrhjp4525bn
                                </td>
                                <td className="px-6 py-4 text-[#666] font-medium">
                                  <span className="block w-[250px]">
                                    Dettol Original Bathing Soap Bar
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                                  <img
                                    src="https://m.media-amazon.com/images/I/61j4tjFr47L._SL1000_.jpg"
                                    alt="product img"
                                    className="w-20 h-20 object-cover rounded-md"
                                  />
                                </td>
                                <td className="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                                  2
                                </td>
                                <td className="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                                  $2999
                                </td>
                                <td className="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                                  $9954
                                </td>
                              </tr>

                              <tr>
                                <td colSpan={12} className="px-6 py-4">
                                  <div className="flex items-center gap-3">
                                    <span className="flex-1 h-px bg-[#e5e5e5]" />
                                    <span className="text-[12px] text-[#888] whitespace-nowrap">
                                      End of order
                                    </span>
                                    <span className="flex-1 h-px bg-[#e5e5e5]" />
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  )}

                  <tr>
                    <td colSpan={12} className="h-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;