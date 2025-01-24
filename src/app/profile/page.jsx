import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const page = async () => {

  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 bg-white shadow-lg rounded-lg max-w-md w-full">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Welcome to Your Profile Page
        </h1>

        {user ? (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
              <h2 className="text-lg font-medium text-gray-700">User ID:</h2>
              <p className="text-gray-600">{user.id}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
              <h2 className="text-lg font-medium text-gray-700">Family Name:</h2>
              <p className="text-gray-600">{user.given_name}{' '}{user.family_name}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
              <h2 className="text-lg font-medium text-gray-700">Email:</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-600 text-center mt-4">No user data available.</p>
        )}
      </div>
    </div>
  )
}

export default page
