import { User } from "@/types/user";

export async function updateUser(id: string, data: Partial<User>): Promise<User> {
  const user = {
    id: 1,
    name: "John Doe",
    email: "",
    country: "",
    sex: ""
  }
  console.log({data})
  return await Promise.resolve({
    ...user,
  });


}