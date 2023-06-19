//#region Constants
const PREFIX: string = "CLAIM_";
const IDENTITY_PREFIX: string = PREFIX.concat("IDENTITY_");
const SUFIX_GETALL: string = ":GETALL";
const SUFIX_GETLIST: string = ":GETLIST";
const SUFIX_GETBYID: string = ":GETBYID";
//#endregion

//#region Identity/USER
export const IDENTITY_USER_GETALL: string = IDENTITY_PREFIX.concat("USER", SUFIX_GETALL);
export const IDENTITY_USER_GETLIST: string = IDENTITY_PREFIX.concat("USER", SUFIX_GETLIST);
export const IDENTITY_USER_GETBYID: string = IDENTITY_PREFIX.concat("USER", SUFIX_GETBYID);
//#endregion
//#region Identity/ROLE
export const IDENTITY_ROLE_GETALL: string = IDENTITY_PREFIX.concat("ROLE", SUFIX_GETALL);
export const IDENTITY_ROLE_GETLIST: string = IDENTITY_PREFIX.concat("ROLE", SUFIX_GETLIST);
export const IDENTITY_ROLE_GETBYID: string = IDENTITY_PREFIX.concat("ROLE", SUFIX_GETBYID);
//#endregion
//#region Identity/ROLECLAIM
export const IDENTITY_ROLECLAIM_GETALL: string = IDENTITY_PREFIX.concat("ROLECLAIM", SUFIX_GETALL);
export const IDENTITY_ROLECLAIM_GETLIST: string = IDENTITY_PREFIX.concat("ROLECLAIM", SUFIX_GETLIST);
export const IDENTITY_ROLECLAIM_GETBYID: string = IDENTITY_PREFIX.concat("ROLECLAIM", SUFIX_GETBYID);
//#endregion
//#region Identity/USERCLAIM
export const IDENTITY_USERCLAIM_GETALL: string = IDENTITY_PREFIX.concat("USERCLAIM", SUFIX_GETALL);
export const IDENTITY_USERCLAIM_GETLIST: string = IDENTITY_PREFIX.concat("USERCLAIM", SUFIX_GETLIST);
export const IDENTITY_USERCLAIM_GETBYID: string = IDENTITY_PREFIX.concat("USERCLAIM", SUFIX_GETBYID);
//#endregion
//#region Identity/USERLOGIN
export const IDENTITY_USERLOGIN_GETALL: string = IDENTITY_PREFIX.concat("USERLOGIN", SUFIX_GETALL);
export const IDENTITY_USERLOGIN_GETLIST: string = IDENTITY_PREFIX.concat("USERLOGIN", SUFIX_GETLIST);
export const IDENTITY_USERLOGIN_GETBYID: string = IDENTITY_PREFIX.concat("USERLOGIN", SUFIX_GETBYID);
//#endregion
//#region Identity/USERROLE
export const IDENTITY_USERROLE_GETALL: string = IDENTITY_PREFIX.concat("USERROLE", SUFIX_GETALL);
export const IDENTITY_USERROLE_GETLIST: string = IDENTITY_PREFIX.concat("USERROLE", SUFIX_GETLIST);
export const IDENTITY_USERROLE_GETBYID: string = IDENTITY_PREFIX.concat("USERROLE", SUFIX_GETBYID);
//#endregion
//#region Identity/USERTOKEN
export const IDENTITY_USERTOKEN_GETALL: string = IDENTITY_PREFIX.concat("USERTOKEN", SUFIX_GETALL);
export const IDENTITY_USERTOKEN_GETLIST: string = IDENTITY_PREFIX.concat("USERTOKEN", SUFIX_GETLIST);
export const IDENTITY_USERTOKEN_GETBYID: string = IDENTITY_PREFIX.concat("USERTOKEN", SUFIX_GETBYID);
//#endregion
