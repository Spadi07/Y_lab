export interface IUser {
    id: number;
    name: string;
    mail: string;
    password: string;
  }
 export const DBase: IUser[] = [
    {
     id: 1,
     name: 'Ivan',
     mail: 'IvanDevOps@gmail.com',
     password: 'superhack123',
    },
    {
     id: 2,
     name: 'Sergey',
     mail: 'Mrnevermore@icloud.com',
     password: 'ugabuga777',
    },
    {
     id: 3,
     name: 'Vladimir',
     mail: 'Clickerman@ya.ru',
     password: 'knockknock000',
    }
  ]