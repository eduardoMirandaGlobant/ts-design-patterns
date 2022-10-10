interface CacheOptions {
  host?: string;
  port?: number;
  password?: string;
}

class CacheService {
  private static instance: CacheService;
  private constructor(options: CacheOptions) {
    console.log("Reading cache options once");
    console.log({ options });
  }

  public static getInstance(options: CacheOptions = {}) {
    if (CacheService.instance) {
      return CacheService.instance;
    }
    CacheService.instance = new CacheService(options);
    return CacheService.instance;
  }
}

let instance = CacheService.getInstance();
instance = CacheService.getInstance();
