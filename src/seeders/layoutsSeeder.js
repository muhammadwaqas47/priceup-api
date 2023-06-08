exports.layouts = [
  {
    name: "Door",
    image: "images/layouts/layout_1.png",
    settings: {
      hardwareFinishes: "polished-chrome",
      handles: {
        handleType: "8-x-8-colonial-pull",
        count: 1,
      },
      hinges: {
        hingesType: "std-bevel",
        count: 2,
      },
      pivotHingeOption: {
        pivotHingeType: "pivot-bevel",
        count: 2,
      },
      heavyDutyOption: {
        heavyDutyType: "hvy-square",
        threshold: 85,
        height: 100,
      },
      glassType: {
        type: "clear",
        thickness: "3/8",
      },
      outages: 2,
      transom: "fixed-wall-clamp",
      other: {
        people: 2,
        hours: 2,
      },
    },
  },
];
