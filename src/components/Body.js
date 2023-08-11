import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
const Body = () => {
  let listOfRestaurants = [
    {
      type: "restaurant",
      data: {
        id: "434623",
        name: "The Spicy Venue",
        cloudinaryImageId: "eay2ftdkm4dszglx5nj5",
        locality: "Narsingi & Kokapet",
        areaName: "Kokapet",
        costForTwo: "₹600 for two",
        cuisines: [
          "Biryani",
          "Andhra",
          "North Indian",
          "Kebabs",
          "Mughlai",
          "Tandoor",
        ],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "434623",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5200,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 5200,
        },
        parentId: "6227",
        avgRatingString: "4.2",
        totalRatingsString: "5K+",
        promoted: true,
        adTrackingId:
          "cid=7672677~p=1~eid=00000189-b9e1-8a9c-0954-a5d400e1011e~srvts=1691040713372~45995",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 5.7,
          serviceability: "SERVICEABLE",
          slaString: "32 mins",
          lastMileTravelString: "5.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-08-03 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=434623",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      type: "restaurant",
      data: {
        id: "160087",
        name: "Varalakshmi Tiffins",
        cloudinaryImageId: "8523266de1213e8ea57e5df4eedf747e",
        locality: "Opposite Gate No 2",
        areaName: "Gachibowli",
        costForTwo: "₹300 for two",
        cuisines: ["South Indian"],
        avgRating: 4.5,
        veg: true,
        feeDetails: {
          restaurantId: "160087",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5200,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 5200,
        },
        parentId: "6482",
        avgRatingString: "4.5",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 5.5,
          serviceability: "SERVICEABLE",
          slaString: "25 mins",
          lastMileTravelString: "5.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-08-03 12:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    iconId: "guiltfree/GF_Logo_android_3x",
                    description: "",
                    shortDescription: "options available",
                    fontColor: "#7E808C",
                  },
                },
              ],
            },
            textBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹100 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=160087",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      type: "restaurant",
      data: {
        id: "434623",
        name: "The Spicy Venue -I ",
        cloudinaryImageId: "eay2ftdkm4dszglx5nj5",
        locality: "Narsingi & Kokapet",
        areaName: "Kokapet",
        costForTwo: "₹600 for two",
        cuisines: [
          "Biryani",
          "Andhra",
          "North Indian",
          "Kebabs",
          "Mughlai",
          "Tandoor",
        ],
        avgRating: 3.5,
        feeDetails: {
          restaurantId: "434623",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5200,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 5200,
        },
        parentId: "6227",
        avgRatingString: "4.2",
        totalRatingsString: "5K+",
        promoted: true,
        adTrackingId:
          "cid=7672677~p=1~eid=00000189-b9e1-8a9c-0954-a5d400e1011e~srvts=1691040713372~45995",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 5.7,
          serviceability: "SERVICEABLE",
          slaString: "32 mins",
          lastMileTravelString: "5.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-08-03 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=434623",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
  ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            listOfRestaurants = listOfRestaurants.filter(
              (restaurant) => restaurant.data.avgRating > 4
            );
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-list">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
