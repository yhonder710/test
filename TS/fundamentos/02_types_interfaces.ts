// Fundamentos TS - Tipos, Interfaces y Aliases

export interface User {
  id: number;
  name: string;
}

type UserType = {
  id: number;
  name: string;
};

type Admin = User & { role: string };

interface Indexable {
  [key: string]: string;
}

const u: User = { id: 1, name: "Alex" };
const admin: Admin = { id: 2, name: "Pat", role: "admin" };
const map: Indexable = { hello: "world" };
console.log(u, admin, map);
