import { Session } from "inspector";
import { Account, Profile, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";

export interface InputProps {
  name: string;
  onChangeCustom?: any;
  isFill?: boolean;
  title?: string;
  register?: any;
  customPlaceholder?: string;
  rules?: Record<string, unknown>;
  rightImg?: string | undefined;
  isDirty?: any;
  leftImg?: string | undefined;
  InputSelect?: any;
  setValueInput?: any;
  labelVisible?: boolean;
  verifyValue?: any;
  primary?: boolean;
  handleVerification?: any;
  rightClick?: () => void;
  leftClick?: () => void;
  error?: any;
}

// Next auth

// interface SessionNextAuthExtendProps {
//   accessToken?: string;
//   accessTokenExpires?: string;
//   rol: string;
// }

// interface TokenNextAuthExtendProps {
//   access_token?: string;
//   accessTokenExpires?: string;
//   rol: string;
// }

// export interface SessionNextAuthProps {
//   session: Session & SessionNextAuthExtendProps;
//   token: JWT & TokenNextAuthExtendProps;
//   user: AdapterUser;
//   params?: any;
// }
interface SessionNextAuthExtendProps extends Session {
  accessToken?: string;
  accessTokenExpires?: string;
  rol?: string;
}

interface TokenNextAuthExtendProps extends JWT {
  access_token?: string;
  accessTokenExpires?: string;
  rol?: string;
}

export interface SessionNextAuthProps {
  session: SessionNextAuthExtendProps;
  token: TokenNextAuthExtendProps;
  user: AdapterUser;
}

export interface JWTNextAuthProps {
  token: JWT & { accessTokenExpires: string };
  user: User & (AdapterUser & { expirationTime: string });
  account: Account | null;
  profile?: Profile | undefined;
  trigger?: "signIn" | "signUp" | "update" | undefined;
  isNewUser?: boolean | undefined;
  session?: any;
  accessTokenExpires?: string;
}
