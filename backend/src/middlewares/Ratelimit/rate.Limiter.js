import ratelimit from "../../config/upstash.js";


const ratelimiter = async (req, res, next) => {
    try {
      // user identier "my-limit-key" ie userId 
      // on authetication for each user can also use ip to ratelimit
      const { success } = await ratelimit.limit("my-limit-key");
      if (!success) {
        return res.status(429).json({
          success: false,
          message: "Too many request, Please try again later!!",
        });
      }
      next();
    } catch (err) {
        console.error("Rate limit error", err);
    }
}

export default  ratelimiter