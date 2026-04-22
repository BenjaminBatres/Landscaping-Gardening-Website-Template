import LawnHealthBg from "../assets/Lawn-Health-bg.jpg";
import BlowCleanup from "../assets/Blower-Cleanup-bg.jpg";
import GrassAdjustment from "../assets/Grass-Adjustment-bg.jpg";
import LawnCare from "../assets/LawnCare-bg.jpg";
import LawnMowing from "../assets/Lawn-Mowing-Maintenance.jpg";
import WeedWacker from "../assets/Weed-Wacker-bg.jpg";

// LawnHealth imgs
import LawnHeath1 from "../assets/Lawn-health-img-1.jpeg";
import LawnHeath2 from "../assets/Lawn-health-img-2.jpeg";
import LawnHeath3 from "../assets/Lawn-health-img-3.jpeg";

// Cleanup imgs
import DebrisCleanup1 from "../assets/Debris-cleanup-img-1.jpeg";
import DebrisCleanup2 from "../assets/Debris-cleanup-img-2.jpeg";
import DebrisCleanup3 from "../assets/Debris-cleanup-img-3.jpeg";

// Grass adjustment imgs
import GrassAdjustment1 from "../assets/Grass-adjustment-img-1.jpg";
import GrassAdjustment2 from "../assets/Grass-adjustment-img-2.jpg";
import GrassAdjustment3 from "../assets/Grass-adjustment-img-3.jpg";

// Edge trimming imgs
import EdgeTrimming1 from "../assets/Edge-trimming-img-1.jpg";
import EdgeTrimming2 from "../assets/Edge-trimming-img-2.png";
import EdgeTrimming3 from "../assets/Edge-trimming-img-3.jpg";

// LawnMaintenance imgs
import LawnMaintenance1 from "../assets/Lawn-maintenance-img-1.jpg";
import LawnMaintenance2 from "../assets/Lawn-maintenance-img-2.jpg";
import LawnMaintenance3 from "../assets/Lawn-maintenance-img-3.jpg";

// Seasonal imgs
import Seasonal1 from "../assets/Seasonal-img-1.png";
import Seasonal2 from "../assets/Edge-trimming-img-2.png";
import Seasonal3 from "../assets/Seasonal-img-3.png";

const servicesInfo = [
  {
    id: "lawn-health-inspection",
    title: "Lawn Health Inspection",
    description:
      "Stay ahead of problems with routine checks for soil, pests, and turf condition — keeping your lawn resilient all year.",
    image: LawnHealthBg,
    included: [
      "Visual inspection",
      "Soil condition and drainage checks",
      "Seasonal recommendations",
      "Identification of weeds",
      "Progress reports provided",
    ],
    paragraphTitle: "Lawn Health Inspection at Each Visit",
    paragraph: [
      "A great-looking lawn doesn’t happen by accident — it requires consistent monitoring and care. With every maintenance visit, we carry out a detailed lawn health inspection to identify early signs of stress, pests, or disease before they become bigger problems.",
      "Our specialists examine soil structure, turf density, colour, and growth rhythm, while also checking for compaction, moss, or invasive weeds. We provide you with tailored recommendations after each visit, ensuring your lawn stays vibrant, resilient, and well-protected all year round.",
    ],
    quote:
      "A lawn can look healthy on the surface while hiding deeper issues. Regular inspections allow us to treat problems early and keep lawns looking perfect all year. Prevention is always better than cure.",
    highlights: [
      {
        title: "Prevent Problems Early",
        description: "Spotting issues before they spread saves time and money.",
      },
      {
        title: "Tailored Advice Every Time",
        description:
          "Receive personalised guidance for watering, feeding, and mowing.",
      },
      {
        title: "Consistent Lawn Health",
        description:
          "Regular inspections keep your lawn strong, green, and thriving.",
      },
    ],
    generals: [
      {
        title: "Check Grass Color",
        description:
          "Yellowing often points to nutrient deficiency or poor watering.",
      },
      {
        title: "Monitor Growth",
        description: "Uneven patches may signal compaction or pests.",
      },
      {
        title: "Watch for Weeds & Moss",
        description: "Early removal prevents spread and protects lawn density.",
      },
      {
        title: "Seasonal Adjustments",
        description:
          "Change mowing, feeding, and watering practices with the weather.",
      },
    ],
    images: [LawnHeath1, LawnHeath2, LawnHeath3],
  },
  {
    id: "debris-blow-cleanup",
    title: "Debris/Blow Cleanup",
    description:
      "Enjoy a spotless lawn and outdoor space with complete post-service cleanup, leaving your garden tidy and presentable.",
    image: BlowCleanup,
    included: [
      "Full debris and leaf clearance",
      "Professional-grade blowers",
      "Removal of grass clippings",
      "Optional collection and eco-friendly disposal",
      "Clean, ready-to-use lawn",
    ],
    paragraphTitle: "Debris/Blow Cleanup After Each Service",
    paragraph: [
      "A freshly maintained lawn should leave your garden looking spotless — not messy. Our debris and blow cleanup service ensures that once mowing, trimming, or edging is complete, your entire outdoor space is left neat, tidy, and ready to enjoy.",
      "Using professional-grade blowers, we clear grass clippings, leaves, and debris from pathways, patios, and driveways. We also remove loose clippings from flowerbeds and borders, preventing unwanted buildup that can block sunlight or smother plants. The result is a clean, polished finish that showcases your lawn at its best.",
    ],
    quote:
      "Cleanup is more than just appearances — it’s about keeping your lawn and garden beds healthy. By removing clippings and debris, we give the grass space to breathe and grow evenly. A tidy lawn is always a healthier lawn.",
    highlights: [
      {
        title: "Instantly Presentable",
        description:
          "Your lawn and outdoor areas look flawless immediately after service.",
      },
      {
        title: "Healthier Lawn & Plants",
        description:
          "Prevents clippings and debris from smothering grass or flowerbeds.",
      },
      {
        title: "Time-Saving Convenience",
        description:
          "No need for you to clean up after maintenance — we handle it all.",
      },
    ],
    generals: [
      {
        title: "After Every Mow",
        description:
          "Always clear clippings from hard surfaces to avoid staining and buildup.",
      },
      {
        title: "Autumn",
        description:
          "Leaf blowing and removal is essential to prevent smothering and mould growth.",
      },
      {
        title: "Winter",
        description:
          "Clear debris promptly to stop rot and maintain healthy turf over dormant months.",
      },
      {
        title: "Spring & Summer",
        description:
          "Keep beds and borders free of clippings to encourage flower and shrub growth.",
      },
    ],
    images: [DebrisCleanup1, DebrisCleanup2, DebrisCleanup3],
  },
  {
    id: "grass-height-adjustment",
    title: "Grass Adjustment",
    description:
      "Protect root health and maintain vibrancy with expert mowing height adjustments matched to each season’s conditions.",
    image: GrassAdjustment,
    included: [
      "Seasonal lawn height assessment",
      "Precision mowing adjustments",
      "Blade height calibration for optimal growth",
      "Protection against heat stress",
      "Seasonal care reports with adjustment",
    ],
    paragraphTitle: "Grass Height Adjustment by Season",
    paragraph: [
      "A healthy, thriving lawn depends on more than just regular mowing — it’s about mowing at the right height, at the right time of year. Grass height directly impacts root strength, resilience to stress, and the overall appearance of your lawn. Our seasonal adjustment service ensures your lawn is cut to the perfect length every time, keeping it greener and stronger all year round.",
      "We monitor weather patterns, grass varieties, and seasonal shifts to determine the best mowing height. By preventing over-cutting in summer and encouraging closer cuts in cooler months, we balance growth, health, and durability for long-term results.",
    ],
    quote:
      "One of the most common mistakes I see is people mowing too short in summer or too high in spring. Grass needs different care as the seasons change. Adjusting blade height gives your lawn the best chance to thrive, whatever the weather.",
    highlights: [
      {
        title: "Season-Smart Care",
        description:
          "Each mow is tailored to the season, ensuring optimal lawn health.",
      },
      {
        title: "Stronger Roots",
        description:
          "Proper height adjustment promotes deeper root growth and drought resistance.",
      },
      {
        title: "Year-Round Green",
        description:
          "Reduces patchiness, browning, and thinning caused by incorrect mowing height.",
      },
    ],
    generals: [
      {
        title: "Spring",
        description:
          "Keep grass around 2.5–3 inches to encourage strong spring growth.",
      },
      {
        title: "Summer",
        description:
          "Raise mower blades to 3–3.5 inches to reduce heat and drought stress.",
      },
      {
        title: "Autumn",
        description:
          "Lower gradually back to 2.5 inches to prepare for cooler, wetter conditions.",
      },
      {
        title: "Winter",
        description:
          "Mow sparingly at around 2 inches, only when growth continues and ground is dry.",
      },
    ],
    images: [GrassAdjustment1, GrassAdjustment2, GrassAdjustment3],
  },
  {
    id: "edge-trimming-lawn-definition",
    title: "Edge Trimming & Lawn Definition",
    description:
      "Achieve crisp, sharp lawn borders that enhance curb appeal and prevent grass from spreading into beds and pathways.",
    image: WeedWacker,
    included: [
      "Precision edge trimming around lawns",
      "Definition along driveways",
      "Removal of overgrown grass",
      "Sharp, clean lines maintained at each visit",
      "Optional edging stone or border installation",
    ],
    paragraphTitle: "Edge Trimming & Lawn Definition",
    paragraph: [
      "Crisp edges give a lawn its polished, professional look — the detail that separates a good lawn from a great one. Our edge trimming service keeps borders sharp, clean, and uniform, ensuring your lawn blends seamlessly into flowerbeds, pathways, and outdoor living spaces.",
      "We use specialised edging tools and commercial-grade trimmers to remove overgrowth and redefine boundaries. Over time, edging also prevents grass from creeping into garden beds and keeps pathways free of encroachment, making your entire landscape look more refined and intentional.",
    ],
    quote:
      "Edges make all the difference. A sharp border transforms the whole garden instantly, even if the lawn itself hasn’t just been mowed. It’s the small details that bring out the beauty of a landscape",
    highlights: [
      {
        title: "Neat, Polished Appearance",
        description:
          "Sharp edges enhance curb appeal and give your lawn a finished look.",
      },
      {
        title: "Prevents Overgrowth:",
        description:
          "Stops grass from spreading into flowerbeds, driveways, and walkways.",
      },
      {
        title: "Low-Maintenance Upkeep",
        description:
          "Consistent edging reduces the need for frequent reshaping or border repair.",
      },
    ],
    generals: [
      {
        title: "Trim Little & Often",
        description:
          "Regular trimming prevents major overgrowth and keeps borders consistent.",
      },
      {
        title: "Use the Right Tools",
        description:
          "A half-moon edger or powered trimmer gives the cleanest lines.",
      },
      {
        title: "Mind the Depth",
        description:
          "Cut edges to 2–3 inches deep for durability and easier maintenance.",
      },
      {
        title: "Refresh Seasonally",
        description:
          "Re-cut or re-define edges each spring and autumn for lasting definition.",
      },
    ],
    images: [EdgeTrimming1, EdgeTrimming2, EdgeTrimming3],
  },
  {
    id: "lawn-mowing-maintence",
    title: "Lawn Health Inspection",
    description:
      "Boost soil health and strengthen grass with year-round fertilisation plans designed for lasting growth and resilience.",
    image: LawnMowing,
    included: [
      "Precision lawn mowing",
      "Edge trimming",
      "Grass height adjusted by season",
      "Debris/blow cleanup after each service",
      "Lawn health inspection at each visit",
    ],
    paragraphTitle: "Lawn Mowing & Maintenance",
    paragraph: [
      "Your lawn is the first thing people see — we make sure it’s always neat, green, and thriving with reliable mowing, trimming, and seasonal care. We began with a site survey and in-depth consultation. The couple wanted soft landscaping with defined zones — a green lawn for visual appeal, and a seating area for entertaining. We proposed a clean, curved lawn design with flowerbeds and low-maintenance plant species.",
      "We removed the existing, patchy turf and invasive weeds, trimmed overgrown shrubs, and excavated the compacted soil to improve drainage. Edging stones were installed to define the lawn’s new shape.",
    ],
    quote:
      "Mowing isn’t just about cutting grass — it’s about protecting root health, controlling pests, and giving the lawn the best chance to thrive. Timing and technique matter, and we’ve perfected both",
    highlights: [
      {
        title: "Neat, Polished Appearance",
        description:
          "Sharp edges enhance curb appeal and give your lawn a finished look.",
      },
      {
        title: "Prevents Overgrowth",
        description:
          "Stops grass from spreading into flowerbeds, driveways, and walkways.",
      },
      {
        title: "Low-Maintenance Upkeep",
        description:
          "Consistent edging reduces the need for frequent reshaping or border repair.",
      },
    ],
    generals: [
      {
        title: "Follow the 1/3 Rule",
        description:
          "Never cut more than one-third of the grass height in a single mow.",
      },
      {
        title: "Switch Directions",
        description:
          "Alternate your mowing pattern each time to prevent ruts and encourage upright growth.",
      },
      {
        title: "Mulch Mindfully",
        description:
          "Use clippings as mulch only when grass is dry and healthy.",
      },
      {
        title: "Water Wisely",
        description:
          "Mow after watering or rain only once the lawn is dry — mowing wet grass can damage both the turf and the mower.",
      },
    ],
    images: [LawnMaintenance1, LawnMaintenance2, LawnMaintenance3],
  },
  {
    id: "seasonal-fertilisation-lawn-nutrition",
    title: "Seasonal Fertilisation & Lawn Nutrition",
    description:
      "Keep your lawn neat, green, and thriving with professional mowing, trimming, and seasonal care tailored to your space.",
    image: LawnCare,
    included: [
      "Soil testing & nutrient analysis",
      "Customised fertiliser application",
      "Weed & moss control treatments",
      "Lawn aeration and overseeding support",
      "Lawn health inspection at each visit",
    ],
    paragraphTitle: "Seasonal Fertilisation & Lawn Nutrition",
    paragraph: [
      "A healthy lawn starts below the surface — strong roots and nutrient-rich soil are the foundation of lasting greenery. Our seasonal fertilisation service ensures your grass receives exactly what it needs, when it needs it. We balance soil nutrients, encourage thick growth, and build resilience against pests, weeds, and weather stress.",
      "We begin with a soil test to identify nutrient deficiencies. From there, we apply tailored treatments throughout the year — boosting growth in spring, protecting against heat stress in summer, preparing for resilience in autumn, and fortifying roots for winter dormancy.",
    ],
    quote:
      "The key to a lush lawn isn’t just mowing — it’s proper nutrition. Seasonal fertilisation gives your grass the strength to grow evenly, resist stress, and recover quickly. With the right balance, lawns stay greener and healthier all year round.",
    highlights: [
      {
        title: "Year-Round Lawn Health",
        description:
          "Targeted treatments keep your lawn strong and vibrant in every season.",
      },
      {
        title: "Tailored Nutrition Plans",
        description:
          "No one-size-fits-all — fertilisation is adjusted based on soil type, grass variety, and local climate.",
      },
      {
        title: "Long-Term Resilience",
        description:
          "Builds disease resistance, improves water retention, and reduces weed invasion.",
      },
    ],
    generals: [
      {
        title: "Spring",
        description: "Apply a nitrogen-rich fertiliser to boost rapid growth.",
      },
      {
        title: "Summer",
        description:
          "Use controlled-release formulas to maintain colour without burning the lawn.",
      },
      {
        title: "Autumn",
        description: "Focus on potassium to strengthen roots ahead of winter.",
      },
      {
        title: "Winter",
        description:
          "Apply light feeds only if necessary; avoid over-fertilising dormant grass.",
      },
    ],
    images: [Seasonal1, Seasonal2, Seasonal3],
  },
];

export default servicesInfo;
