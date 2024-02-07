// Assets
import androidTV from "../assets/androidTV.png";
import fireTV from "../assets/fireTVpng.png";
import appleTV from "../assets/appleTV.png";

export const pricingItems = [
  {
    variant: "new",
    title: "Android TV App",
    featuresList: [
      "App for Android TV Devices & Android TV boxes/sticks for TV",
      "Free Publication on Google Play included",
    ],
    price: 199,
    icon: androidTV,
  },
  {
    variant: "new",
    title: "Amazon Fire TV App",
    featuresList: ["App for Amazon Fire TV & Fire TV Stick Devices", "Free Publication on Amazon included"],
    price: 199,
    icon: fireTV,
  },
  {
    title: "Apple TV App",
    featuresList: ["App for Apple TV / Apple TV Box Devices", "Own Apple Developer account requred for Publication"],
    price: 199,
    icon: appleTV,
  },
  {
    variant: "deal",
    title: "Bundle - Android TV + Amazon FireTV + Apple TV App",
    featuresList: [
      "3 Apps: Android TV, Amazon Fire TV & Apple TV",
      "Free Publication on Amazon & Google Play. Own Apple account requred",
    ],
    price: 499,
    save: 599,
  },
];
