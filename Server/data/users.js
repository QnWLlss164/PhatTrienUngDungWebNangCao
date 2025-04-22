import bcrypt from "bcryptjs";

const users = [
  {
    first_name: "Quản trị",
    last_name: "viên",
    username: "admin",
    password: bcrypt.hashSync("admin", 10),
    avatar: "https://thumbs.dreamstime.com/b/admin-icon-vector-male-user-person-profile-avatar-gear-cogwheel-settings-configuration-flat-color-glyph-pictogram-150138136.jpg",
    thumb: "https://i.pinimg.com/736x/18/ef/23/18ef23f7b31efb99840e693fc62ab1b8.jpg",
    role: "admin",
  },
  {
    first_name: "Hiếu",
    last_name: "Đinh Trọng",
    username: "hieu1904",
    password: bcrypt.hashSync("123456", 10),
    avatar: "https://i.pinimg.com/564x/86/7d/21/867d21d9b7add5885dd114be585cc361.jpg",
    thumb: "https://i.pinimg.com/564x/e4/78/60/e47860400b3e43f9d93bde39dafbeb84.jpg",
    role: "guest",
  },
  {
    first_name: "Quân",
    last_name: "Huỳnh Đông",
    username: "hdquan",
    password: bcrypt.hashSync("123456", 10),
    avatar: "https://i.pinimg.com/564x/86/7d/21/867d21d9b7add5885dd114be585cc361.jpg",
    thumb: "https://i.pinimg.com/564x/e4/78/60/e47860400b3e43f9d93bde39dafbeb84.jpg",
    role: "guest",
  },
  {
    first_name: "Trương",
    last_name: "Minh Quyền",
    username: "tmquyen",
    password: bcrypt.hashSync("123456", 10),
    avatar: "https://i.pinimg.com/564x/86/7d/21/867d21d9b7add5885dd114be585cc361.jpg",
    thumb: "https://i.pinimg.com/564x/e4/78/60/e47860400b3e43f9d93bde39dafbeb84.jpg",
    role: "guest",
  },
];

export default users;
