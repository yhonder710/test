// Fundamentos TS - Tipos Avanzados

type UserBasic = { id: number; name: string; email?: string };

type ReadOnlyUser = Readonly<UserBasic>;
type UserRecord = Record<string, UserBasic>;
type PartialUser = Partial<UserBasic>;
type PickUser = Pick<UserBasic, "id" | "name">;
type Excluded = Exclude<string | number | boolean, number>;
type NonNullableType = NonNullable<string | undefined>;

function info(u: UserBasic): string {
  return `${u.id}: ${u.name}`;
}

type FnReturn = ReturnType<typeof info>;

// Function usage to showcase ReturnType
console.log(info({ id: 1, name: "Alex" } as UserBasic));
const f: FnReturn = "" as any;

// Conditional types demo
type IsString<T> = T extends string ? true : false;
type AIsString = IsString<string>;
type BIsString = IsString<number>;
console.log("IsString<string>:", (true as IsString<string>));
