
'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateUser } from "../../api/user";
import { User } from "../../types/user";

const ProfilePage = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>({
    id: 1,
    name: "John Doe",
    email: "",
    country: "",
    sex: ""
  });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, name: event.target.value });
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, country: event.target.value });
  };

  const handleSexChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUser({ ...user, sex: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedUser = await updateUser('1', user);
    setUser(updatedUser);
    router.push("/profile");
  };

  if (!user) {
    router.push("/login");
    return null;
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            value={user.name}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={user.email}
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={0}
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="country">
            Country
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="country"
            type="text"
            placeholder="Country"
            value={user.country}
            onChange={handleCountryChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="sex">
            Sex
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="sex"
            value={user.sex}
            onChange={handleSexChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
