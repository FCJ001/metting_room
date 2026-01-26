export class LoginUserVo {
  userInfo: {
    id: number;
    username: string;
    nickName: string;
    email: string;
    phoneNumber: string;
    headPic: string;
    createTime: number;
    isFrozen: boolean;
    isAdmin: boolean;
    roles: string[];
    permissions: string[];
  };
  accessToken: string;
  refreshToken: string;
}
