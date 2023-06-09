import useInstructorClass from "../../../hooks/useInstructorClass";

const MyClass = () => {

    const [myClass] = useInstructorClass();
    console.log("🚀 ~ file: MyClass.jsx:6 ~ MyClass ~ class:", myClass);

    
    return (
      <div>
        {/* <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="table">
            <thead>
              <tr className="text-base font-medium text-primary bg-secondary">
                <th>#</th>
                <th>image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={user?._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={
                            user?.image
                              ? user?.image
                              : "https://i.ibb.co/bWMQVhF/no-image.png"
                          }
                          alt="image"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td className="capitalize">{user?.role}</td>
                  <th className="flex gap-x-2">
                    <button
                      className={`bg-primary px-3 py-2 text-white rounded-lg hover:text-secondary`}
                    >
                      Update
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
    );
};

export default MyClass;