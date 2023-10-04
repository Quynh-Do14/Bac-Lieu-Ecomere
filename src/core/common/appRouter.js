const PREFIX = "";

export const ROUTE_PATH = {
    LOGIN: `${PREFIX}/login`,
    REGISTER: `${PREFIX}/register`,

    DESTINATION: `${PREFIX}/destination`,
    VIEW_DESTINATION: `${PREFIX}/destination/view/:id`,

    ARTICLE: `${PREFIX}/article`,
    VIEW_ARTICLE: `${PREFIX}/article/view/:id`,

    SPECIALTY: `${PREFIX}/specialty`,
    VIEW_SPECIALTY: `${PREFIX}/specialty/view/:id`,

    FESTIVAL: `${PREFIX}/festival`,
    VIEW_FESTIVAL: `${PREFIX}/festival/view/:id`,

    LAYOUT_MAP: `${PREFIX}/map`,

    HOME_PAGE: `${PREFIX}/`,
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