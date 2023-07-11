export default function handler(req: any, res: any) {

  const clientIp =
    req.headers["x-forwarded-for"]?.split(",")?.[0]?.trim() ||
    req.socket.remoteAddress;

  res.status(200).json({ addr: clientIp });
}
