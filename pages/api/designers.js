import drive from "drive-db";

export default async (req, res) => {
  const db = await drive("170Ae12Hy5LyUv5SUoEaAykg6yLDnzAoOKaryMQfX0qk");
  let sanitizeResult = db.filter(
    (item) => item.name != "" && item.show == "Yes"
  );

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(sanitizeResult));
};
