const itemAbbreviationMapping = {
  JNT: "Joint On",
};

export default function getNameFromSubmissionLink(link) {
  const nameText = link.split(",")[1];
  const startIndex = nameText.indexOf('"') + 1;
  const endIndex = nameText.lastIndexOf('"');
  const item = nameText.slice(startIndex, endIndex);
  const itemAbri = item.split("-")[0];
  return { name: itemAbbreviationMapping[itemAbri], abri: itemAbri };
}

export function getSizeAndPrice(sizeText) {
  const result = { size: "", price: "" };
  const [size, priceText] = sizeText.split("=");
  result.size = size.trim();
  const [fst, priceTrimmed] = priceText.split("Rs.");
  const [price, last] = priceTrimmed.split("/-");
  result.price = parseInt(price);
  return result;
}