import drive from "drive-db";

export default async (req, res) => {
  const db = await drive("1MRgRl8glCKNxk32yHdzou1kpFQn_79_65IeU2m0xNWY");
  let sanitizeResult = db.filter(
    (item) => item.name != "" && item.show == "Yes"
  );

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(sanitizeResult));
};
