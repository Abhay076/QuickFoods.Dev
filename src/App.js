import logo from "./images/Quick Food (6).png";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
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
      id: "637525",
      name: "Madhuram Tiffins\t",
      cloudinaryImageId: "d1209d60cda85758d702c7e0a60a2790",
      locality: "TNGO'S colony",
      areaName: "Nanakramguda",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian"],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: "637525",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2600,
      },
      parentId: "341225",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-03 12:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
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
      link: "swiggy://menu?restaurant_id=637525",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "724198",
      name: "EatFit",
      cloudinaryImageId: "5d4cb2b00cd43edb0896515211b25982",
      locality: "Vattinagulapally",
      areaName: "Gandipet Mandal",
      costForTwo: "₹270 for two",
      cuisines: [
        "Chinese",
        "Healthy Food",
        "Tandoor",
        "Pizzas",
        "North Indian",
        "Thalis",
        "Biryani",
      ],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: "724198",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2600,
      },
      parentId: "76139",
      avgRatingString: "3.7",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-03 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
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
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=724198",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "588172",
      name: "Third Wave Coffee",
      cloudinaryImageId: "d96267738c19ec62acb5390e52faba41",
      locality: "Khajaguda",
      areaName: "Manikonda",
      costForTwo: "₹400 for two",
      cuisines: ["Beverages", "Bakery", "Continental"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "588172",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3700,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3700,
      },
      parentId: "274773",
      avgRatingString: "4.2",
      totalRatingsString: "500+",
      promoted: true,
      adTrackingId:
        "cid=7726012~p=5~eid=00000189-b9e1-8a9c-0954-a5d800e1055b~srvts=1691040713372~45995",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-03 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
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
      link: "swiggy://menu?restaurant_id=588172",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "653308",
      name: "Sri Varalakshmi Kitchens",
      cloudinaryImageId: "fca093fa246fbccd7b3074d71b11ab0f",
      locality: "HUDA Layout",
      areaName: "Lingampally & Nalagandla",
      costForTwo: "₹100 for two",
      cuisines: ["South Indian"],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: "653308",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 6800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 6800,
      },
      parentId: "393054",
      avgRatingString: "4.3",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 7.5,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "7.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-03 15:30:00",
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
      link: "swiggy://menu?restaurant_id=653308",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "569575",
      name: "South Tiffins",
      cloudinaryImageId: "bu7yxhssls3jx3p4gdsj",
      locality: "Kondapur",
      areaName: "Masjid Banda Kondapur",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian"],
      avgRating: 4.2,
      veg: true,
      feeDetails: {
        restaurantId: "569575",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 6800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 6800,
      },
      parentId: "191511",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 7.2,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "7.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-03 13:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
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
      link: "swiggy://menu?restaurant_id=569575",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "589448",
      name: "Udipi's Upahar",
      cloudinaryImageId: "y6dkeytadfvribjjhb43",
      locality: "Lingampally & Nalagandla",
      areaName: "Nallagandla",
      costForTwo: "₹400 for two",
      cuisines: ["South Indian", "North Indian", "Chinese", "Snacks"],
      avgRating: 4.2,
      veg: true,
      feeDetails: {
        restaurantId: "589448",
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
      parentId: "1061",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-03 15:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
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
      link: "swiggy://menu?restaurant_id=589448",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "1091",
      name: "Hitech Bawarchi",
      cloudinaryImageId: "tgqctbhbkeij8qj6cwg0",
      locality: "Indiranagar",
      areaName: "Gachibowli",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "Chinese", "Indian", "Kebabs", "Tandoor"],
      avgRating: 3.5,
      feeDetails: {
        restaurantId: "1091",
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
      parentId: "465",
      avgRatingString: "3.5",
      totalRatingsString: "10K+",
      promoted: true,
      adTrackingId:
        "cid=7669237~p=6~eid=00000189-b9e1-8a9c-0954-a5d900e1060e~srvts=1691040713372~45995",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-04 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
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
      link: "swiggy://menu?restaurant_id=1091",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "746378",
      name: "Millet Express",
      cloudinaryImageId: "0d8bdac162845c3794309b67a672364d",
      locality: "nankamguda",
      areaName: "nankamguda",
      costForTwo: "₹200 for two",
      cuisines: [
        "Healthy Food",
        "South Indian",
        "North Indian",
        "Biryani",
        "Chinese",
        "Beverages",
      ],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "746378",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2600,
      },
      parentId: "10639",
      avgRatingString: "4.1",
      totalRatingsString: "8",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "15 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-03 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
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
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=746378",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "386319",
      name: "JDM Punjabi Dhaba",
      cloudinaryImageId: "pf1wtqvhveardvtepbte",
      locality: "Financial District",
      areaName: "Nanakramguda",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Thalis", "Combo", "Punjabi"],
      avgRating: 4.2,
      veg: true,
      feeDetails: {
        restaurantId: "386319",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3700,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3700,
      },
      parentId: "248057",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-03 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
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
      link: "swiggy://menu?restaurant_id=386319",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "240295",
      name: "Mana Dosa",
      cloudinaryImageId: "gquekhp1nglxpx27hmaa",
      locality: "Shiridi sai nagar",
      areaName: "Manikonda",
      costForTwo: "₹350 for two",
      cuisines: ["Indian"],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: "240295",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 6000,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 6000,
      },
      parentId: "131347",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 6.6,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "6.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-03 12:20:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹599",
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
      link: "swiggy://menu?restaurant_id=240295",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "226515",
      name: "Dadu's",
      cloudinaryImageId: "709c05f458bdb729b684c65cb3a4654b",
      locality: "Kondapur",
      areaName: "Gachibowli",
      costForTwo: "₹350 for two",
      cuisines: ["Sweets", "Desserts", "Chaat", "Snacks", "Bakery"],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: "226515",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 6000,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 6000,
      },
      parentId: "364048",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      promoted: true,
      adTrackingId:
        "cid=7672759~p=8~eid=00000189-b9e1-8a9c-0954-a5db00e10821~srvts=1691040713372~45995",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 6.1,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "6.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-04 00:15:00",
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
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
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
      link: "swiggy://menu?restaurant_id=226515",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "628352",
      name: "Vaishnavi Tiffens",
      cloudinaryImageId: "ovzg2oan31uuhci7vigl",
      locality:
        "Secratariet Colony Puppal Guda Gandipet Mandal Ranga Reddy District",
      areaName: "Manikonda",
      costForTwo: "₹100 for two",
      cuisines: ["Indian"],
      avgRating: 4,
      veg: true,
      feeDetails: {
        restaurantId: "628352",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 6800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 6800,
      },
      parentId: "375430",
      avgRatingString: "4.0",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 7.7,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "7.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-03 12:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹700",
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
      link: "swiggy://menu?restaurant_id=628352",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "20351",
      name: "Cafe Eclat",
      cloudinaryImageId: "lx6j1qmjib62hlkgtpaw",
      locality: "Telecom Nagar",
      areaName: "Gachibowli",
      costForTwo: "₹1000 for two",
      cuisines: ["Bakery", "Italian", "European"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "20351",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 6000,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 6000,
      },
      parentId: "18967",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 6.1,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "6.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-03 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "newg.png",
                  description: "Gourmet",
                },
              },
            ],
          },
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  description: "",
                  shortDescription: "options available",
                },
              },
            ],
          },
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
      link: "swiggy://menu?restaurant_id=20351",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "376101",
      name: "Harley's Fine Baking",
      cloudinaryImageId: "x8hdnoeard8p2bs2ugdi",
      locality: "Serilingampally",
      areaName: "Nanakramguda",
      costForTwo: "₹500 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "376101",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3700,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3700,
      },
      parentId: "11126",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-04 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "newg.png",
                  description: "Gourmet",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
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
      link: "swiggy://menu?restaurant_id=376101",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData.data;
  return (
    <div className="card" style={{ background: "white" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} stars</p>
      <p>{resData.data.sla.deliveryTime} minutes</p>
      <p>{costForTwo}</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-list">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

export default App;
