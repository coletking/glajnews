import { TimestampDate } from "timestamp-date";
import { formatDistanceToNow } from "date-fns";

const coverter = new TimestampDate();

export const formatNumber = (num) => {
  const n = new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 2,
  });

  return n.format(num);
};

export const timestampConverter = coverter;
export const timeStamptoDate = (data) => {
  return coverter.parseTimestampToDate(data);
};

export const getRandomString = (size = 50, chars) => {
  const result = [];
  const possibleCharacters =
    chars || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charSize = possibleCharacters.length;

  for (let i = 0; i < size; i++) {
    result.push(
      possibleCharacters.charAt(Math.floor(Math.random() * charSize))
    );
  }

  return result.join("");
};

export function createBaitElement() {
  const bait = document.createElement("div");
  bait.setAttribute(
    "class",
    "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links advertisement ad-text adSense adBlock adContent adBanner"
  );
  bait.setAttribute(
    "style",
    "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;"
  );
  return bait;
}

export function doesElementIsBlocked(elem) {
  if (
    elem.offsetParent === null ||
    elem.offsetHeight === 0 ||
    elem.offsetLeft === 0 ||
    elem.offsetTop === 0 ||
    elem.offsetWidth === 0 ||
    elem.clientHeight === 0 ||
    elem.clientWidth === 0
  ) {
    return true;
  }
  if (window.getComputedStyle !== undefined) {
    const elemCS = window.getComputedStyle(elem, null);
    if (
      elemCS &&
      (elemCS.getPropertyValue("display") === "none" ||
        elemCS.getPropertyValue("visibility") === "hidden")
    ) {
      return true;
    }
  }
  return false;
}

export default function detectDomAdblocker() {
  // that's a legacy Ad Block Plus check I suppose ?
  // I don't think this attribute is set anymore, but I am keeping it anyway
  if (window.document.body.getAttribute("abp") !== null) {
    return true;
  }
  // try to lure adblockers into a trap
  const bait = createBaitElement();
  window.document.body.appendChild(bait);
  const detected = doesElementIsBlocked(bait);
  window.document.body.removeChild(bait);
  return detected;
}

export const getTimeAgo = (timestamp) => {
  const currentDate = new Date();
  const targetDate = new Date(timestamp);

  const differenceInDays = Math.floor(
    (currentDate - targetDate) / (24 * 60 * 60 * 1000)
  );

  if (differenceInDays < 7) {
    return formatDistanceToNow(targetDate, { addSuffix: true });
  } else if (differenceInDays < 30) {
    const weeksAgo = Math.floor(differenceInDays / 7);
    return `${weeksAgo} ${weeksAgo === 1 ? "week" : "weeks"} ago`;
  } else if (differenceInDays < 365) {
    const monthsAgo = Math.floor(differenceInDays / 30);
    return `${monthsAgo} ${monthsAgo === 1 ? "month" : "months"} ago`;
  } else {
    const yearsAgo = Math.floor(differenceInDays / 365);
    return `${yearsAgo} ${yearsAgo === 1 ? "year" : "years"} ago`;
  }
};
