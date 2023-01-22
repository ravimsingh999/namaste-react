import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <a href="/">
      <img
        className="title"
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe0oy_Y-JZ5wQKWatiTCQ0C4hEtmKw1_gWRA&usqp=CAU"
      />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// const burgerKing = {
//   name: "Burger King",
//   image:
//     "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
//   cusines: ["Burger", "American"],
//   rating: "4.3",
// };

const resturentList = [
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "48784",
        name: "Burger Singh (Big Punjabi Burgers)",
        uuid: "7f8d42b2-8e9b-42d3-be00-9e0d9504f33e",
        city: "2",
        area: "Sector 22",
        totalRatingsString: "",
        cloudinaryImageId: "g3j4bnatf5hsgpjmynxb",
        cuisines: [
          "Snacks",
          "Indian",
          "American",
          "Beverages",
          "Desserts",
          "North Indian",
          "Mughlai",
          "Biryani",
        ],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        slaString: "27 MINS",
        lastMileTravel: 0,
        slugs: {
          restaurant: "burger-singh-sector-23-cyber-city-night",
          city: "Gurgaon",
        },
        cityState: "2",
        address: "",
        locality: "Palam Vihar",
        parentId: 375065,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹90 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹90 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 6400,
              message: "",
            },
            {
              name: "BASE_TIME",
              fee: 0,
              message: "",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 6400,
          message: "",
          title: "Delivery Charge",
          amount: "6400",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "5 kms",
        hasSurge: false,
        cta: {
          link: "swiggy://menu?restaurant_id=48784",
          type: "DEEPLINK",
          text: "RESTAURANT_MENU",
        },
        sla: {
          restaurantId: "",
          deliveryTime: 27,
          minDeliveryTime: 27,
          maxDeliveryTime: 27,
          lastMileTravel: 0,
          lastMileDistance: 5,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.2",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "86475",
        name: "The Burger Club",
        uuid: "e3467350-99d1-4a7f-b30b-50ee8af626cf",
        city: "2",
        area: "Sector 43",
        totalRatingsString: "",
        cloudinaryImageId: "vatkymjt2l1m1o3vq1mb",
        cuisines: ["American", "Beverages", "Desserts"],
        tags: [],
        costForTwo: 25000,
        costForTwoString: "₹250 FOR TWO",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        slaString: "30 MINS",
        lastMileTravel: 0,
        slugs: {
          restaurant: "the-burger-club-phase-1-sushant-lok-dlf-phase-4",
          city: "Gurgaon",
        },
        cityState: "2",
        address: "",
        locality: "Sushant Lok",
        parentId: 2285,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use GUILTFREEJAN",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹125 | Use code GUILTFREEJAN",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use GUILTFREEJAN",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹125 | Use code GUILTFREEJAN",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 8200,
              message: "",
            },
            {
              name: "BASE_TIME",
              fee: 0,
              message: "",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 8200,
          message: "",
          title: "Delivery Charge",
          amount: "8200",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "7.3 kms",
        hasSurge: false,
        cta: {
          link: "swiggy://menu?restaurant_id=86475",
          type: "DEEPLINK",
          text: "RESTAURANT_MENU",
        },
        sla: {
          restaurantId: "",
          deliveryTime: 30,
          minDeliveryTime: 30,
          maxDeliveryTime: 30,
          lastMileTravel: 0,
          lastMileDistance: 7.3,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.1",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "34401",
        name: "Manorma",
        uuid: "d6a6801d-9670-4269-b6f7-c23ed02dff98",
        city: "2",
        area: "Sector 24",
        totalRatingsString: "",
        cloudinaryImageId: "fecaa8ef2d3ad8ae18c1b60c40c60990",
        cuisines: ["North Indian", "Chinese", "Biryani", "Mughlai", "Desserts"],
        tags: [],
        costForTwo: 15000,
        costForTwoString: "₹150 FOR TWO",
        deliveryTime: 18,
        minDeliveryTime: 18,
        maxDeliveryTime: 18,
        slaString: "18 MINS",
        lastMileTravel: 0,
        slugs: {
          restaurant: "manorma-dlf-phase-3-cyber-city",
          city: "Gurgaon",
        },
        cityState: "2",
        address: "",
        locality: "DLF phase 3 ,Gurgaon",
        parentId: 8908,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹120 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹120 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4000,
              message: "",
            },
            {
              name: "BASE_TIME",
              fee: 0,
              message: "",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 4000,
          message: "",
          title: "Delivery Charge",
          amount: "4000",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.1 kms",
        hasSurge: false,
        cta: {
          link: "swiggy://menu?restaurant_id=34401",
          type: "DEEPLINK",
          text: "RESTAURANT_MENU",
        },
        sla: {
          restaurantId: "",
          deliveryTime: 18,
          minDeliveryTime: 18,
          maxDeliveryTime: 18,
          lastMileTravel: 0,
          lastMileDistance: 0.1,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.0",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "125714",
        name: "Shahi Muradabadi Chicken Biryani, DLF Cyber City",
        uuid: "28ff371d-94b0-4d3e-90d8-f824fce7c482",
        city: "2",
        area: "Sector 24",
        totalRatingsString: "",
        cloudinaryImageId: "z28dqwhzqhkrekl0ii0y",
        cuisines: ["Mughlai"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 18,
        minDeliveryTime: 18,
        maxDeliveryTime: 18,
        slaString: "18 MINS",
        lastMileTravel: 0,
        slugs: {
          restaurant:
            "shahi-muradabadi-chicken-biryani-dlf-cyber-city-cyber-city-cyber-city",
          city: "Gurgaon",
        },
        cityState: "2",
        address: "",
        locality: "Cyber City",
        parentId: 16315,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹90 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹90 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4000,
              message: "",
            },
            {
              name: "BASE_TIME",
              fee: 0,
              message: "",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 4000,
          message: "",
          title: "Delivery Charge",
          amount: "4000",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.4 kms",
        hasSurge: false,
        cta: {
          link: "swiggy://menu?restaurant_id=125714",
          type: "DEEPLINK",
          text: "RESTAURANT_MENU",
        },
        sla: {
          restaurantId: "",
          deliveryTime: 18,
          minDeliveryTime: 18,
          maxDeliveryTime: 18,
          lastMileTravel: 0,
          lastMileDistance: 1.4,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.0",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
];
const ResturentCard = ({ cloudinaryImageId, name, cuisines, area }) => {
  // const { cloudinaryImageId, name, cuisines, area } = restaurant.data.data;
  return (
    <div className="resturent-card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{area}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="resturents">
      {resturentList.map((resturent) => {
        return (
          <ResturentCard
            {...resturent.data.data}
            key={resturent.data.data.id}
          />
        );
      })}
      {/* <ResturentCard {...resturentList[0].data.data} />
      <ResturentCard {...resturentList[1].data.data} />
      <ResturentCard {...resturentList[2].data.data} />
      <ResturentCard {...resturentList[3].data.data} /> */}
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
