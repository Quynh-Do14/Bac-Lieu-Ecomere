const PREFIX = "";

export const ROUTE_PATH = {
    LOGIN: `${PREFIX}/login`,
    REGISTER: `${PREFIX}/register`,

    DESTINATION: `${PREFIX}/destination`,
    VIEW_DESTINATION: `${PREFIX}/destination/view/:id`,

    ARTICLE: `${PREFIX}/festival`,
    VIEW_ARTICLE: `${PREFIX}/festival/view/:id`,

    SPECIALTY: `${PREFIX}/specialty`,
    VIEW_SPECIALTY: `${PREFIX}/specialty/view/:id`,

    FESTIVAL: `${PREFIX}/festival`,
    VIEW_FESTIVAL: `${PREFIX}/festival/view/:id`,

    LAYOUT_MAP: `${PREFIX}/layout-map`,

    HOME_PAGE: `${PREFIX}/`,
};
export class Endpoint {
    static Auth = class {
        static Login = "/auth/login";
    }

    static Module = class {
        static Tour = "/tour";
        static User = "/user";
        static Category = "/danhmuc";
        static CategoryByParentId = "/danhmuc/parentId";
        static Location = "/diadiem";
        static News = "/tintuc";
        static Evaluate = "/danhgia";
        static District = "/quanhuyen";
        static Upload = "/files/upload";
        static MultiUpload = "/files/upload-multi";
    }
};