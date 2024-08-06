import {
  ContainerOutlined,
  DatabaseOutlined,
  EnvironmentOutlined,
  MessageOutlined,
  ProjectOutlined,
  ScheduleOutlined,
  TagsOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { ROUTE_PATH } from "./appRouter";

export default class Constants {
  static Menu = class {
    static List = [
      {
        label: "Trang chủ",
        link: ROUTE_PATH.HOME_PAGE,
      },
      {
        label: "Bài viết",
        link: ROUTE_PATH.ARTICLE,
      },
      {
        label: "Điểm du lịch",
        link: ROUTE_PATH.DESTINATION,
      },
      // {
      //   label: "Lễ hội",
      //   link: ROUTE_PATH.FESTIVAL,
      // },
      // {
      //   label: "Đặc sản",
      //   link: ROUTE_PATH.SPECIALTY,
      // },
      {
        label: "Bản đồ",
        link: ROUTE_PATH.LAYOUT_MAP,
        children: [
          {
            id: 1,
            label: "Bản đồ trục công tử Bạc Liêu",
            link: `/TrucCongTuBacLieu`,
          },
          {
            id: 2,
            label: "Bản đồ tổng hợp điểm du lịch",
            link: `/TongHopDiemDiLich`,
          },    
          {
            id: 3,
            label: "Bản đồ trục hướng biển",
            link: `/TrucHuongBien`,
          },
          {
            id: 4,
            label: "Bản đồ trục quốc lộ",
            link: `/TrucQuocLo`,
          },
        ],
      },
    ];
  };
  static TOKEN = "token";
  static DEBOUNCE_SEARCH = 800;

  static Params = class {
    static limit = "limit";
    static page = "page";
    static searchName = "searchName";
    static idQuanHuyen = "idQuanHuyen";
    static idDanhMuc = "idDanhMuc";
    static parentId = "parentId";
  };

  static PaginationConfigs = class {
    static Size = 9;
    static SizeSearchPage = 8;
    static LimitSize = 60;
    static AllSize = 9000;
    static PageSizeList = [
      { label: "10", value: 10 },
      { label: "20", value: 20 },
      { label: "50", value: 50 },
    ];
  };

  static UseParams = class {
    static Id = ":id";
  };

  static StatusUser = class {
    static ADMIN = class {
      static value = "ADMIN";
      static label = "Quản trị viên";
    };
    static COMMITTEE = class {
      static value = "COMMITTEE";
      static label = "Ủy ban nhân dân Tỉnh";
    };
    static DEPARTMENT = class {
      static value = "DEPARTMENT";
      static label = "Sở VHTT&DL";
    };
    static USER = class {
      static value = "USER";
      static label = "Người dân";
    };
    static List = [
      { label: "Quản trị viên", value: "ADMIN" },
      { label: "Ủy ban nhân dân Tỉnh", value: "COMMITTEE" },
      { label: "Sở VHTT&DL", value: "DEPARTMENT" },
      { label: "Người dân", value: "USER" },
    ];
  };
  static DefaultImage = "1";
  static CategoryConfig = class {
    static Location = class {
      static label = "Địa điểm du lịch";
      static value = 1;
    };
    static Stay = class {
      static value = 2;
      static label = "Lưu Trú";
    };
    static Cuisine = class {
      static value = 3;
      static label = "Ẩm Thức";
    };
    static Vehicle = class {
      static value = 4;
      static label = "Phương Tiện";
    };
    static Specialty = class {
      static value = 5;
      static label = "Đặc Sản";
    };
    static Tour = class {
      static value = 6;
      static label = "Tour";
    };
    static Festival = class {
      static value = 7;
      static label = "Lễ hội";
    };
    static News = class {
      static value = 8;
      static label = "Bài viết";
    };
    static list = [
      { label: "Địa Điểm Du Lịch", value: 1 },
      { label: "Lưu Trú", value: 2 },
      { label: "Ẩm Thức", value: 3 },
      { label: "Phương Tiện", value: 4 },
      { label: "Đặc Sản", value: 5 },
      { label: "Tour", value: 6 },
      { label: "Lễ hội", value: 7 },
      { label: "Bài viết", value: 8 },
    ];
  };
  static Slogan =
    " Du lịch đã giúp chúng ta hiểu được ý nghĩa của cuộc sống và nó đã giúp chúng ta trở thành những người tốt hơn. Mỗi lần đi du lịch, chúng ta nhìn thế giới bằng con mắt mới.";

  static ToastMessage = class {
    static Notification = class {
      static Position = "top-right";
      static Duration = 6000;
    };
    static Confirmation = class {};
  };
}
