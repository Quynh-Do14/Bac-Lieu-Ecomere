const PREFIX = "";

export const ROUTE_PATH = {
    LOGIN: `/${PREFIX}login`,
    REGISTER: `/${PREFIX}register`,

    DESTINATION: `/${PREFIX}destination`,
    VIEW_DESTINATION: `/${PREFIX}view-destination`,

    ARTICLE: `/${PREFIX}article`,
    VIEW_ARTICLE: `/${PREFIX}view-article`,

    SPECIALTY: `/${PREFIX}specialty`,
    VIEW_SPECIALTY: `/${PREFIX}view-specialty`,

    FESTIVAL: `/${PREFIX}festival`,
    VIEW_FESTIVAL: `/${PREFIX}view-festival`,

    LAYOUT_MAP: `/${PREFIX}map`,

    HOME_PAGE: `/`,
};
export class Endpoint {
    static Auth = class {
        static Login = "/auth/login";
    }

    static Module = class {
        static Evaluate = "/danhgia";
        static District = "/quanhuyen";
        static Upload = "/files/upload";
        static MultiUpload = "/files/upload-multi";
        static DiaDiem = "/diadiem";
        static TinTuc = "/tintuc";

    }
};