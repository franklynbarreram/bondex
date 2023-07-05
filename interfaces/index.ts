export type UserType = {
	data?:any;
	id: number;
	email: string;
	fullname: string;
	lastname: string;
	phoneNumber: string;
};

export type UserRegisterRequest = {
	email: string;
	name: string;
	lastName: string;
	identification: string;
	identificationType: string;
};

export type UserDataResponse = {
	id: number;
	email: string;
	name: string;
	lastname: string;
	identification: string;
	identificationType: string;
};

export type VerifyValues = {
	email: string;
	identification: string;
};

export interface AuthSession {
	accessToken?: string;
	user?: UserType;
}

export type OptionType = {
	text: string;
	value: string;
	disabled: boolean;
	placeholder: boolean;
};
