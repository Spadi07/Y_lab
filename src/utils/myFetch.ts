import { DBase } from "./db";

export async function myFetch(mail: string, pass: string) {
    const result = DBase.find((user) => {
      return user.mail === mail && user.password === pass;
    });
  
    return Promise.resolve(result);
  };