import { NextApiRequest, NextApiResponse } from "next";
import datasource from "../../data-layer/";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await datasource?.getCompanySlugs();
  res.status(200).json(data);
}
