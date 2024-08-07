PGDMP     ,    ;    	    	    	    {            tntraveldaknong    14.4    14.4 M    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24586    tntraveldaknong    DATABASE     s   CREATE DATABASE tntraveldaknong WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE tntraveldaknong;
                postgres    false                        3079    24587    postgis 	   EXTENSION     ;   CREATE EXTENSION IF NOT EXISTS postgis WITH SCHEMA public;
    DROP EXTENSION postgis;
                   false            �           0    0    EXTENSION postgis    COMMENT     ^   COMMENT ON EXTENSION postgis IS 'PostGIS geometry and geography spatial types and functions';
                        false    2            �            1259    25618    danhMucDiaDiem    TABLE     �   CREATE TABLE public."danhMucDiaDiem" (
    "idDanhMucDiaDiem" bigint NOT NULL,
    "tenDanhMuc" character varying,
    status integer DEFAULT 1,
    "parentId" bigint DEFAULT 0
);
 $   DROP TABLE public."danhMucDiaDiem";
       public         heap    postgres    false            �            1259    25625 #   DanhMucDiaDiem_idDanhMucDiaDiem_seq    SEQUENCE     �   CREATE SEQUENCE public."DanhMucDiaDiem_idDanhMucDiaDiem_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 <   DROP SEQUENCE public."DanhMucDiaDiem_idDanhMucDiaDiem_seq";
       public          postgres    false    215            �           0    0 #   DanhMucDiaDiem_idDanhMucDiaDiem_seq    SEQUENCE OWNED BY     q   ALTER SEQUENCE public."DanhMucDiaDiem_idDanhMucDiaDiem_seq" OWNED BY public."danhMucDiaDiem"."idDanhMucDiaDiem";
          public          postgres    false    216            �            1259    25626    diaDiem    TABLE     j  CREATE TABLE public."diaDiem" (
    "idDiaDiem" bigint NOT NULL,
    "tenDiaDiem" character varying,
    "diaChi" text,
    "moTa" text,
    "hinhAnh" text,
    "uriVideo" text,
    "uriBaiViet" text,
    "idQuanHuyen" bigint,
    lat numeric,
    long numeric,
    "soSaoTrungBinh" numeric DEFAULT 0.0,
    geom public.geometry,
    status integer DEFAULT 1,
    "emailLienHe" character varying,
    "sdtLienHe" character varying,
    "gioMoCua" character varying,
    "gioDongCua" character varying,
    "thoiGianGhe" character varying,
    "luotXem" bigint,
    "idDanhMuc" bigint,
    "giaVe" character varying
);
    DROP TABLE public."diaDiem";
       public         heap    postgres    false    2    2    2    2    2    2    2    2            �            1259    25633    DiaDiem_idDiaDiem_seq    SEQUENCE     �   CREATE SEQUENCE public."DiaDiem_idDiaDiem_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."DiaDiem_idDiaDiem_seq";
       public          postgres    false    217            �           0    0    DiaDiem_idDiaDiem_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."DiaDiem_idDiaDiem_seq" OWNED BY public."diaDiem"."idDiaDiem";
          public          postgres    false    218            �            1259    25634    danhGia    TABLE     �   CREATE TABLE public."danhGia" (
    "idDanhGia" bigint NOT NULL,
    "userId" bigint,
    "soSao" integer,
    "noiDung" text,
    "thoiGianDanhGia" character varying,
    "idDiaDiem" bigint,
    "idTinTuc" bigint,
    "idTour" bigint
);
    DROP TABLE public."danhGia";
       public         heap    postgres    false            �            1259    25639    danhGia_idDanhGia_seq    SEQUENCE     �   CREATE SEQUENCE public."danhGia_idDanhGia_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."danhGia_idDanhGia_seq";
       public          postgres    false    219            �           0    0    danhGia_idDanhGia_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."danhGia_idDanhGia_seq" OWNED BY public."danhGia"."idDanhGia";
          public          postgres    false    220            �            1259    25640 
   danhmuc_dd    TABLE     �   CREATE TABLE public.danhmuc_dd (
    "idDanhMucDD" bigint NOT NULL,
    "idDanhMuc" bigint,
    "idDiaDiem" bigint,
    status integer DEFAULT 1
);
    DROP TABLE public.danhmuc_dd;
       public         heap    postgres    false            �            1259    25644    danhmuc_dd_idDanhMucDD_seq    SEQUENCE     �   CREATE SEQUENCE public."danhmuc_dd_idDanhMucDD_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."danhmuc_dd_idDanhMucDD_seq";
       public          postgres    false    221            �           0    0    danhmuc_dd_idDanhMucDD_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."danhmuc_dd_idDanhMucDD_seq" OWNED BY public.danhmuc_dd."idDanhMucDD";
          public          postgres    false    222            �            1259    25645    hinhAnh    TABLE     �   CREATE TABLE public."hinhAnh" (
    "idHinhAnh" bigint NOT NULL,
    uri text,
    status integer DEFAULT 1,
    "idTinTuc" bigint,
    "idDiaDiem" bigint
);
    DROP TABLE public."hinhAnh";
       public         heap    postgres    false            �            1259    25651    hinhAnhDiaDiem_idHinhAnh_seq    SEQUENCE     �   CREATE SEQUENCE public."hinhAnhDiaDiem_idHinhAnh_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."hinhAnhDiaDiem_idHinhAnh_seq";
       public          postgres    false    223            �           0    0    hinhAnhDiaDiem_idHinhAnh_seq    SEQUENCE OWNED BY     \   ALTER SEQUENCE public."hinhAnhDiaDiem_idHinhAnh_seq" OWNED BY public."hinhAnh"."idHinhAnh";
          public          postgres    false    224            �            1259    25652 	   quanHuyen    TABLE     �   CREATE TABLE public."quanHuyen" (
    "idQuanHuyen" bigint NOT NULL,
    "tenQuanHuyen" character varying,
    status integer
);
    DROP TABLE public."quanHuyen";
       public         heap    postgres    false            �            1259    25657    quanHuyen_idQuanHuyen_seq    SEQUENCE     �   CREATE SEQUENCE public."quanHuyen_idQuanHuyen_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."quanHuyen_idQuanHuyen_seq";
       public          postgres    false    225            �           0    0    quanHuyen_idQuanHuyen_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."quanHuyen_idQuanHuyen_seq" OWNED BY public."quanHuyen"."idQuanHuyen";
          public          postgres    false    226            �            1259    25658    tinTuc    TABLE     �  CREATE TABLE public."tinTuc" (
    "idTinTuc" bigint NOT NULL,
    "tieuDe" character varying,
    "tieuDeCon" character varying,
    "hinhAnh" text,
    "moTaNgan" character varying,
    "chiTiet" text,
    "ngayDang" character varying,
    "userId" bigint,
    lat numeric,
    long numeric,
    geom public.geometry,
    status integer DEFAULT 1,
    "soSaoTrungBinh" numeric DEFAULT 0.0,
    "diaChi" character varying,
    "luotXem" bigint,
    type character varying
);
    DROP TABLE public."tinTuc";
       public         heap    postgres    false    2    2    2    2    2    2    2    2            �            1259    25665    tinTuc_idTinTuc_seq    SEQUENCE     ~   CREATE SEQUENCE public."tinTuc_idTinTuc_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."tinTuc_idTinTuc_seq";
       public          postgres    false    227            �           0    0    tinTuc_idTinTuc_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."tinTuc_idTinTuc_seq" OWNED BY public."tinTuc"."idTinTuc";
          public          postgres    false    228            �            1259    25666    tour    TABLE     V  CREATE TABLE public.tour (
    "idTour" bigint NOT NULL,
    "tenTour" character varying,
    "chiPhi" character varying,
    "ngayBatDau" character varying,
    "ngayKetThuc" character varying,
    "khoangCach" numeric,
    "soDiaDiem" integer,
    status integer DEFAULT 1,
    "userId" bigint,
    "soNgay" bigint,
    "luotXem" bigint
);
    DROP TABLE public.tour;
       public         heap    postgres    false            �            1259    25672    tour_dd    TABLE     �   CREATE TABLE public.tour_dd (
    "idTour" bigint,
    "idDiaDiem" bigint,
    ngay integer,
    "khoangCach" character varying,
    "thoiGianDiChuyen" character varying,
    "idTourDD" bigint NOT NULL,
    "thuTu" integer
);
    DROP TABLE public.tour_dd;
       public         heap    postgres    false            �            1259    25677    tour_dd_idTourDD_seq    SEQUENCE        CREATE SEQUENCE public."tour_dd_idTourDD_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."tour_dd_idTourDD_seq";
       public          postgres    false    230            �           0    0    tour_dd_idTourDD_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."tour_dd_idTourDD_seq" OWNED BY public.tour_dd."idTourDD";
          public          postgres    false    231            �            1259    25678    tour_idTour_seq    SEQUENCE     z   CREATE SEQUENCE public."tour_idTour_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."tour_idTour_seq";
       public          postgres    false    229            �           0    0    tour_idTour_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."tour_idTour_seq" OWNED BY public.tour."idTour";
          public          postgres    false    232            �            1259    25679    users    TABLE     4  CREATE TABLE public.users (
    id bigint NOT NULL,
    "userName" character varying,
    password text,
    email character varying,
    role character varying,
    sdt character varying,
    "firstName" character varying,
    "lastName" character varying,
    status integer DEFAULT 1,
    address text
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    25685    users_id_seq    SEQUENCE     u   CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    233            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    234                        2604    25686    danhGia idDanhGia    DEFAULT     |   ALTER TABLE ONLY public."danhGia" ALTER COLUMN "idDanhGia" SET DEFAULT nextval('public."danhGia_idDanhGia_seq"'::regclass);
 D   ALTER TABLE public."danhGia" ALTER COLUMN "idDanhGia" DROP DEFAULT;
       public          postgres    false    220    219            �           2604    25687    danhMucDiaDiem idDanhMucDiaDiem    DEFAULT     �   ALTER TABLE ONLY public."danhMucDiaDiem" ALTER COLUMN "idDanhMucDiaDiem" SET DEFAULT nextval('public."DanhMucDiaDiem_idDanhMucDiaDiem_seq"'::regclass);
 R   ALTER TABLE public."danhMucDiaDiem" ALTER COLUMN "idDanhMucDiaDiem" DROP DEFAULT;
       public          postgres    false    216    215                       2604    25688    danhmuc_dd idDanhMucDD    DEFAULT     �   ALTER TABLE ONLY public.danhmuc_dd ALTER COLUMN "idDanhMucDD" SET DEFAULT nextval('public."danhmuc_dd_idDanhMucDD_seq"'::regclass);
 G   ALTER TABLE public.danhmuc_dd ALTER COLUMN "idDanhMucDD" DROP DEFAULT;
       public          postgres    false    222    221            �           2604    25689    diaDiem idDiaDiem    DEFAULT     |   ALTER TABLE ONLY public."diaDiem" ALTER COLUMN "idDiaDiem" SET DEFAULT nextval('public."DiaDiem_idDiaDiem_seq"'::regclass);
 D   ALTER TABLE public."diaDiem" ALTER COLUMN "idDiaDiem" DROP DEFAULT;
       public          postgres    false    218    217                       2604    25690    hinhAnh idHinhAnh    DEFAULT     �   ALTER TABLE ONLY public."hinhAnh" ALTER COLUMN "idHinhAnh" SET DEFAULT nextval('public."hinhAnhDiaDiem_idHinhAnh_seq"'::regclass);
 D   ALTER TABLE public."hinhAnh" ALTER COLUMN "idHinhAnh" DROP DEFAULT;
       public          postgres    false    224    223                       2604    25691    quanHuyen idQuanHuyen    DEFAULT     �   ALTER TABLE ONLY public."quanHuyen" ALTER COLUMN "idQuanHuyen" SET DEFAULT nextval('public."quanHuyen_idQuanHuyen_seq"'::regclass);
 H   ALTER TABLE public."quanHuyen" ALTER COLUMN "idQuanHuyen" DROP DEFAULT;
       public          postgres    false    226    225                       2604    25692    tinTuc idTinTuc    DEFAULT     x   ALTER TABLE ONLY public."tinTuc" ALTER COLUMN "idTinTuc" SET DEFAULT nextval('public."tinTuc_idTinTuc_seq"'::regclass);
 B   ALTER TABLE public."tinTuc" ALTER COLUMN "idTinTuc" DROP DEFAULT;
       public          postgres    false    228    227            
           2604    25693    tour idTour    DEFAULT     n   ALTER TABLE ONLY public.tour ALTER COLUMN "idTour" SET DEFAULT nextval('public."tour_idTour_seq"'::regclass);
 <   ALTER TABLE public.tour ALTER COLUMN "idTour" DROP DEFAULT;
       public          postgres    false    232    229                       2604    25694    tour_dd idTourDD    DEFAULT     x   ALTER TABLE ONLY public.tour_dd ALTER COLUMN "idTourDD" SET DEFAULT nextval('public."tour_dd_idTourDD_seq"'::regclass);
 A   ALTER TABLE public.tour_dd ALTER COLUMN "idTourDD" DROP DEFAULT;
       public          postgres    false    231    230                       2604    25695    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    234    233            �          0    25634    danhGia 
   TABLE DATA           �   COPY public."danhGia" ("idDanhGia", "userId", "soSao", "noiDung", "thoiGianDanhGia", "idDiaDiem", "idTinTuc", "idTour") FROM stdin;
    public          postgres    false    219   }[       �          0    25618    danhMucDiaDiem 
   TABLE DATA           `   COPY public."danhMucDiaDiem" ("idDanhMucDiaDiem", "tenDanhMuc", status, "parentId") FROM stdin;
    public          postgres    false    215   �[       �          0    25640 
   danhmuc_dd 
   TABLE DATA           U   COPY public.danhmuc_dd ("idDanhMucDD", "idDanhMuc", "idDiaDiem", status) FROM stdin;
    public          postgres    false    221   �\       �          0    25626    diaDiem 
   TABLE DATA             COPY public."diaDiem" ("idDiaDiem", "tenDiaDiem", "diaChi", "moTa", "hinhAnh", "uriVideo", "uriBaiViet", "idQuanHuyen", lat, long, "soSaoTrungBinh", geom, status, "emailLienHe", "sdtLienHe", "gioMoCua", "gioDongCua", "thoiGianGhe", "luotXem", "idDanhMuc", "giaVe") FROM stdin;
    public          postgres    false    217   �\       �          0    25645    hinhAnh 
   TABLE DATA           V   COPY public."hinhAnh" ("idHinhAnh", uri, status, "idTinTuc", "idDiaDiem") FROM stdin;
    public          postgres    false    223   \�       �          0    25652 	   quanHuyen 
   TABLE DATA           L   COPY public."quanHuyen" ("idQuanHuyen", "tenQuanHuyen", status) FROM stdin;
    public          postgres    false    225   y�       �          0    24897    spatial_ref_sys 
   TABLE DATA           X   COPY public.spatial_ref_sys (srid, auth_name, auth_srid, srtext, proj4text) FROM stdin;
    public          postgres    false    211   �       �          0    25658    tinTuc 
   TABLE DATA           �   COPY public."tinTuc" ("idTinTuc", "tieuDe", "tieuDeCon", "hinhAnh", "moTaNgan", "chiTiet", "ngayDang", "userId", lat, long, geom, status, "soSaoTrungBinh", "diaChi", "luotXem", type) FROM stdin;
    public          postgres    false    227   <�       �          0    25666    tour 
   TABLE DATA           �   COPY public.tour ("idTour", "tenTour", "chiPhi", "ngayBatDau", "ngayKetThuc", "khoangCach", "soDiaDiem", status, "userId", "soNgay", "luotXem") FROM stdin;
    public          postgres    false    229   :�       �          0    25672    tour_dd 
   TABLE DATA           u   COPY public.tour_dd ("idTour", "idDiaDiem", ngay, "khoangCach", "thoiGianDiChuyen", "idTourDD", "thuTu") FROM stdin;
    public          postgres    false    230   a�       �          0    25679    users 
   TABLE DATA           u   COPY public.users (id, "userName", password, email, role, sdt, "firstName", "lastName", status, address) FROM stdin;
    public          postgres    false    233   ~�       �           0    0 #   DanhMucDiaDiem_idDanhMucDiaDiem_seq    SEQUENCE SET     T   SELECT pg_catalog.setval('public."DanhMucDiaDiem_idDanhMucDiaDiem_seq"', 17, true);
          public          postgres    false    216            �           0    0    DiaDiem_idDiaDiem_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."DiaDiem_idDiaDiem_seq"', 44, true);
          public          postgres    false    218            �           0    0    danhGia_idDanhGia_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."danhGia_idDanhGia_seq"', 3, true);
          public          postgres    false    220            �           0    0    danhmuc_dd_idDanhMucDD_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."danhmuc_dd_idDanhMucDD_seq"', 1, false);
          public          postgres    false    222            �           0    0    hinhAnhDiaDiem_idHinhAnh_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."hinhAnhDiaDiem_idHinhAnh_seq"', 1, false);
          public          postgres    false    224            �           0    0    quanHuyen_idQuanHuyen_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."quanHuyen_idQuanHuyen_seq"', 2, true);
          public          postgres    false    226            �           0    0    tinTuc_idTinTuc_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."tinTuc_idTinTuc_seq"', 14, true);
          public          postgres    false    228            �           0    0    tour_dd_idTourDD_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."tour_dd_idTourDD_seq"', 1, false);
          public          postgres    false    231            �           0    0    tour_idTour_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."tour_idTour_seq"', 1, true);
          public          postgres    false    232            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 1, true);
          public          postgres    false    234                       2606    25697 "   danhMucDiaDiem DanhMucDiaDiem_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public."danhMucDiaDiem"
    ADD CONSTRAINT "DanhMucDiaDiem_pkey" PRIMARY KEY ("idDanhMucDiaDiem");
 P   ALTER TABLE ONLY public."danhMucDiaDiem" DROP CONSTRAINT "DanhMucDiaDiem_pkey";
       public            postgres    false    215                       2606    25699    diaDiem DiaDiem_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public."diaDiem"
    ADD CONSTRAINT "DiaDiem_pkey" PRIMARY KEY ("idDiaDiem");
 B   ALTER TABLE ONLY public."diaDiem" DROP CONSTRAINT "DiaDiem_pkey";
       public            postgres    false    217                       2606    25701    danhGia danhGia_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public."danhGia"
    ADD CONSTRAINT "danhGia_pkey" PRIMARY KEY ("idDanhGia");
 B   ALTER TABLE ONLY public."danhGia" DROP CONSTRAINT "danhGia_pkey";
       public            postgres    false    219                       2606    25703    danhmuc_dd danhmuc_dd_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.danhmuc_dd
    ADD CONSTRAINT danhmuc_dd_pkey PRIMARY KEY ("idDanhMucDD");
 D   ALTER TABLE ONLY public.danhmuc_dd DROP CONSTRAINT danhmuc_dd_pkey;
       public            postgres    false    221                       2606    25705    hinhAnh hinhAnhDiaDiem_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."hinhAnh"
    ADD CONSTRAINT "hinhAnhDiaDiem_pkey" PRIMARY KEY ("idHinhAnh");
 I   ALTER TABLE ONLY public."hinhAnh" DROP CONSTRAINT "hinhAnhDiaDiem_pkey";
       public            postgres    false    223                       2606    25707    quanHuyen quanHuyen_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public."quanHuyen"
    ADD CONSTRAINT "quanHuyen_pkey" PRIMARY KEY ("idQuanHuyen");
 F   ALTER TABLE ONLY public."quanHuyen" DROP CONSTRAINT "quanHuyen_pkey";
       public            postgres    false    225                       2606    25709    tinTuc tinTuc_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."tinTuc"
    ADD CONSTRAINT "tinTuc_pkey" PRIMARY KEY ("idTinTuc");
 @   ALTER TABLE ONLY public."tinTuc" DROP CONSTRAINT "tinTuc_pkey";
       public            postgres    false    227            !           2606    25711    tour_dd tour_dd_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.tour_dd
    ADD CONSTRAINT tour_dd_pkey PRIMARY KEY ("idTourDD");
 >   ALTER TABLE ONLY public.tour_dd DROP CONSTRAINT tour_dd_pkey;
       public            postgres    false    230                       2606    25713    tour tour_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.tour
    ADD CONSTRAINT tour_pkey PRIMARY KEY ("idTour");
 8   ALTER TABLE ONLY public.tour DROP CONSTRAINT tour_pkey;
       public            postgres    false    229            #           2606    25715    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    233            �   4   x�3�4�4�,NLII,�ŜFF���FF�@ �2�Ɯi�)���� -�I      �     x�M��N�0E��x? ��4-+b,X��M�ڤs�X��X`@��=08��Ox��6��{�����P��~�b��Vo<�qBF,�C��aR�9F+���U	F����9\����t�5<��6��7�K�޽Bt���uW7xn�{R7��K�O��`d~��=O�jr8���)
�=ţ�Z[�EA�x?۳�-3o	.d*<t�n�)\��Y�akz�!�ٰ��9��gui5��B85�7Ҫ�gm�����aaY;UȮ�c��	�/      �      x������ � �      �      x��}ko׹�g�WL>$h!R�o�0zx�ͺ۲d��&�"�9CI���`#(��1��"��i�l�{�Hg#�������众�f֐TtqzNzЦ�)�3������eL-7C�o?��ï������J�'����3ԦK��}���_+�;���<?{�Һ���t~�1\c��+�V�f.߬7��o�/���Xk�����ӿ��ɩ�U��~�Mx�p~�Y��Ck�g_�Z���3���C��k_�~z��?�؃;��?rSt��`p~�_>4�+_k�}�о{��>u����7�c�|�[�}_��ݔ���9�Ї�j-����	?ެ?9NAN�v�����M(�ˋ@s��~7��5:�O<���gok���	�Cn6�w�����t��i~M�!����'�F�kx�OB9\G�g��Zu�Ө�Go�m�u�f�#�A��c@S4�c� F��I�ꝟ>�E���~�t`���~��m?5��N4�O��O\���_�n8|�S?�a�1:=�~|z<�K��>-�������I�F����c7pV`��g_�@�a��"��pb{pʆO����)��3���+Ņ�N��6;x�3��~�z�[�����������3����0��@�n_8'.SǙі��lk�tڰ�
�o-ĕ�.|W]��\MЇ���a���M���S_>�i�|vu~l��m�J�/h�����?CO`8\�{��D���A�}ċ��X�!��}Wk;r.�f�#WY�s�m���[���z�sf��3�g�n������V������6gſ��z�6�F�`�쌥�guѽ�;a�T���m��BzY���{�J����ڽ�ҝZt�nӫ���}�E3n�o��4̨|~����t���M'�ҧaԘ�f�nMS�3ozƚ�_39��y{J�ѧt�����\�^�B�2�Lݞ��e��^���|ޚ�A�L���v�\��빷t�+���GM><<�it:�V��ۯ;=����[���~��FQ�.�%�oLo�o�Jo+�%zY|�h��+}�N�T۷���|sP��2����Gw�jX�����V{{���d����v����R�T,��y��6�{-�{��X�Vw�����\���y�qg�\,n�K��z�����-��m������ҽU�X:,.6�����⃥Rqky�j7���_�V���ʮ촂y���}&�ny�ƛu�Y\j<�-v��;��^g#��|;[�Y���
���*d�o�Z�oe��X�����B!C��s�0�,�c]׶�*�ھfNm5��6�"i�2���t��|J���{���K����dV�'AR2^��.=BqH�%�"����t��o2���?W�N	�N�@̍�B
6����	UΞ� �������!����x�>��z��Y�H�p��Ǉ��F����N�H�Y�$� �T�iw.v�E����:D̏�;�a���o��/	�O�W�$�RL:Z^Y]kV�VmĤ����|xp�:l��5�znn|�|�> U� �8&�Bx:��`�:n��9�Q��4N7
�iFƲ�B.�C�b�22ٌY`вt��f. ��\6_.�s�y-�T�
|\��%AKG�2��2�KA�� ���O�?r��V����A�a�'#�D��s�}��k{7D��]�-��c��c�`ʖ�� ��K�Fq���\|����-���R%	u��b��Zqu~v7��*�v�q3x;j �=�Պ��c��Fna�,�׀�,"�*��_�fM*���2l������ 
�����m�;*�7�Hvѭ�'�0�i}��Pq��@hO���+�s[�|C�#�"��1%�ɵ᧾�� ��}8#���
�]���"�c"+�!(*�LP�6�*�]e >� ���$%z��<� �͆���r�����HW�'A�/&��Q�t
��m��E�U��TE���L)pΊ��H���9<�U���P��� <m�T=	�M��3=_ѫ�a���]ݦ`�RH�dL��h(�o�St�����pL�N�jN@���T��*�3�"=�K� �a����;(=�be���ޝ���C}7�Dڠ��ξC`;��Ў�4�W����������g�N��8>��0���i�M=��`��� �F&g�.��L�(�vy.[A����d��B�`�7�k�Y�F0`1��F�~#o����s��������:���V{��f��2X�x��=�F�����;�ϕ���!�Wj�痿Ζ��Gs��f~��.�4���Nq�X��)�{%"�ݥRik.\-�Gm�/���1����=^�_��=��Z57*�z�+;G(��rn����X0A2X	���*����<� �Z�7�w���R ��a"��;n��ï=��}���C�c{�T(�@��&��>}%�%M�)�W�1W"�E����m�{c�1����/�Y : �N�jSR4����%�	|ϋa��}�v�S��/�.<�����*�wo�g4D�W����P��������b�����G%}��->��r�6C'}_8��~���}�t��M��U��PC������l�J�\��s&BT~>W���J)�ޭ_�w�	1Jg�� �mփ��?������(�r�z�n�ѽ1P��[��P�2	�b��*����KGE��������^�V��.@O�fd� Q`g����N&��|P\�:�ؙQ2���ff�<%�Uǜ�-��+i�f{�!���^�r��H��/�}�w��|�d�(�CLs�
6eK8C�O��hW�e
�!��3��Bo�Ť�'�g��P�b�>"J.b�A�1�_;����bS)v�Y�����D���Z������K��y�����T\{@���%Þ�U3�[{�J�:@չ�OwA-�A-��?�����M3��a�v^�1v�L.�� ;L�R��y��3���*���7�+ߘ� �ȾQ҅�Y������蹏{�J:�NW5�6�o�-��cXr�G�Ź2�q����*oVZ�f�]~4��[,�Eh��i���������ʣ�kb���R�8Z\{zzC?�����d���	L1ͩ4��~��Ӗ��^j���&���4���"�D���s�JIkBmawwC�>� �DF�&yLė,�w��S��@��H��v��PÝ�4��nu�� ���&4�4`���v#I
b�~�����-�;!20@�;�_�	�Ds] aO�d�T�<�[N�U���8P�<�K�=޵�������R�$|��"�k��Jw�/������»�eA�"�V8��i$P�IԎ�n�<R�h]h_:�vˋ�l@*fm0#_��ig���#�2���$hۓ��P/Max���34}�w���o��4vV��ـF���	2Sc�x�C5�WZ:�5����g�	JK�����)uX����4��D�e�.*�'ݎ'��l!&7�&t�q#ES�؎����Li[$�ؒ��a)��_�5��EX���`o��f�����MBK�~_*�6��y�Ahk>:�x��=N]a9?����� %\W��H&�'Mƈ���Z���D#mܨ�|�����ܛo�
��mPT*�
�[b�ȵ���s��pg|.�a�ٯ:�W���-��M�wۖG��r��i�����z;�<P.Fz��_}̃��?H�k]�{�3<�.?�MƬ@؂h��)H��sɥx�B��I;RA��ľ �E�钐��_�\�x�>��<=���D���xAG`�;8R�^R���0JS@G��Lְ��B�UO7A�?N���y��]o�k����C�)��RP�o�{v�5�.�:4�w\�)� qst�H�4�K���0�V�̛�LA��?�Nt��+Z9ݪ��B.3WVbd+��(6��#VR[��h����cJ/ضag��9eꦕ�i�V_^�YV��<3ݔl��M/��%kz�i�ڏov�+�X���+�X�)w��54�W����u������;�?�+�ˊ��}� }��\���Q*.�N�T6k�{lX��N���!0�Qv���Ʃ��{��n����j�Z���T���=�^{-��v��-�w    t��Rc�����B;1�$:�hU��x#f{��>�H~���U6�a�Y��ukA��!�|>�&7�v��%��E�:i*��*�Ed:�Ǽ�Ѩ���2��0^BR��q��#�>ViQ��0dwS�D�,�KM-v�L0���)Pi�'�H���!�ud�Z����Xv�g&"_t���I�N%����[�{ܫ�����؎�&y�h F}$�#�OıA�.����ذ����h$Om�l�&z#�"�3��hx~gDr ��=��h�sW�m���XEʝ��_��3'8M3��D��U������X�/���K�Rn��pjT�}
��f���#^b�˓��,�c��y�td�4% �Fג����c��J>�|��g�%���\�i��]����q�\����L:��^!*>��n��O��F>���[��e��|�6Ky�<Wl%'�mۥ�m���MZ�qa�["9V�ޒ���;}W��O���N��H��@7��U��2�Z���#��]�KQTΏ%5#k�Jqn~vW6���&�8����hm<���ױ�Qkc��\c���s���1��/�4#:�� �����kY�gRV���(����X�'���G�A1������@D���V�X���8�Q8�8�:`��U󨢱c�oa��Vo�"U�iW1�����&��r�.�A���݅��>q��\�9d��~h��/�AB�"�B�j+��t�P�
k�(T`OF��Yz.wN�ʹ2((�ltt���ln����n�l�P�Z8ݒ���6�#@Y~��~���C]�!rixwo&�^��+!�%���_܁�����*�*��P��55�P=�\�)��{WG��=edd�`Z���W���jt�ۯ�g�l'h�k��K��r+f���F�5�����"@�N��d�!�1qRl�@�cx�&t1�}@? ivи7E$�Ҝ[0�� ��{B��/)����{��	p��<�H|�X�rq_ӕ>�������X����d��~��%������hMD� n5���C���w����;Ē���'��S��_�h�p7"����#9���Da��&���)K��(�W����<��D�d�Y���$�߁Rf�<7)�ti����0%�W"�K�-�Q���H�b��a_���mmU�S�͒x�'�\^�v%T?4[?��T[k�-MLB���ά`$B���m�u~��0a/�hzE���q�z!k!b�_�_�2Rh�y���	�Z�G�A������������4��p�ٗ/�q$����$d���^4��]h�{�h�s|�p�h�!lo�j���G���i�'�֍�T���l����,�B�$?F��Ϧ��e�ql���W��y:r��EG!� 5�����4e�D���B�M����4���!��)�!���fM۲3v� �5��W��Fp�lD1K��r����Gi����]\�C"���k��ŠqǊ����q�	{�$��Wf/i@�� � L7�Yݎ/��tٱԊ~���7��7���r%�MN��s�j�ق7�=�_�LV�ւ����d'KiN�Q�7�jl�a[���x�Q�J۞W�)�U���F�C>ѹ�k�v�>�⚋��%4tV��17���JL`O���ߑ; n$������tƮ��F����t]���D��E؋薊�"�l5����Kx.h^l�Q<������z!<-��j�uE�7m�ގ�G�a�M����A	�%c)�Yu<�������� ����L$ 2%� ��K2q�U��0�T� �kv�>�h��iWi�wO"�o@P�w#_I����dr��~�C��7]T)��	�-l�k�� �M~
/!��b�n�3
�|+]܊4560Ma�|G���m���^�moBw0�哐���!R',�!"�,Sb�~�#���:��pa���(,�y��f���>u�O�h�`$����o\!��'�Z��ĀN�����C���pҺRW��I0�������s�b�@�����Hj�كY��F}�`8���]lN�F�ɄÐ-�dd� ��	
��hD� ��8��[dH'6���^�&�G5������	�O.��^r�B�)d���m2~�Nt<AG���ć&4 j��
�MC���c�L��)������XkBEE�SYô	���8�p��9'�d��ǋ4+z�I�rZ���)K�J�E(Y�aV�8�,rWK��X(�>�oG	�hM����0� �&:�'�%.�dԤh�%���720�g�[f���oh����P|Ƀ�.ٸ>�G7�>,�t��X�<x#1}
��6-27�gK���}ěD_���=�Z���x�'1�-_���JR,a������G�L��*�D���)�۾�F6 �y�؄
�wͨ������0��0PH��C�<2�������cQeD���C���^�ϟ�����:����$z��t�=XW{.�8�0�=�2{�:��M��������Bq����`<Z���W_�g��̡��u�R��5f�٘��)tϧU��D�`���4u�7-�:�s�D{�Ѱ�XvD��Ν�����۸*9��i�H��/��~�]�?������Q�y�8<���EYi���u<V�z:��Fos�Jr�i�����Sm����E U��{�a����
�I�����p�?ЮE_�����˺���[U]�⥰�P���-z�_�,w���Tm�"�˳�	SL(|��&t���L��� N[:`߬@Bh�o�'Q����&<��wa�p��O���W=j)�dQ���5�6�o��,r�涸( ��)Q`C:X$�o�Õ&��'�;ģ���%�ۺb ���%�8�C..����(��Qr�d��3�[�\��~����\h�������#�_?������_f]�:��h� n���H� �f��{ݲ���y#[k�e�̔rvɬ��h��ȗ�|.k�7v� �0k`�ʿoZ|,�$,J���M6`,�{9_8V��`dM\Z�a�͟{q!�t����w6�bm~z��m{K�y@Ϲ�j�z�NUt�}d��o�V�����Cg~,!�0�V��!׉��)�xp1F����t�����j"�M��FK栟@����**:G˄��+��c �5���>���D��)��+_M�����Ҋ���dX�H�k/����C�07F�n|�R� ?O�2�&VR�tG�+#��!�E��7e��x�z��g!�Yl[��&�j�f$1�>��ݥ��AﰹC�����}����t�{��	�p�6�l�3�&v���N/pZ��0j��7�N�~��c�Ճ7Þת�:t�oXŮ4�Y�G˫���1��y����l��xX"� Qט���C���`gkpO��o�NE�l���g��c����ڙ��m#k����id����\��'���L��/���H�mĬ6̥0�h9����0y�HTr'���?_���|��CcV����]9\)zӾ�{mĻ=}y�l"��B�箑4�Ţ7	��b7Ó.�d�㻈	'S�k��E�ɗ_!�v<)TF5�mve�o�<~����dL�{�~Ц�9���BJ�j"o8�����j�Z�o��E�CT���4���l�pY��D[ǂ@E�吜�#г�mxqDP��,QOD����ًWS�R���@7�����E���B�`њ�r�6����*�s�.z� }i̹H�zM!�r�΄�A� p��	3�\>o]�$��[%�de2y@Q�1r�J%W�+��P#��b���*��.rb�߸�Π��
%���r;sT1'¹�c��������v�gwiM����e͛a�%�:���c�\0��W�2��,�O�8����Z��
�Ng��⚆�g/9uD�m#�<�hNZ��=RZ�)>>��OI� ��� ć*��v�B��̥���
�T�ƜE�1|�n���N?�-bߟHh�7�x3�*֠�|� �\Ԩ��
�mD#%����ɟ�    ;ȓ��Oq,I��mq�Tg�d�wIW�A�)|_P	��"@}�lb�/}ѷ�A+}�1�>gD�'/����P�B��"��$Y���HJ��fB#��Xf>�tQ�mw��0C�qZF!��rU�¢\M�YPC�颮4��i�Y3cضe�v�`�?�mϴ� js0��A�Af�ލ?@pF5D�4^�G�?v���9k���K�..vV?Y�<��>��0��Y��w�M2�L�#Q�(jI.�588Mxtȍ�R���7R��o\Y[��9��+բI�t��>�K���uG댗?s�����o�1j�,dQ�;��K�ܻ�����֋��(R�r��T�JT�S��-��D��D��iʲ���d���X��p���B>c�
���w
�O�2�;���O},�
t㡄o�6.��nʑ�����qa2T�V��Wc3E�av�;���7�[4i��$9$)Z�3va�jMr�`�)�巔��P���*�J�! ��T;A�	����y[�����Q����x���|F{,�����!��©��!�$�XB����>�״a�y�ʏ��39]ϛ��^ӆ%J;-4;}/pzN{��3%T�E4���f7z��U�~��_Tg�E9�t�Ԇ�Ar��rX+E�p�@}�T�EX�H�d���3�!+���}>�A��KX��㰝I���
�l6u+��T��D�ʋ*:�1h�O�����F�8�GPQ"�$H�LǓl���CT�� �v�����gu�
5�3�������G��f1XEEni�qg��4�z�uݹCE�ԑ7�JC5�VL���\F(m9�[��\
�0�J�����T�9_)fL=�+nnȊK7�C5YA{�ߨ���Ǐ��K��Z��x���[^��#���Ҷ�.�Tn�Uw�R���,�p�4����ʺC�ə��\Ǌ�2�`ef� ���KW[o�|�?h���l�����ƕ�9)H�n�X�ک~!�L��aZ%��U��2�
��+��,��0{2|�8�Mކ�TvQ�~�H�����.Ǻ����NO(|PD�IY5�� (���"�?�P��KE�]ٲ-*#"=x��j6��j�{G�o١�u�ݜ��]d�W�rW��n�NK��%T�6������}�η�xE���GA�<u�J]:lkS&_f~$�7�|�)��k�K�ݼ܎���x��O��	�z\�F�Hr�(#p�k,Ka�>w�U�b���f��_*��h�Ӣ��Qξ�
#MHQ�Z{f��m��W?e9��8 �^���z�	�J����RL<1 �<;x��8�4�cr��oc��$K��B6VvR��
��&�+I�Sde�Q�FsYb)��<|V'(b���@��`��$�,�}�t�b�����D�E�7%:�s�Oaه)�"wG�P���$*�r�‏��q]��V���ti�jgB*�ԓ�K�F����C#Բ<j�cP�;P=�B"�g�*��=����L�m1�QEg�����R��=.�%��Ʈ�N�)!9;����-22:I��K���������������\s����y7[��������������u,JG��'�|a�}(S�x��V�W�66�IA�������B�_���7oĝ�Źƃ�����B���q��n_'Kc$T��N�Y7���v��a��v��a��v��װ�"[E��	s��y\{
K�.~
�4f �ߘ+_�h9R9v�����)��`�Tl#>w��˄�~��ǇI2�QI��d�.?���z�N�G���NĦz�C�d�{P�0���J�l����Pxn���Hu>r�ʕ��U���-#�����R���D9����Y^j�l�p}��at�b#��+Y}B�b���8a�J.���g;�$9��o������#��c�.^%����N��w�'lY�*
p3��D��pY��i�gT�%3�Ƒu�5�K^�b5%����Q�J=�I�!%�_�o�u:�@�%�ƿ�"d�A�$;H�Hɷ�ı���o���eW1�6�/�	�S�IQ�i�j�ϜH���/��)�̰eV�&�N��f!k��䲗�L��Ń�J�\5C: Sj����;G���J�k&4��Ӂۑv4�ɜ��p��q�Yv���N��6�+P�2�L6�w�a7�-*�?��[��#h:
XFy��uj���"��q��=�fq����7iȅzR�V2�Zɬ�U�XOڱ������I��|u��{��\�7֓lkjr������A��N-���բ�EiSK8�&���)�1�;��p��7�^L}�-��&�A2w���'�q�J�A!l���Ht�Bc.�AIk+�_�Z][qu��Ы�ꉊ1��=C�x����\�2����6ב��~����Q�$	�����v�`t������
��8ڔ�1�Y|��GzSHl�f@X�|旽�9M��2��j�����"��<�2�#1�$��HJ�'CBّ�&OJ���mTbM�-J���H��f�Z������r�jK�s��6i����u=��h���o&���~ ��K	��#�lE� ziq	�(x-�D�J��u�䀮�p`��v|�f&��N@�W����a���PgOpb��*K��)Q�N9����T=�\��8�mR�����%rV���I�A���zN�*��v�@wa��C' �4��0}�Ko�jF'�=�6���2�?���R�03�ګʧ�u7�PPk��-�nM�4�|z��n;���r���Ucbg�E	[=��(a`)z>�2r���έ׭��]��v^g^7���e8��T��̪Q{K?23N֪�̬�0c8��z�m�n�������]��獼w���0��c}=�W�E�ukॷ��Q�;����"U]*1�O�!���fyHu�I�����r�S#�^�����Y�~\p�����ƫ�	@�
�b313F�?D9�1�����%˞��6]���N
��ifF̢����~�YbUd����RoVu�!&���.D���Ϣ��b�0�L��a��A��)�H5���B�Ҕ�)�p�kt,:��2��)�QE�&��1ΙC�@�Ȭd�a�	��E��ik�u&eQ��c���E�t�
+U�L4π@����f{r���a�`��ݎ�o���),n�& ����=�I�D_Й2�[�"z�&[1�.L����k]Q��=3��sv>�)9`{etzk}#��G���4
k��V�W']P_����JXu���x�$�<��)b�J�DUD��"���;Xʭ�����u3�Ao�����8<�x��b�(D/o��E��2�t���\CM�]��W\��-����W�nerF._Ț�X���{oW������U}?�T路V��V�\����>ʼal]Ϛo�;aϭ�j����}���D�ܶ��PϮ�ѡ�k�Օr�q~s�x�S�^qn���DG[ƛ�n�N��fYX)y�5e���/�)���\����D���ƥ!��g.�"cU�C5q'`")���H�84-�l;��3�����ʕ����]T3Fc��Ŏ[1��饎�"ی��`j��>�@�`���;�+�b�_a�U�U���d2���]Yq�%rh�Y#�����(]�r)�Oa�6Dw#Se;��s]��d4.�'����I�E��(�yĸ�"�\:g���o�Nl�����s�	�	#%��#ET0k��-WN�s�b2b�\\"�I7�6u�C�9#$��i ���ˈ�߱�_X�A�a�����n����������ѿ9���ad̜���G�^ٜe��D���`���C���=i͚f�$g�c?��e�ژt����L2�B�u"�'�:nW�&�9�ˤ��+�bs(�>2KWM��4'v,������|�)Pʹа�N�I�+��J�{�5�6K}�W=,%c͹�:I�/��mɑ�Ohݧ�M��U\����B�N�:m���^����\�/md&/X�Za)�z��X����ҫ1?�@���t~��G���E�*R_�!EQ�f���z�����J��fx��RT��梩u�g�|"s���9��0���&5��" ?  \���p�$���/+Ҥqy�e]9���l��)ڜ��
��IrrFd{qFz�8J�	��S���ZtP���y��8-��LE�<�p(�=&�i�ґ�?�DT#:oɩ���� �8&_L�K�La�*���p{Q�6U� ����и�`=�>r>��c����@�~|yb�Yô�?�\��b
T�S�cM�����U�	�y�ҫ��ɼ������T2�$�Or���2��4(K0B�p�e�2�J�/5����FhWT7DӟR�;Z�c�J��!�aq�bO�@m�������*Y�z�($ӔՇJ$��) �?G�\��T��%*�"bE{pr�7�;�I[�H(y��ӈ�����0k2������ɑ�DF�IT�{�vo�ٟ?gy��ܠ�4G�� [m�NG��t�0/XA�$�D��6I�` �����B��m���?a �'�ȡS��S�JC�B���B�F
0'�)��� ��vO��1��O�����۴E�p|�䦗�$t���;�Olo�!ɫ�mb:��[b ��J�%O������8<�6E��:��.�	�(�#���"�\)T�s��Aő��2F���T	�
}���>LO���^84����40�8ė����ԕw1Y`��W�� �Bm2e���@�E�^t���<I�h�doc��y�$	Rnh��l#��� �A�f���!g���Sf��1u��6)U��)y�0k���j��I��q�= t��FR���I��7�,%�j8��B�f4٫��:�(���Fn2@����jD.!�H���ZY��q�6O�</!u��M�<
�$Aۢ��)	XC��ȋ\Hw
��y ���\�+τ}���R<"Xu��-���,_%�){���M���E@��R0��Q�pA�3!#�!��c��ͬ�gd�<�?�����:@�T�����<��e��MV��E�e!]5�f|=�j�{�����)&Br	�[��*(�T�\&��s?:pX��5�~�J�5�&��T��5'��L��HӸ9b�r�gM��@)�GEy|�T�eHP�
�:+5��d��������j2$�ݞ(�O��~��) 6Z���O�̢P��\�@&��R�#��P(���H~Ӊ6��b�$E�q��(I��cY�r�������G�(jmq8WR��D��8Hb��L���]��S�'����������:��Tw§/�S�|٘�)7�{�kA$��_J�$��f�oI�{����7�������P��	����H��xlQ�C.+�٨gV��I�7E�p|���c,}t�9/��$ ��݋4 ;�.X��t����5 S	Թ��u����F�#�?d���U�6Cg*�X�=�o��P�]<YMV�+O�89��.{��Ti�@@X5�HUEuRFj_;j�PV��.\��mfJ=�@��x�{Sn������Y�I��l�~���J�, :1�"*�l�a�Qt�o����jNȱO���FGƩ�\t����M�adi�Vi�XI'Q����a~O�s�'z<;m��Xh*r����D S���"�ԥRn�"��ӌhXXP�!�M�l�����5�ˌ^��a��U��|�N6@�B�yl��T��4�E�2�f���?>�f��a��O~��

v��8V{��̼���^8�A��M�p4:1�VU�y?	�O���
���Ҟv&Xe`Q����Hl��\b�U��Ȫ�')�jr����
) �k6��J��4����0�#��񢔾��v�{ƪ1mN�)�[;�1O����� �)O�	�;���d�ȃ'�DN!&�����ХUC�E�J|�Aċ.� ^l��>r��o�l��V᧼1�Se�d�G?!/Fc��[�+Y��O��G߻�a}�x(^�K'va��:>��.E�� �&-��#dʁ���ܢ���#���}`6-�.Iz,�qϸJۣ��e��D�~�Ƶ\Q �Z{G�t��1���*j���S\�5R#\L�|�s4��#��Ft�U�4"���@�`m�p��H�j"��^�2DYO�c�C&v9i�)��8Z�#g�L�r���L�a�J������_$?�;���݊?Si��h���HY;�"�����I�|��8����	]c���G96��MMޡp�ȤH�
�ȸ�E"�d�@/&+�(��"��7�q��M��pI��/�zԒ�hp���r�2N�θ������G!�yĹ�/�"u��S�I6e�NjGjd`�{��u`�
gL�A>S���Oy�p~��u,/����B�یv�C�Ka�n:l �<�'����Q!��ft|(�V�AJdY���T�6Y~9�n��,�ubl"��p	Ƙ�8|��/�w\Ǵ)K��9<Q���2\�#Q����]��BF�$M95�N'g֮<8���M}����R��йw�uw�\,Ww���N��t[�`Z��7����AZf��:.��M��SPvo�a�F�A����U0�?^�������19�68J�mΤ������qya��!W�E���Y�d�ʷ�J��}�r�e<}�n�W7zYL���/�N!��TYLa��.��e֦��X���Qt.y��Hl�X�����z��Yj%؃�3��!�<zx�\�X���:�ݝ<TN��EAH ��#��\+�,�2հ'<4�E��*!p��$RJ��!�����v�̓eH���r��CO_�g4�U�ᰣc8��d�q�G��;�j���8|T�=
�v�ӫ�ks���s�j�VÛtچi��nk��h�ʶ���|.W*Σ���(��>W����˶r��*9����xr�t���a�A��x;LSz�]�������A�3^����9E��)x��u?��\�ew~~vWw��<zŅ㛝���s����^�*Z�v�v�Z��y,*k��ж�*��y�0'�?!��
�wIp�t�8+}�3A8ʠF,��w����Z9xq��/	�:��`y(�ʃ��IϴUh�Z�j�0�F�;�U��
���n��J��b7�
�ܦ�k��RMZG܉����S�i.��'*�(��@��I(�Myvv����B���;��'�Ed�sdʦT��#�~<�)�~����g�F�`�&�%���5l�Ź���J�㭥A4�t�L���P�����B���(��NřRq��[��?����y���ަ�@��������f[��-��ןs8�Tѝ(

󓩡%�׀߯t�S�ҳ�t7������4�2�J����7�\���S*c����jKud��z�>��']�L f�x��H�a���eT��ۺ�Ƕ@�.9#_�sy̙D�3_����岑ɕn,r*�t@��6��O�0Ip�9x����@��<l�9x�j�J��97}��B'[*6͕k���;���h6�BwݒW\|H���\���z��>D��ԋ�r��Ⱦk�sH��=��4�<��������
��\g}�EjDYl���I]�,�RJ�L�'����N��;v懨�)�M�0m�OP�z����)�;�y룕�؂'��<�I�cE7��j1������X<5�o�U%�D������e�r��sZç�ӯE4�U�S�-����B6S�䞰 dH�o�ԢRY:�6TO9�K�kF���^�:R$I�汓[[�juF��"����:��)!�����1�:hT79c�y�,ta��SJ� �X2�H����R�}�)9{��&
�|����og�V�v'ۊ.�6� s�t�b��q53��d���V_�0�|3���f{����{t���m�a��r'�+�ݫ�{�f]��B��.�4��"e��K��7:�z���-:K9�%L;�5�E�GZ��e��͘��F�r��^�?*��      �      x������ � �      �   �   x�3��8� /C� ���
Nw-LV��<���Ӑˈӣ�����<�#o�KW�x�kq&P�����n��Ë�3/TJ	���d��p�l�Q�y�@S��G��
N���e ���wOZ�rxQP�.vd%�q>w������ o�H�      �      x������ � �      �   �  x��]]oU�NŹ�*��f>�1{E�.]Q��b�{��dyf�{&J�`{!�h�*Tu+�f��-QAB��z1Q���_��Ǚ�8����kϜs����{椵�����Xl��^,��l⋫��H\�M�m�=N_�*qr���lz苝���ؘM��{"	6b+�M^�"��� {��O/�M�0ڏ<�<�5�d�x���d
C�&χ0@�K��n���پϦ_���T|��(�^�f�;��(;�rY0�wf�q b�>[A
3L���]�ā�6�;A�}��f�c�Ϧ�
����Ia����p�mZ��{џM�8ۧ�Nb�
~̦_xb=;�[�� Y2Z����N�6Z�F��~�X�|x��6�|o�m����?�=e���])�V�Vx��#a���������0�/�R�3?��8���.�l4�+�)���J�^J��[��;9�uQ]wB\��Q���$��-�f�#��h�j�kx��}��(���0��܈в�)S_���p�=���e�C���{�`8���[�|���آ�����3S7��q}�Rv0 �n�˸�s�aJ=\G�$�G��bc �������%7b���K�њ /c/�!��,Q����������Aq�`�b�������{����p��*!�����0��P�\���T�k5�/L��[Ľ ��
Gs}�cc\M^D�L��܄�B��	510�곏H	�3��-��.S\�B�W�j��I߽�K�\�/L�wb��&�h/
E�B���.� B\8dS�?�h�
�l�m�iY�\C}�'rJ���P�8�]��zy��[�����ꍳ�V��W+f�s��.���,�X���l�����z���<O�>�Z�,��t�M�mc�v�4�Z^(\�h�"ga?Hh�~mMs��^���R&�V���)堪=i��X��V���e�`s�"{u�>k`�ǜ��������R(�@��E��0�E�&���:F-:)Y�3���Z�T�h�U)K��(
������5�ٯx6�:�wh[A('���Lꎼ�;����Q8��e��������[��M^��߻�Ջ��P"��[Q?�{ʋ�r�I�K��Cm�T�na�e�n������4A �#�sj�6h�(ZE!��Bɢ�H���k�F:�K��,R$-�a���s���� ��Z�S�FS��-q��y�,L����X����"���h���Pi�8:}&��a�6�]K�b%���#�AoK�,�b.���bM.��2p��4!��dVr 9�+��ռa���X�h�zQUe\*�>-HsWὴzC�	C3�T,J�%��5:�Q|l��!�Rm�*f�&˕2��˹'��tvr�0��n*�$-9�2�iw�j��k�r龥KU2��h�j�l��P1-p�7u�M�o��]2�n��o����֭5��N۹���m���Y�����e�m�.�,�\2.��V�`A�A'����E�G�D�|�	��Ff#0�d����GXK�����x}��o��f��P���������q^�2��@���*�%���.`6y��Kt�9�M~ĬH)4�c�{IA*+2&�Q���,���k�|���&b��,˗(�v9�	u��1����O&��)R�V�5M����e��R6e��� ��)⦈�"n��)⦈�"n��)��;7w鯩�ӧ���1������@L�$N<@���{���Z8���p��LHH1�0ˑ�|*"
���B��l�%�Ht������vs���ܒ�����ߋn��D#��H3�oB����C?���jL��ˤF��2�7�}N$U��� Al`��y�r��ro) ��y��B�N��;̉�)A�������5�ggۆ�Z��1��F����Q#'���F�&�����%^X��馡��e�k�F�H�r��'P�SNE8�T�SNE8�T�SNI8�d6���kb���Uڦ�6 �q�x#/j��U�K]�>`����/!���m��J�\#���ʶ��*�a�Q�N�[�xM��A�o(�+�����)MOlcQ�l��"�$ؖ����S� �� E��9�.�n�����2%ce��de�)y�؂�bk�(��*̻�����W�f�Å�3�j܃L�<��w�&Ov���@�I����d��s�	d� E��yn$� ��:�9d��9�3� H�C��5P�Gq�y�Q�Gq�y�Q�Gq�ߎ���5H(�
B�UP�uL�Wq�E0��|#���|c�
�Q�s�3Ed�!����Z�b�ɑ��ܶ�)���|'��`���_���K`�&���TN��|�Eug:�`�G<��a5	r�$x.,i4��� n (���T��Y�v��_Εږ�qu�Jr��<����#rJ�~���-#Z?�? �Xc�@��2�
0��(�x+�>UJ*;V�>�V#���(�h��1��(�h��1��(��hL�Yh ���ehb������,�G��@^R�b���/�f`�[�?�R�0@����>�S<�����,��;	�<~�I���(�hP��T�؂6Ew�ɡПs�����&0��.-�M��eX��q5�+��3��W�.��&zX�os+tB��],e��%�������BX����)*>��(�h��1��(�h��1��(�i��ͮ���\�U�IpqNn��ֈ̇��2��uNnH頶�yw�wU{*To�G1$֎	�>+��xPۙ�v�>U-��+���!��+(9S���[�k��_����c���;s�_�u��E�C
/Gu�@J`��g�U��	=����q�18��7q�4�i�yR�K|��l�ۚڠ�B>��9�j��>U��PTCQE5�PTCQE5�x�Tc6��P\b��C\z�!i�0<�HI[��4�(�����:��ꇱ|ޛ�����l�{��&QlU�+j;=B�.�>Up��	���Mq�hhP�X�`�u	�E�)�ypc7��Lې���߱������`H�t���r'}*%����Y%�x��"$��s"O.��p�a�7�lF��B�k�;k ���^oSC��.���e���Kc���mZ�S�8CuQo!��?�RJ����Ava�D�"�)�6�N��n6yI�ks���κ�u�*���+����bJ�))����bJ�))�����}D& ���-+��y�^ZeF���_��?�HU>�Be�?�2CB�0w��K�Zȁ�%�fv���K���M&Fq5�ߏ��
F��s1���<2�?������6DM�e� �-WD0���^/a�Gn�JPY��$�Eʣ����u��|bc�qC�Ht�69R������c&y�ޯ�w��ߩ��=g�7H���f�I��y�y��A����ƅJ��t�똖�����rY�k�f�(���(� �S��0�:�.v��Yn}��(1���h�pC�:u��'jO���~��&>~��Ca�+w�\I4qe�G0�<"Ҍ!M��O���p��>`A��l�g�^r4;#�'yK0���HTI�蓘�A<t�â<$B#ZÌg��a�?�k+y��S���ف"���*���"���*���"����6�
y�~C �K��ރ�yX%��9�Y*�Pm����F�*IsXn�Zb���T$�*��$B4�"�=�F'���:vP�\���Ʋ���>Pe����?V&C3̅S�i�����b��۶ΝWnc�C7[��H݀���h�������lu�UP�Bl�PL@1�PL@1��=e҇�.��j      �      x�3�4616!�0����� �r�      �      x������ � �      �   {   x�3�LL����T1JR14P�0	�ύ�1�K�J.6/*1��w��**���
I��pu�Lu�2���(�*�sL�ᐞ��������������i`ifdfahbi�Brf$*��gr��qqq �&�     